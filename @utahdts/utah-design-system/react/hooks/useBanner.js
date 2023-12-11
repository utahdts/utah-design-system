export default function useBanner() {
  return (
    /**
     * @param {Object} param
     * @param {string} param.message
     */
    ({ message }) => {
      // TODO: replace this console.log with adding the banner to the banner queue in the design system context
      console.log(message);
    }
  );
}
