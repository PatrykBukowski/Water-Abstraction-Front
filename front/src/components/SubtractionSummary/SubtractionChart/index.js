import React from 'react'
import { PieChart } from 'react-minimal-pie-chart'

const SubtractionChart = ({ averageUserSubtraction, eurostatSubtraction }) => {

    const pieRotation = () => (
        (180 * (eurostatSubtraction / (eurostatSubtraction + averageUserSubtraction)))+360
    )

    return (
        <div style={{ width: "300px" }}>
            <PieChart
                data={[
                    {
                        color: "#0000FF",
                        title: "User",
                        value: averageUserSubtraction,
                    },
                    {
                        color: "#FF0000",
                        title: "Eurostat",
                        value: eurostatSubtraction,
                    },
                ]}
                lineWidth={50}
                paddingAngle={1}
                startAngle={pieRotation()}
            />
        </div>
    )
}

export default SubtractionChart
