const Part = ({ title, exercises }) => {
  return (
    <p>
      {title} {exercises}
    </p>
  )
}

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((part) => (
        <Part key={part.title} title={part.title} exercises={part.exercises} />
      ))}
    </div>
  )
}

export default Content
