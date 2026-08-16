import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

/**
 * Font Awesome ships five formats per family (eot/woff2/woff/ttf/svg) and its
 * @font-face lists every one. Vite emits each referenced file, which put ~2.6 MB
 * of webfonts into the build that no supported browser ever requests: the bare
 * `src:…eot` is an IE8 hack, and the real cascade puts woff2 first, so anything
 * reaching the second `src` takes woff2 and stops. browserslist already excludes
 * IE, and a recorded page load fetches only the two .woff2 files.
 *
 * Rewriting the cascade to woff2 alone drops the rest. This runs `pre` so it
 * lands before Vite resolves the url()s — otherwise the files are emitted first
 * and we would only be orphaning them, which trades dead weight for dangling
 * references.
 */
function fontAwesomeWoff2Only() {
  // Matches the IE8 bare `src` plus the format cascade that follows it.
  const SRC_CASCADE = /src:url\([^)]*\.eot\);src:[^;}]*/g;
  const WOFF2 = /url\([^)]*\.woff2\)\s*format\("woff2"\)/;

  return {
    name: "font-awesome-woff2-only",
    enforce: "pre",
    transform(code, id) {
      const [file] = id.split("?");
      if (!file.endsWith(".css") || !file.includes("@fortawesome")) return null;

      const out = code.replace(SRC_CASCADE, (cascade) => {
        const woff2 = cascade.match(WOFF2);
        // Leave anything that does not offer woff2 exactly as it was, so an
        // upstream change to the @font-face shape degrades to today's behaviour
        // rather than dropping the font entirely.
        return woff2 ? `src:${woff2[0]}` : cascade;
      });

      return out === code ? null : { code: out, map: null };
    },
  };
}

export default defineConfig({
  base: "/portfolio/",
  resolve: {
    alias: {
      "lottie-web": "lottie-web/build/player/lottie_light.js",
    },
  },
  plugins: [fontAwesomeWoff2Only(), react()],
  server: {
    open: true,
  },
  build: {
    outDir: "build",
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("/assets/lottie/")) {
            return "lottie-animations";
          }
          if (id.includes("node_modules/lottie-web") || id.includes("node_modules/lottie-react")) {
            return "vendor-lottie";
          }
          if (id.includes("node_modules/react-dom") || id.includes("node_modules/react/")) {
            return "vendor-react";
          }
        },
      },
    },
  },
});
