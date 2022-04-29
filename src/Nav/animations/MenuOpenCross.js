import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import * as Styled from './Styled.menuOpenCross';

export default function MenuOpenCross({ closeMenu }) {
  return (
    <Styled.menuOpenCross onClick={() => closeMenu(false)}>
      <CloseIcon color="primary" />
    </Styled.menuOpenCross>
  );
}
