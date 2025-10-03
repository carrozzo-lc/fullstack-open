const Persons = ({ list, deletePerson }) => {
  return (
    <ul>
      {list.map((person) => (
        <li key={person.id}>
          <span>
            {person.name} {person.number}
          </span>
          <span>
            <button
              style={{ marginLeft: 5, cursor: 'pointer' }}
              onClick={() => deletePerson(person.id, person.name)}
            >
              Delete
            </button>
          </span>
        </li>
      ))}
    </ul>
  );
};

export default Persons;
