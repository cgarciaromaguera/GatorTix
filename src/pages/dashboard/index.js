import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from 'components/Button'
import Dropdown from 'components/Dropdown'
import { actions } from 'slices/app.slice'
import { images } from 'theme'
import styles from './dashboard.module.scss'

const Dashboard = () => {
  const dispatch = useDispatch()
  const { me } = useSelector((state) => state.app)

  // Temporarily handling dropdown buttons
  const handleMenuOne = () => {
    // eslint-disable-next-line
    console.log('clicked one');
  };
  const handleMenuTwo = () => {
    // eslint-disable-next-line
    console.log('clicked two');
  };
  
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <img src={images.logo} className={styles.logo} alt="logo" />
        <h3 className={styles.greeting}>{`Hi👋, ${me?.fullName || 'User'}`}</h3>
        <h1 className={styles.title}>React + Firebase Boilerplate</h1>
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
        <Dropdown
          trigger={<button type="button">Dropdown 1</button>}
          menu={[
            <button type="button" onClick={handleMenuOne}>Menu 1</button>,
            <button type="button" onClick={handleMenuTwo}>Menu 2</button>,
          ]}
        />
        <Dropdown
          trigger={<button type="button">Dropdown 2</button>}
          menu={[
            <button type="button" onClick={handleMenuOne}>Menu 3</button>,
            <button type="button" onClick={handleMenuTwo}>Menu 4</button>,
          ]}
        />
        <div className={styles.buttonContainer}>
          <Button
            label="Logout"
            className={`btn-purple-outline ${styles.logout}`}
            onClick={() => dispatch(actions.logout())}
          />
        </div>
      </div>
    </div>
  )
}

Dashboard.propTypes = {}
Dashboard.defaultProps = {}

export default Dashboard
