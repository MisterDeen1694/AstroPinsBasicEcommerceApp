// @ts-check
import { defineConfig } from "astro/config";

import icon from "astro-icon";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
	image: {
		domains: ["files.stripe.com"],
	},

	output: "server",
	adapter: netlify(),
	integrations: [icon()],
});
