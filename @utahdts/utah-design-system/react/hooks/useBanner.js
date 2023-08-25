/* eslint no-console: ["error", { allow: ["log"] }] */
export default function useBanner() {
  return ({ message }) => {
    // TODO: replace this console.log with adding the banner to the banner queue in the design system context
    console.log(message);
  };
}
