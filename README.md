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

**Based on [Linguist](https://github.com/translate-tools/linguist) by [Vitonsky](https://github.com/vitonsky) under BSD 3-Clause License.**

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

## 📦 Easy Installation (Recommended)

### **Method 1: Download from GitHub Releases**
1. Go to [Releases](https://github.com/harshit1818/lingoJP/releases)
2. Download `LingoJP-Chrome-v1.0.0.zip` from the latest release
3. Extract the ZIP file
4. Install in Chrome:
   - Open `chrome://extensions/`
   - Enable "Developer mode" (top-right toggle)
   - Click "Load unpacked"
   - Select the extracted folder
5. Start browsing Japanese websites! 🎌→🇺🇸

**No setup needed** - just visit any Japanese website and it will automatically translate!

### **Method 2: Clone and Build**
```bash
git clone https://github.com/harshit1818/lingoJP.git
cd lingoJP
make dev
```
Then load `build/dev/chrome/` in Chrome extensions.

## 🦊 Firefox Installation
1. Download the release ZIP
2. Extract files
3. Go to `about:debugging` → "This Firefox"
4. Click "Load Temporary Add-on"
5. Select `manifest.json` from extracted folder

# 🚀 How to Use

After installation, LingoJP works automatically:

1. **Visit any Japanese website** (e.g., Yahoo Japan, Japanese news sites)
2. **Extension auto-detects Japanese text**
3. **Page translates to English automatically**
4. **Select Japanese text** → Right-click → "Translate selection"
5. **Use extension popup** for manual text translation

**Settings:** Click the LingoJP icon in your browser toolbar to access options.

# 🔧 Development

## Building from Source
```bash
git clone https://github.com/harshit1818/lingoJP.git
cd lingoJP
npm install
make dev  # or make devChrome for Chrome specifically
```

## Contributing
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

See [development docs](./docs/Development.md) for detailed build instructions.

## 📱 Mobile Support

This extension works on mobile browsers:
- **Firefox Nightly** (Android) - Recommended
- **Chromium browsers** with extension support

## 🙏 Acknowledgments

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
