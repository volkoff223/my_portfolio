

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.xpMlc1wG.js","_app/immutable/chunks/scheduler.zMJaRgub.js","_app/immutable/chunks/index.kOJkLDr-.js","_app/immutable/chunks/entry.oOQTa6ep.js"];
export const stylesheets = [];
export const fonts = [];
