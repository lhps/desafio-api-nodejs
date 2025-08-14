import {defineConfig} from "vitest/config";

export default defineConfig({
    test: {
        coverage: {
            enabled: true,
            provider: 'v8',
            reporter: ['text', 'json', 'html'],
            all: true,
            include: ['src/**/*.ts'],
            exclude: ['src/database/client.ts', 'src/app.ts', 'src/server.ts', 'src/database/seed.ts', 'src/database/schema.ts', 'src/tests/**/*'],
        }
    }
})