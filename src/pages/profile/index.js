import React from 'react'
import { useSelector } from 'react-redux'
import Button from 'components/Button'
import { firestore } from 'utils/firebase'
import styles from './profile.module.scss'

const Profile = () => {
  const { me } = useSelector((state) => state.app);
  // console.log(me); // pulls all user data from firestore associated with the current userid

  const userRef = firestore.collection("users");
  const q = userRef.where("email", "==", me?.email);

  const modifyProfile = (event, val) => {
    q.get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
          userRef.doc(doc.id).update({
            test: val
          });
        });
      })
  }

  return (
    <div className={styles.root}>
      {/* <div className="d-flex flex-row justify-content-center align-items-stretch">
        <div className="p-1">{me?.fullName || 'User'}</div>
        <div className="p-1">{me?.fullName || 'User'}</div>
      </div> */}

      <div className="container text-center">
        {/* <p>SPACE (for nav bar)</p> */}
      </div>

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
          <div className={styles.buttonContainer}>
            <Button
              label="SetFirestore"
              className="btn-purple-outline"
              onClick={event => modifyProfile(event, "test")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

Profile.propTypes = {}
Profile.defaultProps = {}

export default Profile
