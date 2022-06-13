/* eslint-disable import/no-unresolved */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import PersonIcon from '@mui/icons-material/Person';
import IconButton from '@mui/material/IconButton';
import ForumIcon from '@mui/icons-material/Forum';
import styles from './header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <IconButton>
        <PersonIcon className={styles.headerLogo} fontSize="large" />
      </IconButton>
      <img className={styles.headerLogo} src="logo192.png" alt="header" />
      <IconButton>
        <ForumIcon className={styles.headerIcon} fontSize="large" />
      </IconButton>
    </header>
  );
}
export default Header;
