import { useState } from "react";
const LikeUnlikeButton = () => {
  const [like, setLike] = useState(0);
  return (
    <div>
      <button
        onClick={() => {
          setLike((prev) => prev + 1);
        }}
      >
        ❤️{" "}
      </button>
      <p>Likes:{like}</p>
    </div>
  );
};

export default LikeUnlikeButton;
