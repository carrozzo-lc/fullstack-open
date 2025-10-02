const PersonForm = ({
  handleSubmit,
  valueName,
  handleName,
  valueNumber,
  handleNumber,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        name:
        <input
          id="name"
          name="name"
          type="text"
          onChange={handleName}
          value={valueName}
        />
      </div>
      <div>
        number:{' '}
        <input
          id="number"
          name="number"
          type="text"
          onChange={handleNumber}
          value={valueNumber}
        />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonForm;
