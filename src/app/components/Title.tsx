import React from 'react';

type TitleProps = {
  id?: string;
  className?: string;
  children: React.ReactNode;
};

function Title({ className, children, ...props }: TitleProps) {
  return (
    <h1
      {...props}
      className={`text-3xl font-sriracha font-bold uppercase ${className || ''}`}
    >
      {children}
    </h1>
  );
}

export default Title;
