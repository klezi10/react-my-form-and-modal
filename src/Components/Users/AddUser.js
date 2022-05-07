import { useState, Fragment, useRef } from 'react'

import classes from "./AddUser.module.css"
import Card from "../UI/Card"
import Button from "../UI/Button"
import ErrorModal from '../UI/ErrorModal'

export default function AddUser(props) {
    const enteredUserNameInput = useRef()
    const enteredUserAgeInput = useRef()
    // const [enteredName, setEnteredName] = useState('')
    // const [enteredAge, setEnteredAge] = useState('')
    const [error, setError] = useState()

    // function nameHandler(event) {
    //     setEnteredName(event.target.value)
    // }

    // function ageHandler(event) {
    //     setEnteredAge(event.target.value)
    // }


    function submitHandler(event) {
        const enteredUserName = enteredUserNameInput.current.value
        const enteredUserAge = enteredUserAgeInput.current.value
        event.preventDefault()
        if (enteredUserName.trim().length === 0 || enteredUserAge.trim().length === 0) {
            setError({
                title: "Error",
                message: "Please make sure there is a name and age."
            })
            return;
        }
        if (+enteredUserAge < 1) {
            setError({
                title: "Error",
                message: "Please make sure the age is greater than 0."
            })
            return;
        }
        props.onAddUser(enteredUserName, enteredUserAge)
        // setEnteredAge('')
        // setEnteredName('')
        //rarely do this (use refs to manipulate the dom as opposite to react doing it) - ok with small project, or could use state
        enteredUserNameInput.current.value = ''
        enteredUserAgeInput.current.value = ''
    }

    function handleDismiss() {
        setError(null)
    }

    return (
        <Fragment>
            {error && (
                <ErrorModal
                    title={error.title}
                    message={error.message}
                    onDismiss={handleDismiss}
                />
            )}
            <Card className={classes.input}>
                <form onSubmit={submitHandler}>
                    <label htmlFor="name">Name</label>
                    <input
                        // value={enteredName}
                        ref={enteredUserNameInput}
                        id="name"
                        type="text"
                        autoComplete="off"
                        // onChange={nameHandler}
                    />
                    <label htmlFor="age">Age</label>
                    <input
                        // value={enteredAge}
                        ref={enteredUserAgeInput}
                        id="age"
                        type="number"
                    // onChange={ageHandler}
                    />
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </Fragment>
    )
}