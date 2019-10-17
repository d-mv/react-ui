import styled from 'styled-components';

interface LineProps {
  justify: string;
  align: string;
  spacing?: number;
  padding?: string;
}

export const Line = styled.div<LineProps>`
  display: flex;
  flex-direction: row;
  justify-content: ${props => props.justify};
  align-items: ${props => props.align};
  gap: ${props => (props.spacing ? `${props.spacing}rem` : 0)}};
  padding: ${props => (props.padding ? props.padding : 0)};
`;
