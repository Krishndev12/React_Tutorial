import { useState } from "react";
const ShowHide = () => {
  const [show, setShow] = useState(true);
  return (
    <div>
      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        {show ? "Hide" : "Show"}
      </button>
      {/* <p style={{ display: show ? "block" : "none" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis non cum
        nisi praesentium reiciendis esse exercitationem? Reiciendis sapiente
        impedit omnis quisquam odio architecto officia? Quasi commodi modi fugit
        aut explicabo quos. Obcaecati quaerat nobis quas vero delectus maxime
        eius harum ipsam. Sint quidem sed ratione odit tenetur ea, iste
        laudantium accusamus et rem. Voluptate provident cum corrupti velit
        neque quia pariatur officia doloremque nostrum eveniet delectus, harum
        ut! Sunt vel voluptatem iusto nihil voluptate similique? Beatae numquam
        aperiam odit suscipit optio est, praesentium error voluptas recusandae
        obcaecati dolore laborum tenetur modi eligendi quasi minima saepe libero
        voluptate deserunt aliquid veritatis repellat atque earum commodi.
        Maiores corporis corrupti perspiciatis qui debitis sint commodi animi
        quos blanditiis dolorem est officia sit provident quis veritatis in
        quisquam assumenda, officiis atque adipisci quidem aut? Debitis, impedit
        facilis praesentium odio qui ducimus possimus sapiente adipisci veniam
        officia vero. Perspiciatis minima quaerat ratione officiis ipsa quos
        alias aliquid sequi et repudiandae, consequatur debitis eum amet. Quae
        incidunt repudiandae voluptatum asperiores reprehenderit natus dolorem
        obcaecati molestias impedit earum tempore harum veniam quis, ratione
        nesciunt mollitia quibusdam, explicabo numquam autem perspiciatis.
        Accusamus pariatur ratione molestias perferendis, neque id sapiente
        rerum dolore necessitatibus, suscipit nisi. Repellat, labore dolore.
        Sed.
      </p> */}

      {/* ⭐⭐⭐⭐⭐⭐⭐⭐ // short-circuit */}
      {show && (
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis non cum
          nisi praesentium reiciendis esse exercitationem? Reiciendis sapiente
          impedit omnis quisquam odio architecto officia? Quasi commodi modi
          fugit aut explicabo quos. Obcaecati quaerat nobis quas vero delectus
          maxime eius harum ipsam. Sint quidem sed ratione odit tenetur ea, iste
          laudantium accusamus et rem. Voluptate provident cum corrupti velit
          neque quia pariatur officia doloremque nostrum eveniet delectus, harum
          ut! Sunt vel voluptatem iusto nihil voluptate similique? Beatae
          numquam aperiam odit suscipit optio est, praesentium error voluptas
          recusandae obcaecati dolore laborum tenetur modi eligendi quasi minima
          saepe libero voluptate deserunt aliquid veritatis repellat atque earum
          commodi. Maiores corporis corrupti perspiciatis qui debitis sint
          commodi animi quos blanditiis dolorem est officia sit provident quis
          veritatis in quisquam assumenda, officiis atque adipisci quidem aut?
          Debitis, impedit facilis praesentium odio qui ducimus possimus
          sapiente adipisci veniam officia vero. Perspiciatis minima quaerat
          ratione officiis ipsa quos alias aliquid sequi et repudiandae,
          consequatur debitis eum amet. Quae incidunt repudiandae voluptatum
          asperiores reprehenderit natus dolorem obcaecati molestias impedit
          earum tempore harum veniam quis, ratione nesciunt mollitia quibusdam,
          explicabo numquam autem perspiciatis. Accusamus pariatur ratione
          molestias perferendis, neque id sapiente rerum dolore necessitatibus,
          suscipit nisi. Repellat, labore dolore. Sed.
        </p>
      )}
    </div>
  );
};

export default ShowHide;
