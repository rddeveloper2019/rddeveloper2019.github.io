import React, { ReactNode, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

interface PortalProps {
  children: ReactNode;
}

export const Portal: React.FC<PortalProps> = ({ children }) => {
  // новый контейнер div в document.body и рендерит children
  const [container] = useState(() => document.createElement('div'));

  useEffect(() => {
    // контейнер добавляется в body
    document.body.appendChild(container);
    return () => {
      // когда размонтируется, контейнер удаляется.
      document.body.removeChild(container);
    };
  }, [container]);

  return ReactDOM.createPortal(children, container);
};
