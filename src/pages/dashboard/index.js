import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from 'components/Button'
import { actions } from 'slices/app.slice'
import { images } from 'theme'
import { Link } from 'react-router-dom'
import { firestore } from 'utils/firebase'
import styles from './dashboard.module.scss'

const Dashboard = () => {
  const dispatch = useDispatch()
  const { me } = useSelector((state) => state.app)

  // Get information from ticket listings
  const [ticketListings, setListings] = useState([])
  const [gameListings, setGames] = useState([])
  const [userListings, setUsers] = useState([])
  useEffect(() => {
    const listingsRef = firestore.collection('listings')
    const unsubscribe = listingsRef.onSnapshot((snapshot) => {
      const listingsArray = snapshot.docs.map((doc) => ({
        id: doc.id,
        buyer: doc.get('buyer'),
        complete: doc.get('complete'),
        contact: doc.get('contact'),
        game: doc.get('game').id,
        price: doc.get('price'),
        seller: doc.get('seller').id,
      }))
      setListings(listingsArray)
    })

    const gameRef = firestore.collection('games')
    const gunsubscribe = gameRef.onSnapshot((snapshot) => {
      const gameArray = snapshot.docs.map((doc) => ({
        id: doc.id,
        away: doc.get('away'),
        home: doc.get('home'),
        time: doc.get('time').toDate(),
      }))
      setGames(gameArray)
    })

    const userRef = firestore.collection('users')
    const uunsubscribe = userRef.onSnapshot((snapshot) => {
      const userArray = snapshot.docs.map((doc) => ({
        id: doc.id,
        email: doc.get('email'),
        fullname: doc.get('fullName'),
      }))
      setUsers(userArray)
    })

    return () => unsubscribe()
  }, [])

  // Get relevant games being listed
  const games = []
  const tSize = ticketListings.length
  const gSize = gameListings.length
  for (let tIndex = 0; tIndex < tSize; tIndex += 1) {
    for (let gIndex = 0; gIndex < gSize; gIndex += 1) {
      if (ticketListings[tIndex]?.game === gameListings[gIndex]?.id) {
        games.push({
          away: gameListings[gIndex]?.away,
          home: gameListings[gIndex]?.home,
          time: gameListings[gIndex]?.time,
        })
        break
      } else if (
        ticketListings[tIndex]?.game !== gameListings[gIndex]?.id &&
        gIndex === gSize - 1
      ) {
        games.push({
          away: 'unknown',
          home: 'unknown',
          time: 'unknown',
        })
      }
    }
  }

  // Get relevant users being listed
  const users = []
  const uSize = userListings.length
  for (let tIndex = 0; tIndex < tSize; tIndex += 1) {
    for (let uIndex = 0; uIndex < uSize; uIndex += 1) {
      if (ticketListings[tIndex]?.seller === userListings[uIndex]?.id) {
        users.push({
          email: userListings[uIndex]?.email,
          fullname: userListings[uIndex]?.fullname,
        })
        break
      } else if (
        ticketListings[tIndex]?.seller !== userListings[uIndex]?.id &&
        uIndex === uSize - 1
      ) {
        users.push({
          email: 'unknown',
          fullname: 'unknown',
        })
      }
    }
  }

  const pageList = []
  for (let index = 0; index < tSize; index += 1) {
    pageList.push(
      <div className="row p-2">
        <div className="border border-primary col-6 text-left">
          <p>
            Game: {games[index]?.home} vs {games[index]?.away}
          </p>
          <p>Time: {games[index]?.time.toString()}</p>
        </div>
        <div className="border border-primary col-sm text-left">
          <p>Buyer: {ticketListings[index]?.buyer}</p>
          <p>Seller: {users[index]?.fullname}</p>
          <p>Contact: {ticketListings[index]?.contact}</p>
        </div>
        <div className="border border-primary col-sm text-left">
          <p>Complete: {ticketListings[index]?.complete.toString()}</p>
          <p>Price (USD): {ticketListings[index]?.price}</p>
        </div>
      </div>,
    )
  }

  return (
    <div className={styles.root} style={{ height: '100vh' }}>
      <div className={styles.container}>
        <img src={images.logo} className={styles.logo} alt="logo" />
        <h3 className={styles.greeting}>
          <Link to="/profile">{`Hi👋, ${me?.fullName || 'User'}`}</Link>
        </h3>
        <p className={styles.description}>
          {/* This is
          {'\n'}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/facebook/create-react-app"
          >
            create react native app
          </a>
          {'\n'}
          based firebase pre-setup template with basic development setup. For
          the setup procedure, check the
          {'\n'}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/WataruMaeda/react-firebase-boilerplate/blob/master/README.md"
          >
            README
          </a>
          {'\n'}
          for more information. */}
        </p>
        <div className="container text-center">{pageList}</div>
        <div className={styles.buttonContainer}>
          <Button
            label="Logout"
            className={`btn-purple-outline ${styles.logout}`}
            onClick={() => dispatch(actions.logout())}
          />

          <Link to="/sell">
            <Button
              label="Sell Ticket"
              className={`btn-purple-outline ${styles.logout}`}
            />
          </Link>

          <Link to="/buy">
            <Button
              label="Buy Ticket"
              className={`btn-purple-outline ${styles.logout}`}
            />
          </Link>
        </div>
      </div>
    </div>
  )
}

Dashboard.propTypes = {}
Dashboard.defaultProps = {}

export default Dashboard
