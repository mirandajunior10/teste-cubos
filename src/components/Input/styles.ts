import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #EBEBEB;
  border-radius: 40px;
  min-width: 100%;
  padding: 16px;
  border: 2px solid #EBEBEB;
  color: #03CAD2;
  display: flex;
  align-items: center;

  ${props =>
    props.isFocused &&
    css`
      color: #03CAD2;
      border-color: #03CAD2;
    `}
  ${props =>
    props.isFilled &&
    css`
      color: #03CAD2;
    `}


  input {
    background: transparent;
    flex: 1;
    border: 0;
    color: #03CAD2;

    &::placeholder {
      color: #03CAD2;
    }
  }

  svg {
    margin-right: 16px;
  }
`;
