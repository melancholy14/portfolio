import React from 'react';

type ContainerProps = {
  className?: string;
  children: React.ReactNode;
}

function Container({ className, children }: ContainerProps) {
  return (
    <div className={`h-screen w-full flex p-4 ${className || ''}`}>
      {children}
    </div>
  );
}

export default Container;