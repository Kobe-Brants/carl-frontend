import styled from 'styled-components';
import { border, color, layout, margin, overflow, padding } from 'styled-system';

import { Props } from './Flex';

export const FlexContainer = styled.div<Props>`
  ${layout}
  ${color}
  ${margin}
  ${padding}
  ${border}
  ${overflow}
  position: relative;
  display: flex;
  flex-direction: ${({ direction }) => direction || 'row'};
  justify-content: ${({ justify }) => justify || 'flex-start'};
  align-items: ${({ align }) => align || 'stretch'};
  flex-wrap: ${({ wrap }) => wrap || 'nowrap'};
  gap: ${({ gap }) => gap || '0'};
`;
