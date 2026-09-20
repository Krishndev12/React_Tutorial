const User = ({ name, id, gender, isPresent }) => {
  return (
    <>
      <div>
        <h1>{name}</h1>
        <p>{id}</p>
        <p>{gender}</p>
        <p>isPresent:{isPresent ? "yes" : "no"}</p>
      </div>
    </>
  );
};

export default User;
