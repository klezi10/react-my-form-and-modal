import classes from "./UserList.module.css"
import Card from "../UI/Card"

export default function UserList(props) {
    console.log(props.users)
    return (
        <Card className={classes.users}>
            <ul>
            {props.users.map(user => 
                 <li key={user.id}>{user.name} ({user.age}) years old</li> 
                )}
            </ul>
        </Card>
    )
}