// Copyright 2019-2023 Tauri Programme within The Commons Conservancy
// SPDX-License-Identifier: Apache-2.0
// SPDX-License-Identifier: MIT
/**
 * Gets the application version.
 * @example
 * ```typescript
 * import { getVersion } from '@tauri-apps/plugin-app';
 * const appVersion = await getVersion();
 * ```
 *
 * @since 2.0.0
 */
async function getVersion() {
	return window.__TAURI_INVOKE__("plugin:app|version");
}
/**
 * Gets the application name.
 * @example
 * ```typescript
 * import { getName } from '@tauri-apps/plugin-app';
 * const appName = await getName();
 * ```
 *
 * @since 2.0.0
 */
async function getName() {
	return window.__TAURI_INVOKE__("plugin:app|name");
}
/**
 * Gets the Tauri version.
 *
 * @example
 * ```typescript
 * import { getTauriVersion } from '@tauri-apps/plugin-app';
 * const tauriVersion = await getTauriVersion();
 * ```
 *
 * @since 2.0.0
 */
async function getTauriVersion() {
	return window.__TAURI_INVOKE__("plugin:app|tauri_version");
}
/**
 * Shows the application on macOS. This function does not automatically focus any specific app window.
 *
 * @example
 * ```typescript
 * import { show } from '@tauri-apps/plugin-app';
 * await show();
 * ```
 *
 * @since 2.0.0
 */
async function show() {
	return window.__TAURI_INVOKE__("plugin:app|show");
}
/**
 * Hides the application on macOS.
 *
 * @example
 * ```typescript
 * import { hide } from '@tauri-apps/plugin-app';
 * await hide();
 * ```
 *
 * @since 2.0.0
 */
async function hide() {
	return window.__TAURI_INVOKE__("plugin:app|hide");
}

export { getName, getTauriVersion, getVersion, hide, show };
//# sourceMappingURL=index.mjs.map
