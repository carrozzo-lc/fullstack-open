import { useState } from 'react';
import CountryDetail from './CountryDetail';

const ShowComponent = ({ country }) => {
  const { name, capital, area, languages, flags, capitalInfo } = country;
  const [showDetails, setShowDetails] = useState(false);

  return (
    <>
      {showDetails ? (
        <CountryDetail
          name={name.common}
          capital={capital[0]}
          area={area}
          languages={languages}
          images={flags}
          capitalInfo={capitalInfo}
        />
      ) : (
        name.common
      )}
      <button
        style={{ marginLeft: 10 }}
        onClick={() => setShowDetails(!showDetails)}
      >
        {showDetails ? 'Hide' : 'Show'}
      </button>
    </>
  );
};

const CountriesList = ({ list }) => {
  if (!list || list.length === 0) return null;
  if (list.length > 10) return <p>Too many matches, specify another filter</p>;
  if (list.length === 1)
    return (
      <CountryDetail
        name={list[0].name.common}
        capital={list[0].capital[0]}
        area={list[0].area}
        languages={list[0].languages}
        images={list[0].flags}
        capitalInfo={list[0].capitalInfo}
      />
    );
  return (
    <ul>
      {list.map((c) => (
        <li key={c.cca3} style={{ marginBottom: 20 }}>
          <ShowComponent country={c} />
        </li>
      ))}
    </ul>
  );
};

export default CountriesList;
