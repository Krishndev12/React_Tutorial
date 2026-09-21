const Left = ({ setText}) => {
  return (
    <div>
      <input
        onInput={(e) => {
          setText(e.target.value);
        }}
        type="text"
        placeholder="type here"
      />
    </div>
  );
};

export default Left;
