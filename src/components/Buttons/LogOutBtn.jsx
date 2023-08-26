import React from 'react'
import Button from 'react-bootstrap/Button'
import "../../css/Buttons/CSS_btns.css"

const LogOutBtn = () => {

    const Logout = () => {

        localStorage.clear()
    }

    return (
        <Button className="logout-btn" onClick={Logout}>
            Log Out
        </Button>
    )
}

export default LogOutBtn