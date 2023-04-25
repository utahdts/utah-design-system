// https://stackoverflow.com/a/34064434/1478933
export default function htmlDecode(input) {
  const doc = new DOMParser().parseFromString(input, 'text/html');
  return doc.documentElement.textContent;
}