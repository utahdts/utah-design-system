/* eslint-disable react/no-danger */
import useCssContext from '../../context/cssContext/useCssContext';

function DemoAppStyle() {
  const { cssState } = useCssContext();
  return (
    <style
      dangerouslySetInnerHTML={
        {
          __html: `.utah-design-system {${(
            Object.entries(cssState)
              .map(([key, value]) => `${key}: ${value}`)
              .join(';')
          )}}`,
        }
      }
    />
  );
}

export default DemoAppStyle;
