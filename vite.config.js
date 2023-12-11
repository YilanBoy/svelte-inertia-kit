import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import { svelte } from "@sveltejs/vite-plugin-svelte";

export default defineConfig({
    plugins: [
        laravel({
            input: ["resources/css/app.css", "resources/js/app.js"],
            ssr: "resources/js/ssr.js",
            refresh: true,
        }),
        svelte({
            onwarn(warning, defaultHandler) {
                if (warning.code.startsWith("a11y-")) return;

                defaultHandler(warning);
            },
        }),
    ],
});
