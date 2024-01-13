export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.1uDRr4dR.js","app":"_app/immutable/entry/app.tnFuzXJb.js","imports":["_app/immutable/entry/start.1uDRr4dR.js","_app/immutable/chunks/entry.oOQTa6ep.js","_app/immutable/chunks/scheduler.zMJaRgub.js","_app/immutable/entry/app.tnFuzXJb.js","_app/immutable/chunks/scheduler.zMJaRgub.js","_app/immutable/chunks/index.kOJkLDr-.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
