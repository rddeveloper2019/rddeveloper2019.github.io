import { MutableRefObject, useEffect } from 'react';

export const useResizeObserver = (
  element: MutableRefObject<HTMLDivElement>,
  callback: (entry: ResizeObserverEntry) => void
) => {
  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => callback(entries[0]));
    element.current && resizeObserver.observe(element.current);

    return () => resizeObserver.disconnect();
  }, []);
};
