// import Card from "./Components/Card";

// const App = () => {
//   return (
//     <div>
//       <Card
//         name={"krishna"}
//         imgSrc={
//           "https://images.unsplash.com/photo-1789660817213-260c3815de6f?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//         }
//       />
//       <Card
//         name={"krishna"}
//         imgSrc={
//           "https://images.unsplash.com/photo-1789660817213-260c3815de6f?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//         }
//       />
//       <Card
//         name={"krishna"}
//         imgSrc={
//           "https://images.unsplash.com/photo-1789660817213-260c3815de6f?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//         }
//       />
//       <Card
//         name={"krishna"}
//         imgSrc={
//           "https://images.unsplash.com/photo-1789660817213-260c3815de6f?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//         }
//       />
//       <Card
//         name={"krishna"}
//         imgSrc={
//           "https://images.unsplash.com/photo-1789660817213-260c3815de6f?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//         }
//       />
//       <Card
//         name={"krishna"}
//         imgSrc={
//           "https://images.unsplash.com/photo-1789660817213-260c3815de6f?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//         }
//       />
//     </div>
//   );
// };

// export default App;

// ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐
// import Card from "./Components/Card";

// const App = () => {
//   const users = [
//     {
//       id: 1,
//       name: "Alex Rivera",
//       image:
//         "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
//       isPresent: true,
//     },
//     {
//       id: 2,
//       name: "Marcus Chen",
//       image:
//         "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
//       isPresent: false,
//     },
//     {
//       id: 3,
//       name: "Elena Rostova",
//       image:
//         "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80",
//       isPresent: true,
//     },
//     {
//       id: 4,
//       name: "David Kim",
//       image:
//         "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
//       isPresent: true,
//     },
//     {
//       id: 5,
//       name: "Sarah Jenkins",
//       image:
//         "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=300&q=80",
//       isPresent: false,
//     },
//   ];
//   return (
//     <div>
//       {users.map((item) => {
//         return (
//           <div>
//             <Card
//               id={item.id}
//               name={item.name}
//               imgSrc={item.image}
//               isPresent={item.isPresent}
//             />
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default App;

// ⭐⭐⭐⭐⭐⭐
// How we use Events in react

const App = () => {
  function btnClickHandler() {
    console.log("button clicked");
  }
  return (
    <div>
      {/* <button
        onClick={() => {
          console.log("button clicked");
        }}
      >
        Click me
      </button> */}

      <button onClick={btnClickHandler}>Click me</button>
    </div>
  );
};

export default App;
