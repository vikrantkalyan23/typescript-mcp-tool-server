import { z } from "zod";
import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

export function registerWeatherTool(server: McpServer) {
  server.registerTool(
    "get_weather",
    {
      title: "Get Weather",
      description: "Get current weather for a city",
      inputSchema: {
        city: z.string().describe("Name of the city"),
      },
    },
    async ({ city }) => {
      const fakeTemp = Math.round(15 + Math.random() * 15);
      return {
        content: [{ type: "text", text: `The weather in ${city} is ${fakeTemp}°C and sunny.` }],
      };
    }
  );
}