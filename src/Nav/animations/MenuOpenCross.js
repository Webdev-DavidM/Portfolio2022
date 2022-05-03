import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import * as Styled from './menuOpenCross.styles';
import { color } from '../../Global/Variables';

export default function MenuOpenCross({ closeMenu }) {
  return (
    <Styled.menuOpenCross onClick={() => closeMenu(false)}>
      <CloseIcon fontSize="large" htmlColor={`${color.green}`} />
    </Styled.menuOpenCross>
  );
}
