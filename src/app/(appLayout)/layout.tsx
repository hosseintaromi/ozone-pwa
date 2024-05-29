import React, { ReactNode } from 'react';

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      applayout
      {children}
    </div>
  );
};

export default layout;
