import React, { useState, useEffect } from 'react'
import { userService } from '../../services/UserService';
import SubtractionChart from './SubtractionChart';

const SubtractionSummary = ({ user: { nationality, statistics: { avgSubtraction: average } } }) => {
    const [eurostat, setEurostat] = useState(0)

    useEffect(() => userService.getEurostat(nationality).then(user => setEurostat(user.currentAvgSubtractionPerCapita)))

    return (
        <div>
            <div>
                Twoje zużycie :: {average}
            </div>
            <div>
                <SubtractionChart averageUserSubtraction={average} eurostatSubtraction={eurostat} />
            </div>
            <div>
                Średnie zużycie społeczeństwa :: {eurostat}
            </div>
        </div>
    )
}

export default SubtractionSummary
