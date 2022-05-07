import { useState } from 'react'

import classes from "./AddUser.module.css"
import Card from "../UI/Card"
import Button from "../UI/Button"
import ErrorModal from '../UI/ErrorModal'

export default function AddUser(props) {
    const [enteredName, setEnteredName] = useState('')
    const [enteredAge, setEnteredAge] = useState('')
    const [error, setError] = useState()

    function nameHandler(event) {
        setEnteredName(event.target.value)
    }

    function ageHandler(event) {
        setEnteredAge(event.target.value)
    }


    function submitHandler(event) {
        event.preventDefault()
        if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: "Error",
                message: "Please make sure there is a name and age."
            })
            return;
        }
        if (+enteredAge < 1) {
            setError({
                title: "Error",
                message: "Please make sure the age is greater than 0."
            })
            return;
        }
        props.onAddUser(enteredName, enteredAge)
        setEnteredAge('')
        setEnteredName('')
    }

    function handleDismiss() {
        setError(null)
    }

    return (
        <div>
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
                    <input value={enteredName} id="name" type="text" autoComplete="off" onChange={nameHandler} />
                    <label htmlFor="age">Age</label>
                    <input value={enteredAge} id="age" type="number" onChange={ageHandler} />
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </div>
    )
}