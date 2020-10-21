import React from 'react'
import PeopleCredits from './PeopleCredits'

class PeopleTimeline extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return this.props.people.map(people => (
            <h1>
                <PeopleCredits people={people} />
            </h1>

        )
        )
    }
}

export default PeopleTimeline;