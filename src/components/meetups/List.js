import MeetupItem from './Item';
import classes from './List.module.css';

function MeetupList(props) {
    return <ul className={classes.list}>
        {props.meetups.map((meetup) => <MeetupItem key={meetup.id} meetup={meetup}/>)}
    </ul>
}

export default MeetupList;