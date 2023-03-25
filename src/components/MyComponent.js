import { useEffect } from "react";

function MyComponent() {
  useEffect(() => {
    document.body.style.backgroundColor = "white";
    return () => {
      document.body.style.backgroundColor = "black";
    };
  }, []);

  return (
    <div>
      <h1>Portfolio Page</h1>
      {/* content of the page */}
    </div>
  );
}
export default MyComponent;
// import { useRef, useEffect } from "react";

// const MyComponent = () => {
//   const bodyRef = useRef(null);

//   useEffect(() => {
//     if (bodyRef.current) {
//       bodyRef.current.style.backgroundColor = "white";
//     }
//     return () => {
//       if (bodyRef.current) {
//         bodyRef.current.style.backgroundColor = "black";
//       }
//     };
//   }, []);

//   return (
//     <div>
//       <h1>Portfolio Page</h1>
//       <div ref={bodyRef}>{/* content of the page */}</div>
//     </div>
//   );
// };
// export default MyComponent;
