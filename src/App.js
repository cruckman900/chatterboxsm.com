import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import Top from './Layout/Top/top'
import Left from './Layout/Left/left'
import Main from './Layout/Main/Main'
import Right from './Layout/Right/right'
import StatusBar from './Layout/StatusBar/StatusBar'
import Footer from './Layout/Footer/footer'
import classes from './App.module.css'

class App extends Component {
    render () {
        return (
            <div className={classes.App}>
                <Row><Col><Top /></Col></Row>
                <Row className={classes.horizRowContainer}>
                    <Col><Left /></Col>
                    <Col><Main /></Col>
                    <Col className={classes.floatingHolder}><Right /></Col>
                </Row>
                <Row className={classes.status}><Col><StatusBar /></Col></Row>
                <Row><Col><Footer /></Col></Row>
            </div>
        )
    }
}

export default App
