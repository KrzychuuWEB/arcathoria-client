// @ts-ignore
import { defineConfig } from "orval";

export default defineConfig({
    axios: {
        input: "./src/api/openapi.json",
        output: {
            target: "src/api/orval.ts",
            client: "react-query",
            headers: true,
            prettier: true,
            mode: "split",
            httpClient: "axios",
            override: {
                mutator: { path: "src/api/client.ts", name: "api" },
            },
            mock: false,
        },
    },
});
