import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import colors from '../../../utils/colors'

const SubtractionChart = ({ averageUserSubtraction, eurostatSubtraction }) => {
    const data = {
        datasets: [
            {
                backgroundColor: [
                    colors.orangeWeb,
                    colors.oxfordBlue,
                ],
                data: [averageUserSubtraction, eurostatSubtraction]
            }
        ]
    }

    return (
        <Doughnut
            data={data}
            options={{
                rotation: 1 * Math.PI,
                circumference: 1 * Math.PI,
                responsive: true,
                cutoutPercentage: 80,
                elements: {
                    arc: {
                        borderWidth: 0
                    }
                },
                tooltips: {
                    enabled: false,
                },
            }}
        />
    )
}

export default SubtractionChart
