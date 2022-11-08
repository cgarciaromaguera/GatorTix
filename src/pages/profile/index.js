import React from 'react'
import { useSelector } from 'react-redux'
import styles from './profile.module.scss'

const Profile = () => {
  const { me } = useSelector((state) => state.app)

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <p>{me?.fullName || 'User'}</p>
      </div>
    </div>

    // TODO: figure out how to store data on firebase

    // name and profile pic

    // email
    // phone
    // grad date
    // ufid

    // your listings section
    // your purchases section
  );
}

Profile.propTypes = {}
Profile.defaultProps = {}

export default Profile
