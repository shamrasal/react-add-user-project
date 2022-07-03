import React from "react"
import Card from "./Card"
import Button from "./Button"
import classes from './ErorModel.module.css'
import reactDom from "react-dom"

const backDrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onConfirm} />
}

const modelOverlay = (props) => {
    return (
        <Card className={classes.modal}>
            <header className={classes.header}>
                <h2>{props.title}</h2>
            </header>
            <div className={classes.content}>
                <p>{props.message}</p>
            </div>
            <footer className={classes.actions}>
                <Button onClick={props.onConfirm}>okay</Button>
            </footer>
        </Card>
    )
}

const ErorModel = (props) => {
    return (
        <React.Fragment>
            {reactDom.createPortal(
                <backDrop onConfirm={props.onConfirm} />,
                document.getElementById('backdrop-root'))}
            {reactDom.createPortal(
                <modelOverlay
                    title={props.title}
                    message={props.message}
                    onConfirm={props.onConfirm} />,
                document.getElementById('overlay-root'))}
        </React.Fragment>
    )
}
export default ErorModel