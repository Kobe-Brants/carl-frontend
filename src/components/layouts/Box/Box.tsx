import React from 'react';
import styled from 'styled-components';

export interface BoxProps {
  children?: React.ReactNode;
  backgroundColor?: string;
  color?: string;
  padding?: string;
  margin?: string;
  borderRadius?: string;
  border?: string;
  boxShadow?: string | undefined;
  boxSizing?: 'border-box' | 'content-box' | 'inherit';
  minWidth?: string | number | undefined;
  maxWidth?: string | number | undefined;
  width?: string | number | undefined;
  minHeight?: string | number | undefined;
  maxHeight?: string | number | undefined;
  height?: string | number | undefined;
  className?: string;
}

const StyledBox = styled.div<BoxProps>`
  background-color: ${(props) => props.backgroundColor || 'transparent'};
  color: ${(props) => props.color || 'inherit'};
  padding: ${(props) => props.padding || '0'};
  margin: ${(props) => props.margin || '0'};
  border-radius: ${(props) => props.borderRadius || '0'};
  box-shadow: ${(props) => props.boxShadow ?? 'none'};
  border: ${({ border }) => border ?? 'none'};
  box-sizing: ${({ boxSizing }) => boxSizing ?? 'inherit'};
  width: ${(props) => props.width ?? 'auto'};
  height: ${(props) => props.height ?? 'auto'};
  min-width: ${(props) => props.minWidth ?? 'auto'};
  max-width: ${(props) => props.maxWidth ?? 'auto'};
  min-height: ${(props) => props.minHeight ?? 'auto'};
  max-height: ${(props) => props.maxHeight ?? 'auto'};
`;

const Box: React.FC<BoxProps> = ({ children, className, ...rest }) => {
  return (
    <StyledBox className={className} {...rest}>
      {children}
    </StyledBox>
  );
};

export default Box;
