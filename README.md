LingoJP is a Japanese-focused browser extension designed specifically for translating Japanese content to English automatically.

**Perfect for Japanese learners, researchers, and anyone regularly reading Japanese web content.**

Automatically detects Japanese text and translates to English without manual language selection. Features one-click page translation, text selection translation, and intelligent auto-translation preferences.

# Why LingoJP?

LingoJP is built specifically for the Japanese→English translation workflow:
- **Auto-detects Japanese**: No need to select source language every time
- **Defaults to English**: Target language automatically set to English  
- **Auto-translation**: Japanese pages translate automatically without clicking
- **Privacy-focused**: Based on the open-source Linguist project, no data collection
- **Multiple translators**: Support for Google, Microsoft, Yandex, and offline translation

LingoJP is free, open-source, and designed for efficient Japanese content consumption.

# Features

Japanese-focused features:
- **Automatic Japanese Detection**: Always detects Japanese text automatically
- **English Default**: Target language always defaults to English
- **Auto-Translation**: Japanese pages automatically translate without manual intervention
- **One-Click Translation**: Instant page and text translation
- **Smart Language Panel**: Simplified Japanese→English interface
- **Translation Services**: Support for Google, Microsoft, Yandex translators
- **Offline Translation**: Built-in Bergamot translator for privacy
- **Dictionary & History**: Save important Japanese→English translations
- **Text Selection**: Translate selected Japanese text with popup
- **Text-to-Speech**: Hear pronunciation of translated text

# Installation

## Development Version

1. Clone this repository
2. Build the extension: `make dev` 
3. Load in browser:
   - **Chrome**: `chrome://extensions` → Enable "Developer mode" → "Load unpacked" → Select `build/dev/chrome/`
   - **Firefox**: `about:debugging` → "This Firefox" → "Load Temporary Add-on" → Select `build/dev/firefox/manifest.json`

## Release Version
Check the [GitHub Releases page](https://github.com/harshit1818/lingoJP/releases) for packaged versions.

## Android

<!-- Text partly copied from https://github.com/ajayyy/SponsorBlock/wiki/Android -->

This addon can be used on mobile browsers with [Firefox Nightly](https://play.google.com/store/apps/details?id=org.mozilla.fenix) (Recommended), or with any chromium browser that supports extensions.

To try it on Firefox, you have to add the [Linguist add-on](https://addons.mozilla.org/addon/linguist-translator/) to a [custom add-on collection](https://www.ghacks.net/2020/10/01/you-can-now-install-any-add-on-in-firefox-nightly-for-android-but-it-is-complicated/) and use this collection to install the extension.

To try it on a chromium browser, download the normal extension for Chrome.

# Screenshots

See more info on https://linguister.io

![](./packages/site/static/screenshots/page-translation.png)
![](./packages/site/static/screenshots/text-translation.png)
![](./packages/site/static/screenshots/selected-text-translation.png)
![](./packages/site/static/screenshots/settings.png)

# Development

See [development docs](./docs/Development.md) to get info on how to build and debug.

You can improve Linguist, [make issues](https://github.com/translate-tools/linguist/issues/new) and suggest features or report bugs.

Contribute to Linguist, see the ["help wanted" label](https://github.com/translate-tools/linguist/labels/help%20wanted) to find hot issues.

# Donations

Linguist is completely free, open-source, and does not collect any user data to sell.

You can support the project to help it maintain independence and high quality:
- tell others about Linguist
- [suggest](https://github.com/translate-tools/linguist/issues/new) new ideas and elegant ways to make Linguist better
- help us translate Linguist into your language. Read the [internationalization guide](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Internationalization) and send us a pull request
- do graphic design for the software
- help us by trying to reproduce [unconfirmed bug reports](https://github.com/translate-tools/linguist/labels/recheck)
- help us address bugs if you know Typescript

Also, you can donate to us to vote with money for goal prioritization, to add some feature or fix some bug as soon as possible. Just donate with any method below, then send transaction details and issue number or feature request description to email [support@linguister.io](mailto:support@linguister.io) (or right in issue comments if you wish). For significant donations, we will start work on your request as soon as possible.

- Monero (XMR): 861w7WuFGecR7SMpuf7GX9BBUgGJb1Xdx8z5pCpMrKY2ZeZAzS3mwZeQeJGV5RPpu35fr5dURSm587ewpHYGzNuGKGroQnD
- Bitcoin (BTC): bc1q2krassq0sa2aphkx37zn374lfjnthr5frm6s7y
- Ethereum (ETH), Tether USDT (ERC-20): 0x2463d84F46c131886CaE457412e8B6eaBc0b91a7
- Tron (TRC), Tether USDT (TRC-20): TQezzyzkfMCPJRdnYxNXrUfPj3s7kDeMBL

# Supporters

![](./assets/jb_beam.svg)
