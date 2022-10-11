import styled from 'styled-components';

import { THEME } from '../../../util/theme';

export const Nav = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  @media (max-width: 770px) {
    display: none;
    position: absolute;
    top: calc(100% + 25px);
    left: 50%;
    transform: translateX(-50%);
    background-color: ${THEME.COLORS.WHITE};
    width: 90%;
    border-radius: 6px;
    padding: 25px 25px 0;
    text-align: center;
    box-shadow: inset 7px 3px 1.3em #eeedf1, 18px 5px 1em #2e3450;

    &.active {
      display: block;
      
      
    }
  }
`;