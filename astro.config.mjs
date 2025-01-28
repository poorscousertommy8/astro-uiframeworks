import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import node from "@astrojs/node";
import react from "@astrojs/react";
import vue from "@astrojs/vue";
import svelte from "@astrojs/svelte";

export default defineConfig({
	integrations: [tailwind(), react(), vue(), svelte()],
	output: "server",
	adapter: node({
		mode: "standalone",
	}),
});
