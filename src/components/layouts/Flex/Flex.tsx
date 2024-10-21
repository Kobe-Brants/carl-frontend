import React from 'react';
import { BorderProps, ColorProps, LayoutProps, MarginProps, OverflowProps, PaddingProps } from 'styled-system';

import { FlexContainer } from './Flex.styles';

interface FlexProps extends React.HTMLAttributes<HTMLDivElement> {
  direction?: 'row' | 'column';
  justify?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
  align?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  gap?: string;
  children?: React.ReactNode;
  className?: string;
}

export type Props = FlexProps & ColorProps & LayoutProps & MarginProps & PaddingProps & BorderProps & OverflowProps;

const Flex = ({ children, className, ...props }: Props) => {
  return (
    <FlexContainer className={className} {...props}>
      {children}
    </FlexContainer>
  );
};

export default Flex;
