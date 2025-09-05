/**
 * Since we may use only one offscreen document, this is a root document,
 * that include another ones as iframes
 */

import { customTranslatorsFactory } from '../../requests/offscreen/customTranslators';
import { themeUpdate } from '../../requests/offscreen/theme';

const createOffscreenWorker = () => {
	const workerIframe = document.createElement('iframe', {});
	workerIframe.src = '/offscreen-documents/worker/worker.html';
	// NOTE: allow-same-origin + allow-scripts combination required for extension API access
	// This iframe contains only trusted extension code for WASM/worker processing
	// Security risk is acceptable in this context as no user content is processed
	workerIframe.setAttribute('sandbox', 'allow-same-origin allow-scripts');
	document.body.appendChild(workerIframe);
};

const setupThemeListener = () => {
	const lightThemeQuery = window.matchMedia('(prefers-color-scheme: light)');
	lightThemeQuery.addEventListener('change', (evt) => {
		themeUpdate({ isLight: evt.matches });
	});

	themeUpdate({ isLight: lightThemeQuery.matches });
};

document.addEventListener('DOMContentLoaded', async () => {
	createOffscreenWorker();
	customTranslatorsFactory();
	setupThemeListener();
});
