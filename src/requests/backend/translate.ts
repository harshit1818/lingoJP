import { ISchedulerTranslateOptions } from 'anylang/scheduling';

import { buildBackendRequest } from '../utils/requestBuilder';

export const [translateFactory, translateRequest] = buildBackendRequest<
	{
		text: string;
		from: string;
		to: string;
		options?: ISchedulerTranslateOptions;
	},
	string
>('translate', {
	factoryHandler:
		({ backgroundContext }) =>
		async ({ text, from, to, options }) => {
			console.log('[DEBUG] translate called with:', {
				text: text.substring(0, 50),
				from,
				to,
			});

			const translateManager = await backgroundContext.getTranslateManager();

			const { supportedLanguages, isSupportAutodetect } =
				translateManager.getTranslatorFeatures();

			console.log('[DEBUG] Translator features:', {
				supportedLanguages,
				isSupportAutodetect,
			});

			if (
				(from === 'auto' && !isSupportAutodetect) ||
				(from !== 'auto' && !supportedLanguages.includes(from))
			) {
				const error = 'Source language is not supported by selected translator';
				console.error('[DEBUG] Translation error:', error, {
					from,
					supportedLanguages,
				});
				throw new Error(error);
			}
			if (!supportedLanguages.includes(to)) {
				const error = 'Target language is not supported by selected translator';
				console.error('[DEBUG] Translation error:', error, {
					to,
					supportedLanguages,
				});
				throw new Error(error);
			}

			const scheduler = translateManager.getScheduler();

			console.log('[DEBUG] Starting translation with scheduler');
			const result = await scheduler.translate(text, from, to, options);
			console.log('[DEBUG] Translation result:', result?.substring(0, 50));

			return result;
		},
});

export const translate = (
	text: string,
	from: string,
	to: string,
	options?: ISchedulerTranslateOptions,
) =>
	translateRequest({
		text,
		from,
		to,
		options,
	});
