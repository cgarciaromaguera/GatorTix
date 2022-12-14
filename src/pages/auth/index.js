import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { images } from 'theme'
import { path } from 'utils/const'
import Login from './Login'
import Signup from './Signup'
import ResetPassword from './ResetPassword'
import styles from './auth.module.scss'

const Auth = () => (
  // routes to proper authentication page based on site link
  <div className={styles.root}>
    <div className={styles.leftContainer}>
      <img src={images.logo} className={styles.logo} alt="logo" />
    </div>
    <div className={styles.rightContainer}>
      <Switch>
        <Route path={path.login}>
          <Login />
        </Route>
        <Route path={path.signup}>
          <Signup />
        </Route>
        <Route path={path.resetPassword}>
          <ResetPassword />
        </Route>
        <Redirect to={path.login} />
      </Switch>
    </div>
  </div>
)

export default Auth
