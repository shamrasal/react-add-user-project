import classes from './NewUser.module.css'
import Card from './UI/Card'
const NewUser = (props) => {
    console.log(props.input)
    return (
        <Card className={classes.users}>
            <ul>
                {props.input.map((user) => (
                    <li key={user.id}>
                        {user.name} ({user.age} years old) from {user.collageName} collage
                    </li>
                ))}
            </ul>
        </Card>
    )
}

export default NewUser