import { useNavigate } from 'react-router-dom';
import AddMeetupForm from '../components/meetups/AddForm';

function NewMeetup() {
    const navigate = useNavigate();
    function addMeetupHandler(meetupData) {
        fetch(
            "https://meetups-react-app-53095-default-rtdb.firebaseio.com/meetups.json",
            {
                method: 'POST',
                body: JSON.stringify(meetupData),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then(() => {
            navigate('/');
        });
    }

    return (
        <section>
            <h1>Add New Meetup</h1>
            <AddMeetupForm onAddMeetup={addMeetupHandler}/>
        </section>
    );
}

export default NewMeetup;