/* eslint-disable react/no-danger */
import { useCssContext } from '../../context/cssContext/CssContext';

function App() {
  const { cssVariables } = useCssContext();
  return (
    <div>
      <style
        dangerouslySetInnerHTML={
          {
            __html: `
            .utah-design-system {
              ${
                Object.entries(cssVariables)
                  .map(([key, value]) => `${key}: ${value}`)
                  .join(';')
              }
            }
          `,
          }
        }
      />
    </div>
  );
}

export default App;
