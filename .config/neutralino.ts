import { ResolvedConfig, Plugin } from 'vite';

const neutralino = (): Plugin => {
	let config: ResolvedConfig;
	return {
		name: 'neutralino',
		configResolved(resolvedConfig) {
			config = resolvedConfig;
		},
		transform(code, id, options) {
			if (/.*\/src\/index.tsx$/.test(id) && config.mode === 'development') {
				try {
					const auth_info = require('../.tmp/auth_info.json');
					return code.replace('init()', [
						`window['NL_PORT'] = ${auth_info.port};`,
						`window['NL_TOKEN'] = "${auth_info.accessToken}";`,
						`window['NL_ARGS'] = [];`,
						`init()`
					].join('\n'));
				} catch (error) {
					return code;
				}
			}
			return code;
		}
	};
};

export default neutralino;