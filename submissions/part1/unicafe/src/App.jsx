import { useState } from 'react'
import FeedBacks from './components/FeedBacks'
import Statistics from './components/Statistics'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const onSetGood = () => {
    const updatedGood = good + 1
    setGood(updatedGood)
  }

  const onSetNeutral = () => {
    const updatedNeutral = neutral + 1
    setNeutral(updatedNeutral)
  }

  const onSetBad = () => {
    const updatedBad = bad + 1
    setBad(updatedBad)
  }

  return (
    <div>
      <FeedBacks
        onSetGood={onSetGood}
        onSetNeutral={onSetNeutral}
        onSetBad={onSetBad}
      />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
