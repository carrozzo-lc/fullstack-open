const Filter = ({ value, onChange }) => {
  return (
    <div>
      search:
      <input
        id="search"
        name="search"
        type="text"
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default Filter;
