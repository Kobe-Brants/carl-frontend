import React from 'react';
import styled from 'styled-components';

export interface GridProps {
  columns?: number;
  columnWidth?: string;
  rowGap?: string;
  columnGap?: string;
  children?: React.ReactNode;
  minWidth?: string | number | undefined;
  maxWidth?: string | number | undefined;
  width?: string | number | undefined;
  minHeight?: string | number | undefined;
  maxHeight?: string | number | undefined;
  height?: string | number | undefined;
  className?: string; // Allow custom styling
}

const GridContainer = styled.div<GridProps>`
  display: grid;
  grid-template-columns: ${({ columns, columnWidth }) => `repeat(${columns}, ${columnWidth || '1fr'})`};
  gap: ${({ rowGap, columnGap }) => `${rowGap || '0'} ${columnGap || '0'}`};
  width: ${(props) => props.width ?? 'auto'};
  height: ${(props) => props.height ?? 'auto'};
  min-width: ${(props) => props.minWidth ?? 'auto'};
  max-width: ${(props) => props.maxWidth ?? 'auto'};
  min-height: ${(props) => props.minHeight ?? 'auto'};
  max-height: ${(props) => props.maxHeight ?? 'auto'};
`;

const Grid = ({ children, className, ...props }: GridProps) => {
  return (
    <GridContainer className={className} {...props}>
      {children}
    </GridContainer>
  );
};

export default Grid;
