import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
    plugins: [react(), tsconfigPaths()],
    server: {
        host: true,
        port: 5173,
        hmr: {
            host: "game.arcathoria.dev",
            protocol: "wss",
            clientPort: 443,
        },
    },
});
