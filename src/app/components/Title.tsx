import React from 'react';

type TitleProps = {
  className?: string;
  children: React.ReactNode;
};

function Title({ className, children }: TitleProps) {
  return (
    <h1 className={`text-3xl font-bold ${className || ''}`}>{children}</h1>
  );
}

export default Title;
