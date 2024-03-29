# Recommended voices for Text-to-Speech (TTS) on the Web

> [This repository is part of a larger project](https://github.com/HadrienGardeur/TTS-best-practices), meant to identify best practices for implementing TTS support in reading apps on all platforms. 

With hundreds of voices available by default across various browsers and OS, it can be tricky for developers to provide sensible defaults and a curated list of voices.

With its focus on voice selection, the goal of this project is to document higher quality voices available on various platforms and provide an easy way to implement these recommendations using JSON configuration files.

## Initial list of supported languages

* [English](json/en.json) (`en-us` and `en-gb`)
* French (`fr-fr` and `fr-ca`)
* Italian (`it-it`)
* Spanish (`es-es` and `es-mx`)

## Use cases

* Providing the best possible default voice per language
* Displaying an ordered list of recommended voices
* Displaying user-friendly voice names
* Filtering recommended voices per gender and age (adult vs children)

## Guiding principles

* Each voice list is ordered and meant to provide an optimal listening experience on all browsers/OS/languages covered by this project.
* But each list also includes default options, to make sure that there's always something reliable to lean on.
* With these two goals in mind, higher quality voices are listed on top of the list, while lower quality voices or specialized ones are listed at the bottom.
* The number of voices can look overwhelming (60+ voices in English) but in practice, just a few of them will be available to users on each of their device.
* Whenever possible, we'll always try to include a good mix of high quality and default options for both genders.
* Since the list has to be prioritized somehow, female voices are currently listed above their male counterparts. Since the gender associated to each voice is documented, this allows implementers to re-prioritize/filter the list based on this criteria.
* Regional variants are also grouped together in a single list rather than separated in their own files on purpose. On some devices, only two or three voices might be available and separating regional variants wouldn't make much sense.
* But regional variants have to be prioritized somehow in the list. For now, the regions with the best selections of voices are listed above, but we highly recommend implementers to consider the user's preference when selecting a default voice.
* The voice names returned by the [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API) are hardly user-friendly, which is the reason why this list provides alternate ones that usually include a first name (or a gender) along with the region associated to the voice.

## Voice list as JSON

> This README will provide a detailed description of each property in a future revision, but for now it's limited to a [JSON Schema](voices.schema.json) that can be used for validation.

## Notes

TBD