/**
 * @param {string} fileName 
 * @param {Blob} data 
 * @param {number} [clearDelayInMs=60000] - (Default 60000) This function creates an ObjectUrl via `URL.createObjectURL(data)`, which will be downloaded. After given delay it will be freed through a call to `URL.revokeObjectURL`. When you expect huge files, you might want to increase this delay, as the behavior of the download is not specified, when URL is freed, before download has finished.
 */
export function saveBlob(fileName, data, clearDelayInMs = 60000) {
  const a = document.createElement("a");
  a.download = fileName;
  a.href = URL.createObjectURL(data);

  setTimeout(() => {
    URL.revokeObjectURL(a.href);
  }, clearDelayInMs);

  a.dispatchEvent(new MouseEvent("click"));
}
