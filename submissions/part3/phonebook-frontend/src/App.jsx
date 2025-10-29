import { useState, useEffect } from 'react';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import personService from './services/persons';
import Notification from './components/Notification';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [newSearch, setNewSearch] = useState('');
  const [notification, setNotification] = useState({
    mode: null,
    message: null,
  });

  useEffect(() => {
    personService.getAll().then((initialPersons) => {
      setPersons(initialPersons);
    });
  }, []);

  const handleNewName = (e) => {
    setNewName(e.target.value);
  };

  const handleNewNumber = (e) => {
    setNewNumber(e.target.value);
  };

  const handleNewSearch = (e) => {
    setNewSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isNameExist = persons.find((el) => el.name === newName);

    const personObject = {
      name: newName.trim(),
      number: newNumber.trim(),
    };

    if (isNameExist) {
      if (
        window.confirm(
          `${newName} is already added to phonebook, replace the new number with the new one?`
        )
      ) {
        personService
          .update(isNameExist.id, personObject)
          .then((returnedPerson) => {
            setNotification({ mode: 'success', message: 'Person updated!' });
            setPersons(
              persons.map((person) =>
                person.id === isNameExist.id ? returnedPerson : person
              )
            );
            setNewName('');
            setNewNumber('');
            setTimeout(() => {
              setNotification({ mode: null, message: null });
            }, 2000);
          })
          .catch((error) => {
            setNotification({
              mode: 'error',
              message: error.response.data.error,
            });
            setTimeout(() => {
              setNotification({ mode: null, message: null });
            }, 2000);
          });
      }
      return;
    }

    personService
      .create(personObject)
      .then((returnedPerson) => {
        setNotification({ mode: 'success', message: 'Person added!' });
        setPersons((prev) => prev.concat(returnedPerson));
        setNewName('');
        setNewNumber('');
        setTimeout(() => {
          setNotification({ mode: null, message: null });
        }, 2000);
      })
      .catch((error) => {
        setNotification({ mode: 'error', message: error.response.data.error });
        setTimeout(() => {
          setNotification({ mode: null, message: null });
        }, 2000);
      });
  };

  const handleDeletePerson = (id, name) => {
    if (window.confirm(`Delete ${name}`)) {
      personService
        .deletePerson(id)
        .then((returnedPerson) => {
          const newPersons = persons.filter((person) => person.id !== id);
          setPersons(newPersons);
        })
        .catch((error) => {
          const deletedPerson = persons.find((person) => person.id === id);
          setPersons(persons.filter((person) => person.id !== id));
          setNotification({
            mode: 'error',
            message: `Information of ${deletedPerson.name} has already been removed from server`,
          });
          setTimeout(() => {
            setNotification({ mode: null, message: null });
          }, 2000);
        });
    }
  };

  const filteredPersons = persons.filter((el) =>
    el.name?.toLowerCase().includes(newSearch.toLowerCase())
  );

  return (
    <div>
      {notification.message && (
        <Notification message={notification.message} mode={notification.mode} />
      )}

      <h2>Phonebook</h2>

      <Filter value={newSearch} onChange={handleNewSearch} />

      <h3>Add a new</h3>

      <PersonForm
        handleSubmit={handleSubmit}
        valueName={newName}
        handleName={handleNewName}
        valueNumber={newNumber}
        handleNumber={handleNewNumber}
      />

      <hr />

      <h3>Numbers</h3>

      <Persons list={filteredPersons} deletePerson={handleDeletePerson} />
    </div>
  );
};

export default App;
