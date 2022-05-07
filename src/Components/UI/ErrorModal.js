import ReactDOM from 'react-dom'
import classes from "./ErrorModal.module.css"
import Button from "./Button"
import Card from "./Card"
import React, { Fragment } from "react"

function Backdrop(props) {
    return <div className={classes.backdrop} onClick={props.onDismiss} />
}

function ModalOverlay(props) {
    return (
        <Card className={classes.modal}>
            <header className={classes.header}>
                <h2>{props.title}</h2>
            </header>
            <div className={classes.content}>
                <p>{props.message}</p>
            </div>
            <footer className={classes.actions}>
                <Button onClick={props.onDismiss}>Okay</Button>
            </footer>
        </Card>
    )
}

export default function ErrorModal(props) {
    return (
        <Fragment>
            {ReactDOM.createPortal(
                <Backdrop onDismiss={props.onDismiss} />,
                document.getElementById('backdrop-root')
            )}
            {ReactDOM.createPortal(
                <ModalOverlay 
                    title={props.title}
                    message={props.message}
                    onDismiss={props.onDismiss} />,
                    document.getElementById('overlay-root')
            )}
        </Fragment>
    )
}