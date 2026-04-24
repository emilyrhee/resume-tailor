
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * This module provides access to environment variables that are injected _statically_ into your bundle at build time and are limited to _private_ access.
 * 
 * |         | Runtime                                                                    | Build time                                                               |
 * | ------- | -------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
 * | Private | [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private) | [`$env/static/private`](https://svelte.dev/docs/kit/$env-static-private) |
 * | Public  | [`$env/dynamic/public`](https://svelte.dev/docs/kit/$env-dynamic-public)   | [`$env/static/public`](https://svelte.dev/docs/kit/$env-static-public)   |
 * 
 * Static environment variables are [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env` at build time and then statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * **_Private_ access:**
 * 
 * - This module cannot be imported into client-side code
 * - This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured)
 * 
 * For example, given the following build time environment:
 * 
 * ```env
 * ENVIRONMENT=production
 * PUBLIC_BASE_URL=http://site.com
 * ```
 * 
 * With the default `publicPrefix` and `privatePrefix`:
 * 
 * ```ts
 * import { ENVIRONMENT, PUBLIC_BASE_URL } from '$env/static/private';
 * 
 * console.log(ENVIRONMENT); // => "production"
 * console.log(PUBLIC_BASE_URL); // => throws error during build
 * ```
 * 
 * The above values will be the same _even if_ different values for `ENVIRONMENT` or `PUBLIC_BASE_URL` are set at runtime, as they are statically replaced in your code with their build time values.
 */
declare module '$env/static/private' {
	export const SHELL: string;
	export const npm_command: string;
	export const __ETC_PROFILE_DONE: string;
	export const COLORTERM: string;
	export const XDG_CONFIG_DIRS: string;
	export const VSCODE_DEBUGPY_ADAPTER_ENDPOINTS: string;
	export const NIX_BUILD_CORES: string;
	export const XDG_MENU_PREFIX: string;
	export const TERM_PROGRAM_VERSION: string;
	export const GTK_IM_MODULE: string;
	export const configureFlags: string;
	export const QT_IM_MODULES: string;
	export const mesonFlags: string;
	export const npm_config_npm_globalconfig: string;
	export const shell: string;
	export const depsHostHost: string;
	export const NODE: string;
	export const LC_ADDRESS: string;
	export const LC_NAME: string;
	export const SSH_AUTH_SOCK: string;
	export const npm_config_verify_deps_before_run: string;
	export const STRINGS: string;
	export const npm_config__jsr_registry: string;
	export const depsTargetTarget: string;
	export const XCURSOR_PATH: string;
	export const MEMORY_PRESSURE_WRITE: string;
	export const PYDEVD_DISABLE_FILE_VALIDATION: string;
	export const stdenv: string;
	export const builder: string;
	export const XMODIFIERS: string;
	export const DESKTOP_SESSION: string;
	export const LC_MONETARY: string;
	export const NO_AT_BRIDGE: string;
	export const shellHook: string;
	export const npm_config_globalconfig: string;
	export const EDITOR: string;
	export const phases: string;
	export const DBUS_STARTER_BUS_TYPE: string;
	export const NAUTILUS_4_EXTENSION_DIR: string;
	export const PWD: string;
	export const NIX_PROFILES: string;
	export const NIX_GSETTINGS_OVERRIDES_DIR: string;
	export const SOURCE_DATE_EPOCH: string;
	export const LOGNAME: string;
	export const XDG_SESSION_DESKTOP: string;
	export const XDG_SESSION_TYPE: string;
	export const NIX_ENFORCE_NO_NATIVE: string;
	export const CUPS_DATADIR: string;
	export const NIX_PATH: string;
	export const SYSTEMD_EXEC_PID: string;
	export const NIXPKGS_CONFIG: string;
	export const CXX: string;
	export const BUNDLED_DEBUGPY_PATH: string;
	export const XAUTHORITY: string;
	export const TEMPDIR: string;
	export const system: string;
	export const VSCODE_GIT_ASKPASS_NODE: string;
	export const HOST_PATH: string;
	export const GDM_LANG: string;
	export const IN_NIX_SHELL: string;
	export const GI_TYPELIB_PATH: string;
	export const doInstallCheck: string;
	export const HOME: string;
	export const USERNAME: string;
	export const NIX_BINTOOLS: string;
	export const SSH_ASKPASS: string;
	export const LANG: string;
	export const LC_PAPER: string;
	export const LS_COLORS: string;
	export const XDG_CURRENT_DESKTOP: string;
	export const depsTargetTargetPropagated: string;
	export const npm_package_version: string;
	export const PYTHONSTARTUP: string;
	export const MEMORY_PRESSURE_WATCH: string;
	export const VTE_VERSION: string;
	export const WAYLAND_DISPLAY: string;
	export const cmakeFlags: string;
	export const GIO_EXTRA_MODULES: string;
	export const outputs: string;
	export const NIX_STORE: string;
	export const TMPDIR: string;
	export const GIT_ASKPASS: string;
	export const LD: string;
	export const buildPhase: string;
	export const pnpm_config_verify_deps_before_run: string;
	export const MANAGERPID: string;
	export const INIT_CWD: string;
	export const READELF: string;
	export const CHROME_DESKTOP: string;
	export const NIX_USER_PROFILE_DIR: string;
	export const INFOPATH: string;
	export const npm_lifecycle_script: string;
	export const doCheck: string;
	export const VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
	export const GNOME_SETUP_DISPLAY: string;
	export const VSCODE_PYTHON_AUTOACTIVATE_GUARD: string;
	export const depsBuildBuild: string;
	export const XDG_SESSION_CLASS: string;
	export const LC_IDENTIFICATION: string;
	export const TERM: string;
	export const npm_package_name: string;
	export const PYTHON_BASIC_REPL: string;
	export const GTK_PATH: string;
	export const SIZE: string;
	export const propagatedNativeBuildInputs: string;
	export const USER: string;
	export const strictDeps: string;
	export const npm_config_frozen_lockfile: string;
	export const VSCODE_GIT_IPC_HANDLE: string;
	export const TZDIR: string;
	export const AR: string;
	export const AS: string;
	export const TEMP: string;
	export const DISPLAY: string;
	export const NIX_BINTOOLS_WRAPPER_TARGET_HOST_x86_64_unknown_linux_gnu: string;
	export const npm_lifecycle_event: string;
	export const SHLVL: string;
	export const NIX_BUILD_TOP: string;
	export const NM: string;
	export const PAGER: string;
	export const NIX_CFLAGS_COMPILE: string;
	export const LC_TELEPHONE: string;
	export const QTWEBKIT_PLUGIN_PATH: string;
	export const patches: string;
	export const QT_IM_MODULE: string;
	export const LC_MEASUREMENT: string;
	export const __NIXOS_SET_ENVIRONMENT_DONE: string;
	export const buildInputs: string;
	export const DBUS_STARTER_ADDRESS: string;
	export const LOCALE_ARCHIVE: string;
	export const preferLocalBuild: string;
	export const MANAGERPIDFDID: string;
	export const LESSKEYIN_SYSTEM: string;
	export const npm_config_user_agent: string;
	export const GDM_X_SERVER_EXTRA_ARGS: string;
	export const TERMINFO_DIRS: string;
	export const PNPM_SCRIPT_SRC_DIR: string;
	export const npm_execpath: string;
	export const FC_FONTATIONS: string;
	export const LD_LIBRARY_PATH: string;
	export const XDG_RUNTIME_DIR: string;
	export const NODE_PATH: string;
	export const depsBuildTarget: string;
	export const OBJCOPY: string;
	export const NIX_XDG_DESKTOP_PORTAL_DIR: string;
	export const out: string;
	export const LC_TIME: string;
	export const npm_package_json: string;
	export const VSCODE_GIT_ASKPASS_MAIN: string;
	export const STRIP: string;
	export const XDG_DATA_DIRS: string;
	export const GDK_BACKEND: string;
	export const LIBEXEC_PATH: string;
	export const TMP: string;
	export const OBJDUMP: string;
	export const PATH: string;
	export const propagatedBuildInputs: string;
	export const npm_config_node_gyp: string;
	export const GDMSESSION: string;
	export const CC: string;
	export const NIX_CC: string;
	export const DBUS_SESSION_BUS_ADDRESS: string;
	export const depsBuildTargetPropagated: string;
	export const depsBuildBuildPropagated: string;
	export const NIX_CC_WRAPPER_TARGET_HOST_x86_64_unknown_linux_gnu: string;
	export const npm_config_registry: string;
	export const CONFIG_SHELL: string;
	export const __structuredAttrs: string;
	export const npm_node_execpath: string;
	export const RANLIB: string;
	export const npm_config_engine_strict: string;
	export const NIX_HARDENING_ENABLE: string;
	export const LC_NUMERIC: string;
	export const OLDPWD: string;
	export const NIX_LDFLAGS: string;
	export const nativeBuildInputs: string;
	export const name: string;
	export const TERM_PROGRAM: string;
	export const depsHostHostPropagated: string;
	export const NODE_ENV: string;
}

/**
 * This module provides access to environment variables that are injected _statically_ into your bundle at build time and are _publicly_ accessible.
 * 
 * |         | Runtime                                                                    | Build time                                                               |
 * | ------- | -------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
 * | Private | [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private) | [`$env/static/private`](https://svelte.dev/docs/kit/$env-static-private) |
 * | Public  | [`$env/dynamic/public`](https://svelte.dev/docs/kit/$env-dynamic-public)   | [`$env/static/public`](https://svelte.dev/docs/kit/$env-static-public)   |
 * 
 * Static environment variables are [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env` at build time and then statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * **_Public_ access:**
 * 
 * - This module _can_ be imported into client-side code
 * - **Only** variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`) are included
 * 
 * For example, given the following build time environment:
 * 
 * ```env
 * ENVIRONMENT=production
 * PUBLIC_BASE_URL=http://site.com
 * ```
 * 
 * With the default `publicPrefix` and `privatePrefix`:
 * 
 * ```ts
 * import { ENVIRONMENT, PUBLIC_BASE_URL } from '$env/static/public';
 * 
 * console.log(ENVIRONMENT); // => throws error during build
 * console.log(PUBLIC_BASE_URL); // => "http://site.com"
 * ```
 * 
 * The above values will be the same _even if_ different values for `ENVIRONMENT` or `PUBLIC_BASE_URL` are set at runtime, as they are statically replaced in your code with their build time values.
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to environment variables set _dynamically_ at runtime and that are limited to _private_ access.
 * 
 * |         | Runtime                                                                    | Build time                                                               |
 * | ------- | -------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
 * | Private | [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private) | [`$env/static/private`](https://svelte.dev/docs/kit/$env-static-private) |
 * | Public  | [`$env/dynamic/public`](https://svelte.dev/docs/kit/$env-dynamic-public)   | [`$env/static/public`](https://svelte.dev/docs/kit/$env-static-public)   |
 * 
 * Dynamic environment variables are defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/main/packages/adapter-node) (or running [`vite preview`](https://svelte.dev/docs/kit/cli)), this is equivalent to `process.env`.
 * 
 * **_Private_ access:**
 * 
 * - This module cannot be imported into client-side code
 * - This module includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured)
 * 
 * > [!NOTE] In `dev`, `$env/dynamic` includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 * 
 * > [!NOTE] To get correct types, environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * >
 * > ```env
 * > MY_FEATURE_FLAG=
 * > ```
 * >
 * > You can override `.env` values from the command line like so:
 * >
 * > ```sh
 * > MY_FEATURE_FLAG="enabled" npm run dev
 * > ```
 * 
 * For example, given the following runtime environment:
 * 
 * ```env
 * ENVIRONMENT=production
 * PUBLIC_BASE_URL=http://site.com
 * ```
 * 
 * With the default `publicPrefix` and `privatePrefix`:
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * 
 * console.log(env.ENVIRONMENT); // => "production"
 * console.log(env.PUBLIC_BASE_URL); // => undefined
 * ```
 */
declare module '$env/dynamic/private' {
	export const env: {
		SHELL: string;
		npm_command: string;
		__ETC_PROFILE_DONE: string;
		COLORTERM: string;
		XDG_CONFIG_DIRS: string;
		VSCODE_DEBUGPY_ADAPTER_ENDPOINTS: string;
		NIX_BUILD_CORES: string;
		XDG_MENU_PREFIX: string;
		TERM_PROGRAM_VERSION: string;
		GTK_IM_MODULE: string;
		configureFlags: string;
		QT_IM_MODULES: string;
		mesonFlags: string;
		npm_config_npm_globalconfig: string;
		shell: string;
		depsHostHost: string;
		NODE: string;
		LC_ADDRESS: string;
		LC_NAME: string;
		SSH_AUTH_SOCK: string;
		npm_config_verify_deps_before_run: string;
		STRINGS: string;
		npm_config__jsr_registry: string;
		depsTargetTarget: string;
		XCURSOR_PATH: string;
		MEMORY_PRESSURE_WRITE: string;
		PYDEVD_DISABLE_FILE_VALIDATION: string;
		stdenv: string;
		builder: string;
		XMODIFIERS: string;
		DESKTOP_SESSION: string;
		LC_MONETARY: string;
		NO_AT_BRIDGE: string;
		shellHook: string;
		npm_config_globalconfig: string;
		EDITOR: string;
		phases: string;
		DBUS_STARTER_BUS_TYPE: string;
		NAUTILUS_4_EXTENSION_DIR: string;
		PWD: string;
		NIX_PROFILES: string;
		NIX_GSETTINGS_OVERRIDES_DIR: string;
		SOURCE_DATE_EPOCH: string;
		LOGNAME: string;
		XDG_SESSION_DESKTOP: string;
		XDG_SESSION_TYPE: string;
		NIX_ENFORCE_NO_NATIVE: string;
		CUPS_DATADIR: string;
		NIX_PATH: string;
		SYSTEMD_EXEC_PID: string;
		NIXPKGS_CONFIG: string;
		CXX: string;
		BUNDLED_DEBUGPY_PATH: string;
		XAUTHORITY: string;
		TEMPDIR: string;
		system: string;
		VSCODE_GIT_ASKPASS_NODE: string;
		HOST_PATH: string;
		GDM_LANG: string;
		IN_NIX_SHELL: string;
		GI_TYPELIB_PATH: string;
		doInstallCheck: string;
		HOME: string;
		USERNAME: string;
		NIX_BINTOOLS: string;
		SSH_ASKPASS: string;
		LANG: string;
		LC_PAPER: string;
		LS_COLORS: string;
		XDG_CURRENT_DESKTOP: string;
		depsTargetTargetPropagated: string;
		npm_package_version: string;
		PYTHONSTARTUP: string;
		MEMORY_PRESSURE_WATCH: string;
		VTE_VERSION: string;
		WAYLAND_DISPLAY: string;
		cmakeFlags: string;
		GIO_EXTRA_MODULES: string;
		outputs: string;
		NIX_STORE: string;
		TMPDIR: string;
		GIT_ASKPASS: string;
		LD: string;
		buildPhase: string;
		pnpm_config_verify_deps_before_run: string;
		MANAGERPID: string;
		INIT_CWD: string;
		READELF: string;
		CHROME_DESKTOP: string;
		NIX_USER_PROFILE_DIR: string;
		INFOPATH: string;
		npm_lifecycle_script: string;
		doCheck: string;
		VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
		GNOME_SETUP_DISPLAY: string;
		VSCODE_PYTHON_AUTOACTIVATE_GUARD: string;
		depsBuildBuild: string;
		XDG_SESSION_CLASS: string;
		LC_IDENTIFICATION: string;
		TERM: string;
		npm_package_name: string;
		PYTHON_BASIC_REPL: string;
		GTK_PATH: string;
		SIZE: string;
		propagatedNativeBuildInputs: string;
		USER: string;
		strictDeps: string;
		npm_config_frozen_lockfile: string;
		VSCODE_GIT_IPC_HANDLE: string;
		TZDIR: string;
		AR: string;
		AS: string;
		TEMP: string;
		DISPLAY: string;
		NIX_BINTOOLS_WRAPPER_TARGET_HOST_x86_64_unknown_linux_gnu: string;
		npm_lifecycle_event: string;
		SHLVL: string;
		NIX_BUILD_TOP: string;
		NM: string;
		PAGER: string;
		NIX_CFLAGS_COMPILE: string;
		LC_TELEPHONE: string;
		QTWEBKIT_PLUGIN_PATH: string;
		patches: string;
		QT_IM_MODULE: string;
		LC_MEASUREMENT: string;
		__NIXOS_SET_ENVIRONMENT_DONE: string;
		buildInputs: string;
		DBUS_STARTER_ADDRESS: string;
		LOCALE_ARCHIVE: string;
		preferLocalBuild: string;
		MANAGERPIDFDID: string;
		LESSKEYIN_SYSTEM: string;
		npm_config_user_agent: string;
		GDM_X_SERVER_EXTRA_ARGS: string;
		TERMINFO_DIRS: string;
		PNPM_SCRIPT_SRC_DIR: string;
		npm_execpath: string;
		FC_FONTATIONS: string;
		LD_LIBRARY_PATH: string;
		XDG_RUNTIME_DIR: string;
		NODE_PATH: string;
		depsBuildTarget: string;
		OBJCOPY: string;
		NIX_XDG_DESKTOP_PORTAL_DIR: string;
		out: string;
		LC_TIME: string;
		npm_package_json: string;
		VSCODE_GIT_ASKPASS_MAIN: string;
		STRIP: string;
		XDG_DATA_DIRS: string;
		GDK_BACKEND: string;
		LIBEXEC_PATH: string;
		TMP: string;
		OBJDUMP: string;
		PATH: string;
		propagatedBuildInputs: string;
		npm_config_node_gyp: string;
		GDMSESSION: string;
		CC: string;
		NIX_CC: string;
		DBUS_SESSION_BUS_ADDRESS: string;
		depsBuildTargetPropagated: string;
		depsBuildBuildPropagated: string;
		NIX_CC_WRAPPER_TARGET_HOST_x86_64_unknown_linux_gnu: string;
		npm_config_registry: string;
		CONFIG_SHELL: string;
		__structuredAttrs: string;
		npm_node_execpath: string;
		RANLIB: string;
		npm_config_engine_strict: string;
		NIX_HARDENING_ENABLE: string;
		LC_NUMERIC: string;
		OLDPWD: string;
		NIX_LDFLAGS: string;
		nativeBuildInputs: string;
		name: string;
		TERM_PROGRAM: string;
		depsHostHostPropagated: string;
		NODE_ENV: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * This module provides access to environment variables set _dynamically_ at runtime and that are _publicly_ accessible.
 * 
 * |         | Runtime                                                                    | Build time                                                               |
 * | ------- | -------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
 * | Private | [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private) | [`$env/static/private`](https://svelte.dev/docs/kit/$env-static-private) |
 * | Public  | [`$env/dynamic/public`](https://svelte.dev/docs/kit/$env-dynamic-public)   | [`$env/static/public`](https://svelte.dev/docs/kit/$env-static-public)   |
 * 
 * Dynamic environment variables are defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/main/packages/adapter-node) (or running [`vite preview`](https://svelte.dev/docs/kit/cli)), this is equivalent to `process.env`.
 * 
 * **_Public_ access:**
 * 
 * - This module _can_ be imported into client-side code
 * - **Only** variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`) are included
 * 
 * > [!NOTE] In `dev`, `$env/dynamic` includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 * 
 * > [!NOTE] To get correct types, environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * >
 * > ```env
 * > MY_FEATURE_FLAG=
 * > ```
 * >
 * > You can override `.env` values from the command line like so:
 * >
 * > ```sh
 * > MY_FEATURE_FLAG="enabled" npm run dev
 * > ```
 * 
 * For example, given the following runtime environment:
 * 
 * ```env
 * ENVIRONMENT=production
 * PUBLIC_BASE_URL=http://example.com
 * ```
 * 
 * With the default `publicPrefix` and `privatePrefix`:
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.ENVIRONMENT); // => undefined, not public
 * console.log(env.PUBLIC_BASE_URL); // => "http://example.com"
 * ```
 * 
 * ```
 * 
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
