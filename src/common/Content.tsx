import React, { ReactNode } from 'react';

interface IContentProps {
  children: ReactNode;
}

const Content = ({children}: IContentProps) => {
  return (
      <main className="container container-main">
        <div className="inner-wrapper">{children}</div>
      </main>
    );
}

export default Content
