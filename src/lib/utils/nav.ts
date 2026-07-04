import { goto as kitGoto } from '$app/navigation';
import { base } from '$app/paths';

type GotoParams = Parameters<typeof kitGoto>;

/**
 * Base-aware wrapper around SvelteKit's goto().
 *
 * SvelteKit does not prepend the configured base path to root-relative URLs,
 * so goto('/auth') would navigate to the origin root instead of e.g.
 * /openwebui/auth when the app is served under a subpath. This wrapper prefixes
 * the base for root-relative string URLs. It is a no-op when base is empty
 * (the default build), preserving upstream behaviour.
 */
export function goto(url: GotoParams[0], opts?: GotoParams[1]): ReturnType<typeof kitGoto> {
	if (
		base &&
		typeof url === 'string' &&
		url.startsWith('/') &&
		url !== base &&
		!url.startsWith(`${base}/`)
	) {
		url = `${base}${url}`;
	}
	return kitGoto(url, opts);
}
