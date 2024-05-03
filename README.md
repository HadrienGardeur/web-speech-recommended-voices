# Recommended voices for the Web Speech API

> [This repository is part of a larger project](https://github.com/HadrienGardeur/read-aloud-best-practices), meant to identify best practices for implementing a read aloud feature in reading apps.

With hundreds of voices available by default across various browsers and OS, it can be tricky for developers to provide sensible defaults and a curated list of voices.

With its focus on voice selection, the goal of this project is to document higher quality voices available on various platforms and provide an easy way to implement these recommendations using JSON configuration files.

## List of supported languages

* [Basque](json/eu.json) 
* [Catalan](json/ca.json)
* [Dutch](json/nl.json) (Netherlands and Belgium)
* [English](json/en.json) (United States, United Kingdom and Canada)
* [French](json/fr.json) (France, Canada, Belgium and Switzerland)
* [Galician](json/gl.json)
* [German](json/de.json) (Germany, Austria and Switzerland)
* [Italian](json/it.json)
* [Portuguese](json/pt.json) (Portugal and Brazil)
* [Spanish](json/es.json) (Spain, Argentina, Chile, Colombia, Mexico and United States)

## Use cases

* Providing the best possible default voice per language
* Displaying an ordered list of recommended voices
* Displaying user-friendly voice names
* Filtering recommended voices per gender and age (adult vs children)

## Guiding principles

* Each voice list is ordered and meant to provide an optimal listening experience on all browsers/OS/languages covered by this project.
* But each list also includes default options, to make sure that there's always something reliable to lean on.
* With these two goals in mind, higher quality voices are listed on top of the list, while lower quality voices or specialized ones are listed at the bottom.
* The number of voices can look overwhelming (70+ voices in English alone) but in practice, just a few of them will be available to users on each of their device.
* Whenever possible, I will always try to include a good mix of high quality and default options for both genders.
* But the list has to be prioritized somehow, female voices are currently listed above their male counterparts. Since the gender associated to each voice is documented, this allows implementers to re-prioritize/filter the list based on this criteria.
* Regional variants are also grouped together in a single list rather than separated in their own files on purpose. On some devices, only two or three voices might be available and separating regional variants wouldn't make much sense.
* But regional variants have to be prioritized somehow in the list. For now, the regions with the best selections of voices are listed above, but it is highly recommended to implementers [to consider the user's regional preferences](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/languages).
* The voice names returned by the [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API) are hardly user-friendly, which is the reason why this list provides alternate ones that usually include a first name (or a gender) along with the region associated to the voice.

## Syntax

[A JSON Schema](voices.schema.json) is available for validation or potential contributors interested in opening a PR for new languages or voice additions.

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

But there's unfortunately one notable outlier: macOS, iOS and iPadOS voices.

For those voices, at least a portion of the string is often localized, naming can be inconsistent across browsers and they can change depending on the number of variants installed.

Because of Apple, each list can also contain the following properties:

- `altNames`, an array of strings for alternate names for a given voice
- and `overrides` which is strictly used with preloaded voices, allowing implementers to hide the default version, when a higher quality variant is available
 
**Example 3: Alternate version of an Apple preloaded voice**

```json
{
  "label": "Samantha (US)",
  "name": "Samantha (Enhanced)",
  "altNames": [
    "Samantha (mejorada)",
    "Samantha (premium)",
    "Samantha (ottimizzata)"
  ],
  "overrides": "Samantha",
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

The following values are supported: `female`, `male` or `nonbinary`.

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

### OS and browser

Both `os` and `browser` are optional properties. They're used to indicate in which operating systems and browsers a voice is available.

These two properties are meant to be interpreted separately and not as a combination.

**Example 7: A Microsoft voice available in both Edge and Windows**

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

**Example 8: A Google voice preloaded in Chrome Desktop**

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

## Additional notes

Through the work done to document a list of recommended voices, I also ended up testing various browsers/OS to see how they behave. This section is meant to summarize some of this information.

[A dedicated label is also available](https://github.com/HadrienGardeur/TTS-recommended-voices/issues?q=is%3Aissue+is%3Aopen+label%3Aexternal-issue) to track external issues reported to Apple, Google, Microsoft or Mozilla.

### General

* The Web Speech API returns the following fields through the `getVoices()` method: `name`, `voiceURI`, `lang`, `localService` and `default`.
* While `voiceURI` should be the most consistent way of identifying a voice in theory, in practice this couldn't be further from the truth. Most browsers use the same value than `name` for `voiceURI` and do not enforce uniqueness.
* As we'll see in notes for specific browsers/OS, `name` is also inconsistently implemented and can return different values for the same voice on the same device.
* `localService` indicates if a voice is available for offline use and it seems to be working as expected, which is why the current list of recommended voices doesn't contain that information.
* `lang` seems to be mostly reliable across implementations, returning a language using BCP 47 language tags, with the main language in downcase and the subtag in uppercase (`pt-BR`).
* There are unfortunately a few outliers:
	* On Android, Samsung and Chrome use an underscore as the separator instead (`en_us`)
	* While Firefox on Android gets even more creative, using three letter codes for languages and adding an extra string at the end (`eng-US-f000`)
* `default` is meant to indicate if a voice is the default voice for the current app language. In theory this should be extremely useful, but in practice it's really hard to use due to inconsistencies across implementations, limited context (system default vs user default) and the lack of capability for setting a default voice per language.
* In addition to the use of `default`, implementers should always consider using the `Accept-Language` HTTP header as well, as it contains an ordered list of preferred language/region for a given user.

### Android

* For now, we've only covered testing and documentation on vanilla versions of Android, as available on Google Pixel devices. The list of voices available may vary greatly based on OEM, device and Android version.
* Due to the nature of Android, documenting all these variations will be very difficult. Further attempts will be made in future version of this project through the use of device farms ([related issue](https://github.com/HadrienGardeur/web-speech-recommended-voices/issues/8)).
* In recent versions of vanilla Android, there's an excellent selection of high quality voices which cover a wide range of languages/regions (67 as of April 2024).
* To use these voices, the user needs to go fairly deep in system settings either to download them (only your system language and some of the most popular languages are preloaded by default) or select their preferred voice per language/region.
* Unfortunately, Chrome on Android doesn't return the list of voices available to the users, instead it returns an unfiltered list of languages/regions ([related issue](https://github.com/HadrienGardeur/web-speech-recommended-voices/issues/12)).
* To make things worse, these voices and regions are all localized with the system locale.
* Among other things, this means that even languages and regions which require a voice pack to be installed will show up in the list returned by the Web Speech API ([related issue](https://github.com/HadrienGardeur/web-speech-recommended-voices/issues/14)).
* If the user selects a language/region for which the voice pack needs to be downloaded, Chrome will default to an English voice instead ([related issue](https://github.com/HadrienGardeur/web-speech-recommended-voices/issues/6)).
* Even when a voice pack has been installed, the user may need to select a default voice for each region before a language/region can be used at all. 
* For example, on a device where both `fr-FR` (French from France) and `fr-CA` (French Canadian) voice packs have been installed, TTS may still default to `fr-FR` if `fr-CA` doesn't have a default voice selected.
* With this poor approach to voice selection, Chrome on Android doesn't indicate the user's preferred language/region either using `default` ([related issue](https://github.com/HadrienGardeur/web-speech-recommended-voices/issues/16)).

### Chrome Desktop

* On desktop, Chrome comes preloaded with a limited selection of 19 high quality voices across 15 languages.
* All of these voices require online access to use them.
* Unfortunately, these voices are also plagued by a bug if any utterance read by the Web Speech API takes longer than 14 seconds ([related issue](https://github.com/HadrienGardeur/read-aloud-best-practices/issues/3)) and do not return boundary events ([related issue](https://github.com/HadrienGardeur/read-aloud-best-practices/issues/4)).
* Under the current circumstances, these Google voices have been prioritized lower than their Microsoft/Apple counterparts in the list of recommended voices.

### Chrome OS

* Chrome OS comes with three sets of voices: Chrome voices (7 languages), Android voices (50+ languages) and eSpeak voices
* Most Android voices offer offline and online variants and they're on par quality-wise with what Apple offers in terms of downloadable voices.
* These Android voices have some of the worst names on any platform/browser, making them hardly usable without the kind of re-labeling offered by this project.
* Google is also gradually adding these Android voices to Chrome OS through the ability to install higher quality voice packs that work offline, re-labeling these voices as "natural voices" in the process.
* Chrome voices are one step below Android voices, but they offer a decent selection for the most common languages.
* eSpeak voices should be avoided at all cost due to their extremely low quality and have been skipped entirely while documenting recommended voices for this project.

### Edge

* On desktop, Edge provides the best selection of high quality voices with over 250 preloaded voices for a wide range of languages/regions.
* All of these so-called "natural" voices rely on Machine Learning (ML) and therefore require online access to use them.
* A small number of those voices are also multilingual and seem to be able to detect the language of a sentence and adapt accordingly. Unfortunately, this doesn't work as well when there's a language switch in the middle of a sentence.
* On macOS at least, there's a weird bug where Edge only displays 18 natural voices initially, but this extends to 250+ once Web Speech API has been used to output an utterance.
* On mobile, Edge isn't nearly as interesting: 
  * It's completely unusable on Android since it returns an empty list of voices, which makes it impossible to use with Web Speech API. 
  * On iOS/iPadOS, all browsers are currently forced to use Safari as their engine, which means that Edge behaves exactly like Safari Mobile.
  
### Firefox

* On desktop, Firefox seems fairly straightforward when it comes to voice selection.
* Unlike Chrome and Edge, Firefox doesn't come with any preloaded voice of its own.
* Firefox has a different approach for `voiceURI` where each voice is truly identified by a unique URN.
* Since this is unique to Firefox, the current JSON files do not document these URI yet, but this could be a future addition.
* On macOS, Firefox requires a full system reboot for new voices to show up in the list.

### iOS and iPadOS

* Both OS come with the same set of preloaded voices and downloadable voices than macOS. [Read the macOS section](#macOS) below for additional information about the voices available.
* For an unknown reason, some preloaded voices are also listed twice but provide the same audio output.
* Settings seem to hint at the ability to define a default voice per language (which would be excellent) but this is ruined by the fact that Safari marks all voices as being the default one.
* All browsers need to run on the system webview which means that they're just a shell on top of Safari Mobile rather than truly different browsers.
* This situation could change due to the Digital Market Act in Europe, forcing Apple to change its policy on third-party browsers and webviews.

### macOS

* macOS provides an extensive list of voices across 45 languages, both preloaded or downloadable.
* These voices can have up to three different variants, based on the quality of the output (and download size).
* The highest quality voices are probably the ones available for Siri, but they're unfortunately unavailable through the Web Speech API.
* At the other end of the spectrum, Apple had the unfortunate idea of preloading a large range of low quality and weird voices such as the Eloquence (8 voices) and Effects (15 voices) voice packs.
* The existence of these voices alone is a good reason to filter voices available to macOS users and highlight the ones recommended on this repo.
* Unlike other platforms/OS, macOS decided to localize voice names. This wouldn't be an issue if `voiceURI` could be used as a reliable identifier for voices, but that's not the case.
* The way voice names are localized is quite inconsistent across browsers:
	* Some preloaded voices are simply displayed using a first name ("Thomas")
	* For a few of these voices, Apple can even localize the first name ("Audrey" becoming "Andrea" for example)
	* But if you install a higher quality version, you end up with something different:
		* On Safari, the lower and higher quality versions are simply displayed usting the first name twice
		* On newer versions of Chrome and Edge, both voice names become "First name (language (country)" where the language and the country are localized based on system settings, but all options seem to use the highest quality available
		* While on Firefox (and older versions of Chrome/edge), only the higher quality versions of the voice name change to "First name (quality)" where quality is also localized based on system settings
	* Downloaded voices also end up with the same inconsistent naming/localization issues.
* This approach makes it very difficult to identify voices on macOS and adds a lot of complexity to this project. Without this specific issue, there wouldn't be a need to document alternate names.
* Even with alternate names, this can be partially hit and miss due to these inconsistencies:
	* In French the medium quality voices are labeled as "premium" while this refers to the highest quality variant in English.
	* In its current state, this repo only documents localizations for 4 languages and not all 45 languages supported by the macOS TTS engine.

### Safari

* For better or for worse, Safari's behaviour is mostly consistent between its desktop and mobile versions.
* Downloadable voices or higher quality variants of preloaded voices do not show up in the list returned by the Web Speech API.
* All voices return `true` for `default` in Safari, which makes it impossible to detect and select the system/user default.

### Windows

* [Microsoft provides a very helpful page](https://support.microsoft.com/en-us/windows/appendix-a-supported-languages-and-voices-4486e345-7730-53da-fcfe-55cc64300f01), listing all voices available across Windows 10 and 11 for a total of 98 voices.
* Natural voices provide a far better experience but they require an up-to-date version of Windows 11 and need to be downloaded (with the added benefit that they also work offline).
* Microsoft has been slow to add these natural voices to Windows 11 overall. Until fairly recently, only US voices (3 voices) were available. The list is now a little longer (23 voices) but remains far behind what they offer through Edge (250+ voices).
* Unfortunately, these higher quality voices are not properly listed in Chrome or Firefox currently ([related issue](https://github.com/HadrienGardeur/web-speech-recommended-voices/issues/15)). They only show up in Edge, where they're preloaded anyway but strictly for an online use.