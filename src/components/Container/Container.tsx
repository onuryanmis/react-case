import React from 'react';
import './Container.css';

type ContainerPropsType = {
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLSpanElement>;

const Container: React.FC<ContainerPropsType> = ({
  children,
  ...restProps
}) => {
  return (
    <div className="container" {...restProps}>
      {children}
    </div>
  );
};

export default Container;
