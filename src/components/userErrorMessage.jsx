const userErrorMessage = ({ illustration, message, cta }) => {
  return (
    <div className="flex flex-col gap-3 items-center justify-center">
      {!illustration ? (
        ''
      ) : (
        <div className="img-container">
          <img src={`/images/${illustration}`} alt="userError" />
        </div>
      )}
      <p>{message}</p>

      <button>{cta}</button>
    </div>
  );
};
export default userErrorMessage;
