import React from 'react';

import styles from './profile-page.module.scss';
import ProfileForm from '../../components/profile-form/profile-form';

export const ProfilePage = () => {
  return (
    <div className={styles.page}>
      <ProfileForm className={styles.form} />
    </div>
  );
};
