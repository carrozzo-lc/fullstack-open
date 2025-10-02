import { useState, useEffect } from 'react';
import countryService from './services/countries';
import CountriesList from './components/CountriesList';
import './App.css';

function App() {
  const [query, setQuery] = useState('');
  const [countries, setCountries] = useState(null);

  useEffect(() => {
    countryService.getAll().then((initialCountries) => {
      setCountries(initialCountries);
    });
  }, []);

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
  };

  const filteredCountries = countries
    ? countries.filter((c) =>
        c.name.common.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <>
      <h1 className="title">Countries app</h1>
      <div className="card">
        <div className="search-input">
          <input type="text" value={query} onChange={handleChange} />
        </div>
        <div>
          {query !== '' && (
            <CountriesList query={query} list={filteredCountries} />
          )}
        </div>
      </div>
    </>
  );
}

export default App;
