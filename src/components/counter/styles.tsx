import styled from 'styled-components'

export const StyledCounter = styled.div`
  width: 4.5rem;
  height: 2rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 6px;

  gap: 0.25rem;

  padding: 0.5rem;

  background: ${(props) => props.theme['button-background']};

  span {
    width: 1.25rem;
    height: 1.315rem;

    display: flex;
    justify-content: center;
    align-items: center;

    color: ${(props) => props.theme['button-text']};

    line-height: 20.8px;
  }

  .minusPlus {
    appearance: none;
    border: none;
    outline: none;
    width: 0.875rem;
    height: 0.875rem;

    display: flex;
    justify-content: center;
    align-items: center;

    background: ${(props) => props.theme['button-background']};
    color: ${(props) => props.theme['button-text']};

    cursor: pointer;

    &:disabled {
      cursor: not-allowed;
    }
    &:hover {
      color: ${(props) => props.theme.white};
    }
  }
`
