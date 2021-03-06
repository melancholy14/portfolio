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
      className={`text-3xl xl:text-4xl font-jua font-bold uppercase ${
        className || ''
      }`}
    >
      {children}
    </h1>
  );
}

export default Title;
