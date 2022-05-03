import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import * as Styled from './menuClosedCross.styles';
import { color } from '../../Global/Variables';

export default function MenuCloseCross({ closeMenu }) {
  return (
    <Styled.menuCloseCross onClick={() => closeMenu(false)}>
      <CloseIcon fontSize="large" htmlColor={`${color.green}`} />
    </Styled.menuCloseCross>
  );
}
