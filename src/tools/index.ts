
import { registerWeatherTool } from "./weather.js";
import { registerAgeTool } from "./age.js";
import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

const toolRegistrars = [registerWeatherTool, registerAgeTool];

export function registerAllTools(server: McpServer) {
  for (const register of toolRegistrars) {
    register(server);
  }
}