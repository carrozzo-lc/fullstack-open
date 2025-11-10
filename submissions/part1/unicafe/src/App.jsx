import Header from './components/Header'
import Content from './components/Content'
import Total from './components/Total'

const App = () => {
  const course = 'Half Stack application development'

  const partsList = [
    { title: 'Fundamentals of React', exercises: 10 },
    { title: 'Using props to pass data', exercises: 7 },
    { title: 'State of a component', exercises: 14 },
  ]

  const totalExercises =
    partsList[0].exercises + partsList[1].exercises + partsList[2].exercises

  return (
    <div>
      <Header course={course} />
      <Content parts={partsList} />
      <Total total={totalExercises} />
    </div>
  )
}

export default App
