import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    css    : {
        preprocessorOptions: {
            scss: {
                api           : "modern-compiler",
                additionalData: `@use "/src/assets/styles/abstract/_index.scss" as *;`
            }
        }
    },
    base   : "/desn340-project-4/" 
});
