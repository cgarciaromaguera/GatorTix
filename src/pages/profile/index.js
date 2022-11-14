import React from 'react'
import { useSelector } from 'react-redux'
import styles from './profile.module.scss'

const Profile = () => {
  const { me } = useSelector((state) => state.app)

  return (
    <div className={styles.root}>
      {/* <div className="d-flex flex-row justify-content-center align-items-stretch">
        <div className="p-1">{me?.fullName || 'User'}</div>
        <div className="p-1">{me?.fullName || 'User'}</div>
      </div> */}

      <div className="container text-center">
        <p>SPACE (for nav bar)</p>
      </div>

      <div className="container">
        <div className="col">
          <div className="border border-primary col-sm-12 p-2 m-2">
            {me?.fullName || 'User'}&apos;s&nbsp;Profile and Profile Picture
          </div>
          <div className="border border-primary col-sm-12 p-2 m-2">
            {me?.fullName || 'User'}&apos;s&nbsp;Profile Information
          </div>
          <div className="border border-primary col-sm-12 p-2 m-2">
            {me?.fullName || 'User'}&apos;s&nbsp;Ticket Listings
          </div>
          <div className="border border-primary col-sm-12 p-2 m-2">
            {me?.fullName || 'User'}&apos;s&nbsp;Purchases
          </div>
        </div>
      </div>

    </div >



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
