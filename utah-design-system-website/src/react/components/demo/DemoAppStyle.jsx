import { useCssContext } from '../../context/cssContext/useCssContext';

export function DemoAppStyle() {
  const { cssState } = useCssContext();
  return (
    <style
      /* eslint-disable react/no-danger */
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
