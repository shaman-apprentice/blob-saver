# blob-saver

Lets you download a blob within a browser.

Before you install this library, please think about whether you really need this extra dependency. Maybe one of the following native solutions will work for you:

- [download](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#download) attribute of anchor element
- [Content-Disposition: attachment](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#download) HTTP response header
- [File System API](https://developer.mozilla.org/en-US/docs/Web/API/File_System_API) of browser - be careful with browser support for the time being

## Example usage

```mjs
import { saveBlob } from "@shaman-apprentice/blob-saver";

const blob = new Blob(["Hello world"], { type: "text/plain" });
saveBlob("greeting.txt", blob);
```
