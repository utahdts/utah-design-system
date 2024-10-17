// https://stackoverflow.com/a/70683198/1478933
// let typing know that vite treats imports with the ?raw extension as string content
declare module "*?raw"
{
  const content: string;
  export default content;
}
