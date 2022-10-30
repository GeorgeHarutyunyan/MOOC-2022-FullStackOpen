const StatisticsSum = ({parts}) => {
    const total = parts.reduce((p,c) => p + c.exercises, 0)

    return <p><em>Total exercises: {total}</em></p>
}

export default StatisticsSum