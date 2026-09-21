// const Card = ({ name, imgSrc }) => {
//   return (
//     <div>
//       <h1>{name}</h1>
//       <img style={{ width: "200px" }} src={imgSrc} alt="not found" />
//     </div>
//   );
// };

// export default Card;

// ––––––––––––––––––––––––––––––––––––––––––––



const Card = ({ id, name, imgSrc, isPresent }) => {
  return (
    <div>
      <p>{id}</p>
      <h1>{name}</h1>
      <img src={imgSrc} alt="img not  found" />
      <p>isPresent:{isPresent ? "yes" : "no"}</p>
    </div>
  );
};

export default Card;
