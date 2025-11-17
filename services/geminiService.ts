import { GoogleGenAI } from "@google/genai";
import type { GroundingChunk } from "@google/genai";

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
    throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

export async function summarizeReportText(text: string): Promise<string> {
    try {
        const prompt = `
            Please act as a port operations analyst. Summarize the following daily shipping and cargo handling report from Port Qasim Authority. 
            
            Your summary should be structured and easy to read. Extract the following key information if available:
            - **Overall Summary:** A brief overview of the day's activities.
            - **Vessel Movements:** Total number of ships arrived, berthed, and sailed. Mention any notable vessel names if possible.
            - **Cargo Handling:** Total cargo handled in tonnes. Break it down by import and export if the data is present.
            - **Top Commodities:** List the main types of cargo handled (e.g., Containers, Coal, LNG, Edible Oil).
            - **Berth Occupancy:** Mention the status of the berths.
            - **Key Events or Delays:** Note any significant events, issues, or delays mentioned in the report.

            Present the summary in a clean, professional format using markdown. If some information is not available, state that.

            Here is the report text:
            ---
            ${text}
            ---
        `;

        const response = await ai.models.generateContent({
            model: 'gemini-2.5-pro',
            contents: prompt,
            config: {
                thinkingConfig: {
                    thinkingBudget: 32768,
                },
            },
        });
        
        return response.text;

    } catch (error) {
        console.error("Error in Gemini API call:", error);
        throw new Error("Failed to communicate with the Gemini API.");
    }
}

export interface LocationInfo {
    text: string;
    sources: GroundingChunk[];
}

function getCurrentPosition(): Promise<GeolocationPosition> {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject, {
            timeout: 5000,
            enableHighAccuracy: true,
        });
    });
}

export async function getLocationInfo(locationName: string): Promise<LocationInfo> {
    try {
        let toolConfig: any = {};
        try {
            const position = await getCurrentPosition();
            toolConfig = {
                retrievalConfig: {
                    latLng: {
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                    },
                },
            };
        } catch (geoError) {
            console.warn("Could not get geolocation, proceeding without it.", geoError);
        }

        const prompt = `Provide up-to-date information and key details about the logistics hub at this location: ${locationName}. Focus on current operational status, any known delays, and key facilities.`;
        
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: prompt,
            config: {
                tools: [{ googleMaps: {} }],
            },
            toolConfig: toolConfig,
        });

        const sources = response.candidates?.[0]?.groundingMetadata?.groundingChunks || [];
        
        return { text: response.text, sources };

    } catch (error) {
        console.error("Error in Gemini API call for location info:", error);
        throw new Error("Failed to get location information from the Gemini API.");
    }
}