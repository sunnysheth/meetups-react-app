import { useEffect, useState } from 'react';

import MeetupList from '../components/meetups/List';

function AllMeetups() {
    const [isLoading, setIsLoading] = useState(true);
    const [loadedMeetups, setLoadedMeetups] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        fetch(
            "https://meetups-react-app-53095-default-rtdb.firebaseio.com/meetups.json"
        ).then((response) => {
           return response.json();
        }).then((data) => {
            const meetups = [];

            for (const key in data) {
                const meetup = {
                    id: key,
                    ...data[key]
                };
                meetups.push(meetup);
            }            

            setIsLoading(false);
            setLoadedMeetups(meetups);
        });
    }, []);


    if (isLoading) {
        return(
            <section>
                <p>Loading.....</p>
            </section>
        );
    }

    return <section>
        <h1>All Meetups</h1>
        <ul>
            <MeetupList meetups={loadedMeetups} />
        </ul>
    </section>
}

export default AllMeetups;