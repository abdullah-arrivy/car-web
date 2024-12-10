import React, { useCallback, useState } from "react";
import FeedBackForm from "../components/feedback/FeedBackForm";
import FeedBackCard from "../components/feedback/FeedBackCard";
import NotFound from "../components/common/NotFound";
const FeedBack = () => {
  const storedComments = localStorage.getItem("comments");
  const initialComments = storedComments ? JSON.parse(storedComments) : [];
  const [comments, setComments] = useState(initialComments);

  const [age, setAge] = useState(20);

  const handleSubmit = useCallback(
    (newComment) => {
      const updatedComments = [...comments, newComment];
      setComments(updatedComments);
      // comments.push(newComment);
      // setComments(JSON.parse(JSON.stringify(comments)));
      // localStorage.setItem("comments", JSON.stringify(comments));
    },
    [comments]
  );

  console.log("main age", age);
  return (
    <div>
      <div className="mt-2 mb-2  ">
        <div>
          <button
            className="mr-2 p-2 bg-black text-white rounded-lg"
            onClick={() => setAge(age + 1)}
          >
            Age
          </button>
        </div>
        <div></div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-12 lg:col-span-4">
          <FeedBackForm handleSubmit={handleSubmit} />
        </div>
        <div className="col-span-12 md:col-span-12 lg:col-span-8">
          {comments.length === 0 ? (
            <NotFound message={"No Comment yet!"} />
          ) : (
            comments.map((cmt, index) => (
              <div key={index}>
                <FeedBackCard comment={cmt} age={age} />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default FeedBack;

// import React, { useCallback, useState } from "react";
// import FeedBackForm from "../components/feedback/FeedBackForm";
// import FeedBackCard from "../components/feedback/FeedBackCard";
// import NotFound from "../components/common/NotFound";
// import Search from "../components/home/Search";

// const FeedBack = () => {
//   const storedComments = localStorage.getItem("comments");
//   const initialComments = storedComments ? JSON.parse(storedComments) : [];
//   const [comments, setComments] = useState(initialComments);
//   const [filterComments, setFilterComments] = useState(initialComments);
//   const [age, setAge] = useState(20);

//   const handleSubmit = useCallback(
//     (newComment) => {
//       const updatedComments = [...comments, newComment];
//       setComments(updatedComments);
//       setFilterComments(updatedComments);
//       localStorage.setItem("comments", JSON.stringify(updatedComments));
//     },
//     [comments]
//   );

//   const handleFilterComments = useCallback(
//     (query) => {
//       if (!query.trim()) {
//         setFilterComments(comments);
//       } else {
//         const filtered = comments.filter((item) =>
//           item.userName.toLowerCase().includes(query.toLowerCase())
//         );
//         setFilterComments(filtered);
//       }
//     },
//     [comments]
//   );

//   console.log("main1", age);

//   return (
//     <div>
//       <div className="mt-2 mb-2">
//         <button
//           className="mr-2 p-2 bg-black text-white rounded-lg"
//           onClick={() => setAge(age + 1)}
//         >
//           Increment Age
//         </button>
//       </div>

//       <div>
//         <Search onSearch={handleFilterComments} />
//       </div>
//       <div className="grid grid-cols-12 gap-6">
//         <div className="col-span-12 md:col-span-12 lg:col-span-4">
//           <FeedBackForm handleSubmit={handleSubmit} />
//         </div>
//         <div className="col-span-12 md:col-span-12 lg:col-span-8">
//           {filterComments.length === 0 ? (
//             <NotFound message={"No Comments Yet!"} />
//           ) : (
//             filterComments.map((cmt, index) => (
//               <div key={index}>
//                 <FeedBackCard comment={cmt} age={age} />
//               </div>
//             ))
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FeedBack;
