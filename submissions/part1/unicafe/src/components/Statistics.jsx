import StatisticLine from './ui/StatisticLine'

const Statistics = ({ good, neutral, bad }) => {
  //the feedback values are: good 1, neutral 0, bad -1
  const all = good + neutral + bad
  const average = all ? (good - bad) / all : 0
  const positive = all ? (good * 100) / all : 0

  return (
    <div>
      <h1>Statistics</h1>
      {good || neutral || bad ? (
        <table>
          <tbody>
            <StatisticLine text={'Good'} value={good} />
            <StatisticLine text={'Neutral'} value={neutral} />
            <StatisticLine text={'Bad'} value={bad} />
            <StatisticLine text={'All'} value={all} />
            <StatisticLine text={'Average'} value={average} />
            <StatisticLine text={'Positive'} value={positive} />
          </tbody>
        </table>
      ) : (
        <p>No feedback given</p>
      )}
    </div>
  )
}

export default Statistics
