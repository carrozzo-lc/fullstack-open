const Notification = ({ message, mode }) => {
  if (message === null) {
    return null;
  }

  return (
    <div className={mode === 'success' ? 'success' : 'error'}>{message}</div>
  );
};

export default Notification;
