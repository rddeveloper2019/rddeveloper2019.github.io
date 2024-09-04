import React, { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
  children: ReactNode;
}

const container = document.body;
export const Portal: React.FC<PortalProps> = ({ children }) => {
  return createPortal(children, container);
};
