

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.ufLqLrs5.js","_app/immutable/chunks/scheduler.zMJaRgub.js","_app/immutable/chunks/index.kOJkLDr-.js"];
export const stylesheets = ["_app/immutable/assets/0.V-2gfkrX.css"];
export const fonts = [];
