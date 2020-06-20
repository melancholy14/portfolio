import React from 'react';
import { Title } from 'app/components';

type ContainerProps = {
  id?: string;
  title?: string;
  className?: string;
  children: React.ReactNode;
};

function Container({ id, title, className, children }: ContainerProps) {
  return (
    <div className={`w-4/5 flex flex-col ${className || ''}`}>
      {title && <Title id={id}>{title}</Title>}
      {children}
    </div>
  );
}

export default Container;
