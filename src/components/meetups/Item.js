import classes from './Item.module.css';
import Card from '../ui/Card';

function MeetupItem(props) {

    const { title, image, address, description } = props.meetup;

    return <li className={classes.item}>

        <Card>
            <div className={classes.image}>
                <img src={image} alt={props.title}></img>
            </div>

            <div className={classes.content}>
                <h3>{title}</h3>
                <address>{address}</address>
                <p>{description}</p>
            </div>

            <div className={classes.actions}>
                <button>To Favorites</button>
            </div>
        </Card>
    </li>
}

export default MeetupItem;