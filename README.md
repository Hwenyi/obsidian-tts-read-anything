
This is a modified version of [obsidian-edge-tts](https://github.com/travisvn/obsidian-edge-tts) to add read-clipboard-aloud and some AI-related features.

# Obsidian TTS Read Anything Plugin 

## Why Fork Instead of PR ?

An issue was created to include clipboard reading as a feature, but the original maintainer felt it did not align with the project’s direction. 

This fork exists to incorporate clipboard support and AI-based rewriting to read LaTeX or explain the code block.

Integrated clipboard reading functionality allows for easier integration with AI plugins like QuickAdd or Text Generator that can write to the clipboard.

## Overview

The **Obsidian TTS Read Anything Plugin** is a community plugin for [Obsidian](https://obsidian.md/) that allows you to read your notes aloud using Microsoft's Edge TTS API. It supports a variety of voices and locales, making it an excellent tool for users who want to listen to their notes while multitasking or to improve accessibility.

## Features

- Read selected text or entire notes aloud
- Choose from a list of top voices or specify a custom voice
- Adjust playback speed of voice over
- Toggle optional notices for playback status
- Option to generate mp3 file and embed it directly in note
- Listen to voice samples before selecting a voice (via [tts.travisvn.com](https://tts.travisvn.com))

### Added Features

- Read text directly from the clipboard  
- AI rewriting of LaTeX formulas before reading aloud

## Installation

[Install Obsidian plugin](https://tts.travisvn.com/obsidian)

1. Open Obsidian
2. Go to **Settings** → **Community Plugins**
3. Search for **TTS Read Anything**
4. Click **Install** and then **Enable**

Alternatively, you can manually download the latest release from [GitHub Releases](https://github.com/Hwenyi/obsidian-tts-read-anything/releases)

## Usage

- Open the note you want to read aloud (or select the text)
- Use the **Read note aloud** command from the command palette
- Use the **read-clipboard-aloud** command from the command palette to read clipboard directly
	- _or_  Click the ribbon icon (if enabled)
	- _or_  Playback button in the status bar — this both starts a narration and then allows you to pause or resume once it's started
	- _or_  Right-click on a file and select `Read note aloud`
- ✨ _New_ ✨ Right-click on a file and select `Generate MP3` to save the narration to an mp3 and embed it in the note

## Settings

To access the plugin settings:

1. Go to **Settings** → **Community Plugins** → **Edge TTS**.
2. Configure the following options:
   - **Select voice**: Choose from a list of top voices.
   - **Custom voice**: Manually enter a custom voice.
   - **Playback speed**: Adjust playback speed multiplier.
   - **Show notices**: Toggle notices for playback status and errors.
   - **Show status bar button**: Toggle playback button in status bar.
   - **Generate MP3**: Toggle settings related to the `Generate MP3` menu option.
   - **Voice Samples**: Visit [tts.travisvn.com](https://tts.travisvn.com) to sample available voices.
   
### AI-related settings

- **Enable AI LaTeX Processing**: Converts LaTeX expressions into plain text via an AI service  
- **OpenAI Base URL**: Base endpoint for AI requests  
- **AI Platform API Key**: API key for the AI provider  
- **AI Model**: Specific model for text processing 

## License

This fork remains under the terms of [GPLv3](https://www.gnu.org/licenses/gpl-3.0.html). 


Special thanks to [travisvn](https://github.com/travisvn), the original project maintainer, for their contributions to Obsidian-Edge-TTS
