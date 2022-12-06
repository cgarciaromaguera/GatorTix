import React from 'react'
import { useSelector } from 'react-redux'
import styles from './profile.module.scss'

const Profile = () => {
  const { me } = useSelector((state) => state.app)
  // console.log(me); // pulls all user data from firestore associated with the current userid

  return (
    <div className={styles.root} style={{ height: '100vh' }}>
      <div className="container text-center">
        {/* space for nav bar */}
      </div>

      {/* profile data */}
      <div className="container">
        <div className="col">
          <div className="border border-primary col-sm-12 p-2 m-2">
            {me?.fullName || 'User'}&apos;s&nbsp;Profile
          </div>
          <div className="border border-primary col-sm-12 p-2 m-2">
            {me?.fullName || 'User'}&apos;s&nbsp;Profile Information
            <p>Email: {me?.email || 'Email not found.'}</p>
          </div>
          <div className="border border-primary col-sm-12 p-2 m-2">
            {me?.fullName || 'User'}&apos;s&nbsp;Ticket Listings
          </div>
          <div className="border border-primary col-sm-12 p-2 m-2">
            {me?.fullName || 'User'}&apos;s&nbsp;Purchases
          </div>
        </div>
      </div>
    </div>
  )
}

Profile.propTypes = {}
Profile.defaultProps = {}

export default Profile
