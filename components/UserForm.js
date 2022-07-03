import React, { useState, useRef } from 'react'

import classes from './UserForm.module.css'
import Button from './UI/Button';
import Card from './UI/Card';
import ErorModel from './UI/ErorModel';

const UserForm = (props) => {
    const [EnteredUser, setEnteredUser] = useState('');
    const [EnteredAge, setEnteredAge] = useState('');
    const [invalid, setInvalid] = useState();
    const collageNameRef = useRef()

    const textChangeHandler = (event) => {
        setEnteredUser(event.target.value)
    }
    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value)
    }

    const getInputValue = (event) => {
        const enteredCollage = collageNameRef.current.value
        event.preventDefault()
        const inputData = {
            id: Math.random().toString(),
            name: EnteredUser,
            age: EnteredAge,
            collageName: enteredCollage
        }
        if (EnteredUser.trim().length === 0 || EnteredAge.trim().length === 0 || enteredCollage.trim().length === 0) {
            setInvalid({
                title: 'invalid input',
                message: 'please enter valid input details'
            })
            return
        }
        if (+EnteredAge < 1) {
            setInvalid({
                title: 'invalid age',
                message: 'please enter valid age ( >0)'
            })
            return
        }
        console.log(inputData)
        setEnteredAge("")
        setEnteredUser("")
        props.onSubmitClick(inputData)
    }

    const cancelHandler = () => {
        setInvalid(null)
    }

    return (
        <div>
            {invalid && <ErorModel title={invalid.title} message={invalid.message} onConfirm={cancelHandler} />}
            <Card className={classes.input}>
                <form onSubmit={getInputValue}>
                    <label>Username</label>
                    <input
                        id='username'
                        type='text'
                        value={EnteredUser}
                        onChange={textChangeHandler}>
                    </input>
                    <label>Age(years)</label>
                    <input
                        id='age'
                        type='number'
                        value={EnteredAge}
                        onChange={ageChangeHandler}>
                    </input>
                    <label>collage Name</label>
                    <input
                        id='collageName'
                        type='text'
                        ref={collageNameRef}>
                    </input>
                    <Button type='submit'>Add User</Button>
                </form>
            </Card>
        </div >
    )
}
export default UserForm