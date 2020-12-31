import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import colors from '../../../utils/colors'

const SubtractionChart = ({ averageUserSubtraction, eurostatSubtraction }) => {
    const data = {
        datasets: [
            {
                backgroundColor: [
                    colors.imperialRed,
                    colors.powderBlue,
                ],
                data: [averageUserSubtraction, eurostatSubtraction]
            }
        ]
    }

    return (
        <div>
            <Doughnut
                data={data}
                options={{
                    rotation: 1 * Math.PI,
                    circumference: 1 * Math.PI,
                }}
            />
        </div>
    )
}

export default SubtractionChart
