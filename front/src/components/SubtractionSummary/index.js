import React, { useState, useEffect } from 'react'
import { userService } from '../../services/UserService';

const SubtractionSummary = ({ user: { nationality, statistics: { avgSubtraction: average } } }) => {
    const [eurostat, setEurostat] = useState(0)

    useEffect(() => userService.getEurostat(nationality).then(user => setEurostat(user)))

    return (
        <div>
            <div>
                Twoje zużycie :: {average}
            </div>
            <div>
                Średnie zużycie społeczeństwa :: {eurostat.currentAvgSubtractionPerCapita}
            </div>
        </div>
    )
}

export default SubtractionSummary
