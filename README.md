# Recommended voices for the Web Speech API

> [This repository is part of a larger project](https://github.com/HadrienGardeur/read-aloud-best-practices), meant to identify best practices for implementing a read aloud feature in reading apps.

With hundreds of voices available by default across various browsers and OS, it can be tricky for developers to provide sensible defaults and a curated list of voices.

With its focus on voice selection, the goal of this project is to document higher quality voices available on various platforms and provide an easy way to implement these recommendations using JSON configuration files.

## Use cases

* Providing the best possible default voice per language
* Displaying an ordered list of voices, based on quality
* Displaying user-friendly voice names
* Filtering recommended voices per gender and age (adult vs children)
* Filtering out novelty and low quality voices
* Previewing a voice with a test utterance

## Demo

[A live demo](https://readium.org/speech/demo/) based on [Readium Speech](https://github.com/readium/speech) is available for testing.

This demo implements both [best practices for voice selection](https://github.com/HadrienGardeur/read-aloud-best-practices/blob/main/voice-selection.md) along with [data originally documented in this repository](https://github.com/readium/speech/tree/main/json/).

## List of supported languages

> [!WARNING]  
> Moving forward, the list of voices will be managed in the [Readium Speech](https://github.com/readium/speech) project. To avoid confusion, this repository will no longer host these JSON files, but they remain available in the project's history, if needed.

The goal of this project is to support all languages available on Windows and macOS.

In its current state, it covers 46 languages:

* [Arabic](https://github.com/readium/speech/tree/main/json/ar.json) (Algeria, Bahrain, Egypt, Iraq, Jordan, Kuwait, Lebanon, Libya, Morocco, Oman, Qatar, Saudi Arabia, Syria, Tunisia, United Arab Emirates, Yemen)
* [Basque](https://github.com/readium/speech/tree/main/json/eu.json)
* [Bengali](https://github.com/readium/speech/tree/main/json/bn.json) (India and Bangladesh)
* [Bhojpuri](https://github.com/readium/speech/tree/main/json/bho.json)
* [Bulgarian](https://github.com/readium/speech/tree/main/json/bg.json)
* [Catalan](https://github.com/readium/speech/tree/main/json/ca.json)
* Chinese:
  * [Mandarin Chinese](https://github.com/readium/speech/tree/main/json/cmn.json) (Mainland China, Taiwan)
  * [Wu Chinese](https://github.com/readium/speech/tree/main/json/wuu.json) (aka "Shanghainese")
  * [Yue Chinese](https://github.com/readium/speech/tree/main/json/yue.json) (aka "Cantonese")
* [Croatian](https://github.com/readium/speech/tree/main/json/hr.json)
* [Czech](https://github.com/readium/speech/tree/main/json/cs.json)
* [Danish](https://github.com/readium/speech/tree/main/json/da.json)
* [Dutch](https://github.com/readium/speech/tree/main/json/nl.json) (Netherlands and Belgium)
* [English](https://github.com/readium/speech/tree/main/json/en.json) (United States, United Kingdom, Australia, Canada, Hong Kong, India, Ireland, Kenya, New Zealand, Nigeria, Scotland, Singapore, South Africa and Tanzania)
* [Finnish](https://github.com/readium/speech/tree/main/json/fi.json)
* [French](https://github.com/readium/speech/tree/main/json/fr.json) (France, Canada, Belgium and Switzerland)
* [Galician](https://github.com/readium/speech/tree/main/json/gl.json)
* [German](https://github.com/readium/speech/tree/main/json/de.json) (Germany, Austria and Switzerland)
* [Greek](https://github.com/readium/speech/tree/main/json/el.json)
* [Hebrew](https://github.com/readium/speech/tree/main/json/he.json)
* [Hindi](https://github.com/readium/speech/tree/main/json/hi.json)
* [Hungarian](https://github.com/readium/speech/tree/main/json/hu.json)
* [Indonesian](https://github.com/readium/speech/tree/main/json/id.json)
* [Italian](https://github.com/readium/speech/tree/main/json/it.json)
* [Japanese](https://github.com/readium/speech/tree/main/json/ja.json)
* [Kannada](https://github.com/readium/speech/tree/main/json/kn.json)
* [Kazhak](https://github.com/readium/speech/tree/main/json/kk.json)
* [Korean](https://github.com/readium/speech/tree/main/json/ko.json)
* [Malay](https://github.com/readium/speech/tree/main/json/ms.json)
* [Marathi](https://github.com/readium/speech/tree/main/json/mr.json)
* [Norwegian](https://github.com/readium/speech/tree/main/json/nb.json)
* [Persian](https://github.com/readium/speech/tree/main/json/fa.json)
* [Polish](https://github.com/readium/speech/tree/main/json/pl.json)
* [Portuguese](https://github.com/readium/speech/tree/main/json/pt.json) (Portugal and Brazil)
* [Romanian](https://github.com/readium/speech/tree/main/json/ro.json)
* [Russian](https://github.com/readium/speech/tree/main/json/ru.json)
* [Slovak](https://github.com/readium/speech/tree/main/json/sk.json)
* [Slovenian](https://github.com/readium/speech/tree/main/json/sl.json)
* [Spanish](https://github.com/readium/speech/tree/main/json/es.json) (Spain, Argentina, Bolivia, Chile, Colombia, Costa Rica, Cuba, Dominican Republic, Ecuador, El Salvador, Equatorial Guinea, Guatemala, Honduras, Mexico, Nicaragua, Panama, Paraguay, Peru, Puerto Rico, United States, Uruguay and Venezuela)
* [Swedish](https://github.com/readium/speech/tree/main/json/sv.json)
* [Tamil](https://github.com/readium/speech/tree/main/json/ta.json) (India, Sri Lanka, Malaysia and Singapore)
* [Telugu](https://github.com/readium/speech/tree/main/json/te.json)
* [Thai](https://github.com/readium/speech/tree/main/json/th.json)
* [Turkish](https://github.com/readium/speech/tree/main/json/tr.json)
* [Ukrainian](https://github.com/readium/speech/tree/main/json/uk.json)
* [Vietnamese](https://github.com/readium/speech/tree/main/json/vi.json)

## List of voices to filter out

At the other end up the spectrum, this project also identifies a number of voices that should be filtered out from a voice selector component. 

Some of them are harmful to the overall reading experience, while others have a very low quality on platforms where better preloaded options are available.

* [Novelty voices](https://github.com/readium/speech/tree/main/json/filters/novelty.json) (Apple devices)
* [Very low quality voices](https://github.com/readium/speech/tree/main/json/filters/veryLowQuality.json) (Apple devices and Chrome OS)


## Guiding principles

* Each voice list is ordered and meant to provide an optimal listening experience on all browsers/OS/languages covered by this project.
* But each list also includes default options, to make sure that there's always something reliable to lean on.
* With these two goals in mind, higher quality voices are listed on top of the list, while lower quality voices or specialized ones are listed at the bottom.
* The number of voices can look overwhelming (110+ voices in English alone) but in practice, just a few of them will be available to users on each of their device.
* The voice names returned by the [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API) are hardly user-friendly, which is the reason why this list provides alternate ones that usually include a first name (or a gender) along with the region associated to the voice.
* Whenever possible, I will always try to include a good mix of high quality and default options for both genders.
* But the list has to be prioritized somehow, female voices are currently listed above their male counterparts. Since the gender associated to each voice is documented, this allows implementers to re-prioritize/filter the list based on this criteria.
* Regional variants are also grouped together in a single list rather than separated in their own files on purpose. On some devices, only two or three voices might be available and separating regional variants wouldn't make much sense.
* But regional variants have to be prioritized somehow in the list. For now, the regions with the best selections of voices are listed above, but it is highly recommended to implementers [to consider the user's regional preferences](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/languages).


## Syntax

[A JSON Schema](https://github.com/readium/speech/tree/main/voices.schema.json) is available for validation or potential contributors interested in opening a PR for new languages or voice additions.

### Label

`label` is required for each recommended voice and provides a human-friendly label for each voice.

This string is localized for the target language and usually contains the following information:

* First name (if available)
* Gender (when the first name is missing)
* Country/region

**Example 1: Microsoft Natural voices**

While the names documented by Microsoft for their natural voices are easily understandable, they tend to be very long and they're all localized in English.

```json
{
  "label": "Isabella (Italia)",
  "name": "Microsoft Isabella Online (Natural) - Italian (Italy)",    
  "language": "it-IT"
}
```

**Example 2: Chrome OS voices**

Chrome OS provides a number of high quality voices through its Android subsystems, but they come with some of the worst names possibles for an end-user.

```json
{
  "label": "Female voice 1 (US)",
  "name": "Android Speech Recognition and Synthesis from Google en-us-x-tpc-network",
  "language": "en-US"
}
```

### Names

`name` is required for each recommended voice and it's used as the main identifier for voices in this project.

Names are mostly stable across browsers, which means that for most voices, a single string is sufficient.

But there are unfortunately some outliers: Android, iOS, iPadOS and macOS voices.

For those voices, at least a portion of the string is often localized, naming can be inconsistent across browsers and they can change depending on the number of variants installed.

Because of this, each list can also contain the following properties:

- `altNames` with an array of alternate strings for a given voice
- and `localizedName` that identifies the string pattern used for localizing these voices
 
**Example 3: Alternate version of an Apple preloaded voice**

```json
{
  "label": "Samantha (US)",
  "name": "Samantha",
  "localizedName": "apple",
  "altNames": [
    "Samantha (Enhanced)",
    "Samantha (English (United States))"
  ],
  "language": "en-US"
}
```

### Languages

`language` is required for each recommended voice.

It contains a BCP 47 language tag where a downcased two-letter language code is followed by an uppercased two-letter country code.

The language and country codes are separated using a hyphen (-).

Somes voices are also capable of handling another language, for example a Spanish voice for the United States might also be capable of handling English.

For this reason, an `additionalLanguages` property is also available although it is fairly rarely used right now.

It contains a list of languages using only two-letter codes, without a sub-tag.

Some brand new voices from Microsoft are also capable of a multilingual output. The language switch isn't supported in the middle of a sentence, but the output seems capable of auto-detecting the language of each sentence and adopt itself accordingly.

In order to support this, the output might automatically switch to a different voice in the process.

These voices are identified using the `multiLingual` boolean.

**Example 4: Voice with a multilingual output**

```json
{
  "label": "Emma (US)",
  "name": "Microsoft EmmaMultilingual Online (Natural) - English (United States)",
  "language": "en-US",
  "multiLingual": true
}
```

**Example 5: Voice capable of handling a secondary language**

```json
{
  "label": "Sylvie (Canada)",
  "name": "Microsoft Sylvie Online (Natural) - French (Canada)",
  "language": "fr-CA",
  "otherLanguages": [
    "en"
  ]
}
```

### Gender and children voices

`gender` is an optional property for each voice, that documents the gender associated to each voice.

The following values are supported: `female`, `male` or `neutral`.

`children` is also optional and identifies children voices using a boolean.

**Example 6: Female children voice**

```json
{
  "label": "Ana (US)",
  "name": "Microsoft Ana Online (Natural) - English (United States)",
  "language": "en-US",
  "gender": "female",
  "children": true
}
```

### Quality

`quality` is an optional property for each voice, that documents the quality of the various variants of a voice.

The following values are supported:
<dl>
<dt>veryHigh</dt>
<dd>Very high, almost human-indistinguishable quality of speech synthesis</dd>
<dt>high</dt>
<dd>High, human-like quality of speech synthesis</dd>
<dt>normal</dt>
<dd>Normal quality of speech synthesis</dd>
<dt>low</dt>
<dd>Low, not human-like quality of speech synthesis</dd>
<dt>veryLow</dt>
<dd>Very low, but still intelligible quality of speech synthesis</dd>
</dl>

**Example 7: An Apple voice available in three quality variants**

```json
{
  "label": "Ava (US)",
  "name": "Ava",
  "note": "This voice can be installed on all Apple devices and offers three variants. Like all voices that can be installed on Apple devices, it suffers from inconsistent naming due to localization.",
  "altNames": [
    "Ava (Premium)",
    "Ava (Enhanced)",
    "Ava (English (United States))",
  ],
  "language": "en-US",
  "gender": "female",
  "quality": [
    "low",
    "normal",
    "high"
  ],
  "rate": 1,
  "pitch": 1,
  "os": [
    "macOS",
    "iOS",
    "iPadOS"
  ]
}
```


### OS and browser

Both `os` and `browser` are optional properties. They're used to indicate in which operating systems and browsers a voice is available.

These two properties are meant to be interpreted separately and not as a combination.

**Example 8: A Microsoft voice available in both Edge and Windows**

```json
{
  "label": "Denise (France)",
  "name": "Microsoft Denise Online (Natural) - French (France)",
  "note": "This voice is preloaded in Edge on desktop. In other browsers, it requires the user to run Windows 11 and install the voice pack.",
  "language": "fr-FR",
  "gender": "female",
  "os": [
    "Windows"
  ],
  "browser": [
    "Edge"
  ]
}
```

In addition, `preloaded` indicates if the voice is preloaded in all the OS and browsers that have been identified. 

With the current approach, it's not possible to indicate that a voice is available on Chrome and Windows, but requires a download on Windows for example.

**Example 9: A Google voice preloaded in Chrome Desktop**

```json
{
  "label": "Google female voice (UK)",
  "name": "Google UK English Female",
  "language": "en-GB",
  "gender": "female",
  "browser": [
    "ChromeDesktop"
  ],
  "preloaded": true
}
```

### Speech rate and pitch

When using the [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API), `SpeechSynthesisUtterance` supports optional values for:

- [`rate`](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance/rate) to control the speech rate
- and [`pitch`](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance/pitch) to control the pitch

Each voice documented in this repo supports the following optional properties:

- `pitchControl` is a boolean that defaults to `true` and indicates if a voice can be pitch controlled
- `rate` is an integer between 0.1 and 10 that defaults to 1 and provides a recommended default speech rate for each voice
- `pitch` is an integer between 0 and 2 that defaults to 1 and provides a recommended default pitch for each voice

**Example 10: Microsoft voice where the pitch cannot be adjusted**

```json
{
  "label": "Ana (US)",
  "name": "Microsoft Ana Online (Natural) - English (United States)",
  "language": "en-US",
  "gender": "female",
  "pitchControl": false
}
```

**Example 11: Google voice with recommended pitch and speed rates**

```json
{
  "label": "Voix Google féminine (France)",
  "name": "Google français",
  "language": "fr-FR",
  "gender": "female",
  "rate": 1,
  "pitch": 0.8
}
```

## Platform considerations

> [!WARNING]  
> Moving forward, platform considerations will be documented in the [Readium Speech](https://github.com/readium/speech/blob/main/docs/WebSpeech.md) project.

## Additional notes

Through the work done to document a list of recommended voices, I also ended up testing various browsers/OS to see how they behave. This section is meant to summarize some of this information.

[A dedicated label is also available](https://github.com/HadrienGardeur/TTS-recommended-voices/issues?q=is%3Aissue+is%3Aopen+label%3Aexternal-issue) to track external issues reported to Apple, Google, Microsoft or Mozilla.
