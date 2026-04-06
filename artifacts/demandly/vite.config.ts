import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

// ✅ Safe env handling (works everywhere)
const port = Number(process.env.PORT) || 3000;
const basePath = process.env.BASE_PATH || "/";

export default defineConfig(async () => {
  const isReplit =
    process.env.REPL_ID !== undefined &&
    process.env.NODE_ENV !== "production";

  return {
    base: basePath,

    plugins: [
      react(),
      tailwindcss(),
      runtimeErrorOverlay(),

      // ✅ Only load Replit-specific plugins in dev
      ...(isReplit
        ? [
            (await import("@replit/vite-plugin-cartographer")).cartographer({
              root: path.resolve(import.meta.dirname, ".."),
            }),
            (await import("@replit/vite-plugin-dev-banner")).devBanner(),
          ]
        : []),
    ],

    optimizeDeps: {
      include: ["@calcom/embed-react"],
    },

    resolve: {
      alias: {
        "@": path.resolve(import.meta.dirname, "src"),
        "@assets": path.resolve(
          import.meta.dirname,
          "..",
          "..",
          "attached_assets",
        ),
      },
      dedupe: ["react", "react-dom"],
    },

    root: path.resolve(import.meta.dirname),

    build: {
      outDir: path.resolve(import.meta.dirname, "dist/public"),
      emptyOutDir: true,
    },

    // ✅ Dev server only (ignored by Vercel)
    server: {
      port,
      host: "0.0.0.0",
    },

    preview: {
      port,
      host: "0.0.0.0",
    },
  };
});
