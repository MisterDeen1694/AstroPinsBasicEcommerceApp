/// <reference path="../.astro/types.d.ts" />
interface ImportMetaEnv {
	readonly PUBLIC_STRIPE_KEY: string;
	readonly SECRET_STRIPE_KEY: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
