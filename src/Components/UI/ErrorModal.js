import classes from "./ErrorModal.module.css"
import Button from "./Button"
import Card from "./Card"
import { Fragment } from "react"

export default function ErrorModal(props) {
    return (
        <Fragment>
            <div className={classes.backdrop} onClick={props.onDismiss} />
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
        </Fragment>
    )
}