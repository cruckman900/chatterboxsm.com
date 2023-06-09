import React, { Fragment, useState, useEffect, useContext } from 'react'
import AuthContext from '../../store/auth-context'
import Status from './Status'
import { getUserCount, getUserCountIsLoggedIn } from '../../DataHandlers/AccountInfoDataHandler'
import classes from './StatusBar.module.css'

const StatusBar = () => {
    const authCtx = useContext(AuthContext)
    const [numUsers, setNumUsers] = useState(0)
    const [numUsersLoggedIn, setNumUsersLoggedIn] = useState(0)

    const getNums = () => {
        getUserCount()
            .then((result) => {
                const count = result.data[0].user_count
                setNumUsers(count)
            })
            .catch((err) => {
                console.log('StatusBar.js getUserCount err:', err)
            })
        getUserCountIsLoggedIn()
            .then((result) => {
                const count = result.data[0].logged_in_user_count
                setNumUsersLoggedIn(count)
            })
            .catch((err) => {
                console.log('StatusBar.js getUsersLoggedInCount err:', err)
            })
    }

    useEffect(() => {
        setInterval(getNums, 2500)
    })

    return (
        <div className={classes.statusBar}>
            <Fragment>
                <Status className={authCtx.isLoggedIn && classes.statusHideIfTiny} label="Vers" value={process.env.REACT_APP_VERSION} />
                <Status className={authCtx.isLoggedIn && classes.statusHideIfTiny} label="Usrs" value={numUsers} />
                <Status className={authCtx.isLoggedIn && classes.statusHideIfTiny} label="# On" value={numUsersLoggedIn} />
            </Fragment>
            {authCtx.isLoggedIn && (
                <Fragment>
                    <Status label="PMs" value="0" />
                    <Status label="CMs" value="0" />
                </Fragment>
            )}
        </div>
    )
}

export default StatusBar
