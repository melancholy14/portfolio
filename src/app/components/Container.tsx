import React from 'react';

type ContainerProps = {
  className?: string;
  children: React.ReactNode;
};

function Container({ className, children }: ContainerProps) {
  return (
    <div className={`h-screen flex p-4 xl:mx-5/33 ${className || ''}`}>
      {children}
    </div>
  );
}

export default Container;
