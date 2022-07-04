import styled from 'styled-components';

export const StyledButton = styled.button`
  :not(: last-child) {
    margin-right: 10px;
  }

  :first-letter {
    text-transform: uppercase;
  }
`;
