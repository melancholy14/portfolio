import React from 'react';

type ContainerProps = {
  className?: string;
  children: React.ReactNode;
};

function Container({ className, children }: ContainerProps) {
  return <div className={`h-screen flex ${className || ''}`}>{children}</div>;
}

export default Container;
