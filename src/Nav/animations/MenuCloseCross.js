import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import * as Styled from './Styled.menuClosedCross';

export default function MenuCloseCross({ closeMenu }) {
  return (
    <Styled.menuCloseCross onClick={() => closeMenu(false)}>
      <CloseIcon color="primary" />
    </Styled.menuCloseCross>
  );
}
