/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';
import StarRateIcon from '@mui/icons-material/StarRate';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import IconButton from '@mui/material/IconButton';
import styles from './buttons.module.css';

function SwipeButtons() {
  return (
    <div className={styles.swipeButtons}>
      <IconButton className={styles.swipeButtonsRepeat}>
        <ReplayIcon fontSize="large" />
      </IconButton>
      <IconButton className={styles.swipeButtonsLeft}>
        <CloseIcon fontSize="large" />
      </IconButton>
      <IconButton className={styles.swipeButtonsStar}>
        <StarRateIcon fontSize="large" />
      </IconButton>
      <IconButton className={styles.swipeButtonsRight}>
        <FavoriteIcon fontSize="large" />
      </IconButton>
      <IconButton className={styles.swipeButtonsLightning}>
        <FlashOnIcon fontSize="large" />
      </IconButton>
    </div>
  );
}
export default SwipeButtons;
