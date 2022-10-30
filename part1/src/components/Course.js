import Header from './Header'
import Content from './Content'
import StatisticsSum from './StatisticsLine'

const Course = ({course}) => {
    return (
        <div>
            <Header courseName={course.name} />
            <Content parts={course.parts} />
            <StatisticsSum parts={course.parts} />
        </div>
    )
}

export default Course