import React from 'react'
import { FlexContainer } from '../_shared'
import List from './List';
import ListItem from './ListItem';

export default function JobsPage(props) {
    const [jobs, setJobs] = React.useState([
        { id: 1, model: "Modell X", time: "09:00", type: "Invändig" },
        { id: 2, model: "Modell Y", time: "11:30", type: "Invändig & Utvändig" },
        { id: 3, model: "Modell Z", time: "12:00", type: "Utvändig" },
        { id: 4, model: "Modell Z", time: "12:00", type: "Utvändig" },
        { id: 5, model: "Modell X", time: "12:00", type: "Invändig" },
        { id: 6, model: "Modell X", time: "13:09", type: "Utvändig" },
    ]);

    return (
        <FlexContainer height="100%" alignItems="center">
            <List>
                {jobs.map(j => (<ListItem key={j.id} {...j} />))}
            </List>
        </FlexContainer>
    )
}
