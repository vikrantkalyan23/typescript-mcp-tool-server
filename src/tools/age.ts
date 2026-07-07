import { z } from "zod";
import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

export function registerAgeTool(server: McpServer) {
  server.registerTool(
    "get_age",
    {
      title: "Get Age",
      description: "Get age",
      inputSchema: {
        person: z.string().describe("Name of the person"),
      },
    },
    async ({ person }) => {
      const fakeAge = Math.round(15 + Math.random() * 15);
      return {
        content: [{ type: "text", text: `The age of ${person} is ${fakeAge} years old.` }],
      };
    }
  );
}