import Button from './ui/Button'

const Feedbacks = ({ onSetGood, onSetNeutral, onSetBad }) => {
  return (
    <div style={{ margin: '24px 0' }}>
      <h1>Give feedback</h1>
      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
        <Button onClick={onSetGood} text={'Good'} />
        <Button onClick={onSetNeutral} text={'Neutral'} />
        <Button onClick={onSetBad} text={'Bad'} />
      </div>
    </div>
  )
}

export default Feedbacks
