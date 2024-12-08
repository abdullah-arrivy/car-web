import React, { memo } from "react";

const FeedBackCard = ({ comment }) => {
  console.log("feed back card");
  return (
    <div className="bg-white p-6 rounded-lg border  border-black/10 mb-2 ">
      <div className="bg-gray-100 p-4 rounded-lg shadow-sm mb-4 hover:bg-gray-200">
        <h4 className="text-xl font-bold text-blue-600">{comment.userName}</h4>
        <p className="text-sm text-gray-500">{comment.emailAddress}</p>
        <p className="mt-2 text-gray-700">{comment.messageText}</p>
      </div>
    </div>
  );
};

export default memo(FeedBackCard);

// import React, { memo } from "react";
// import NotFound from "../common/NotFound";

// const FeedBackCard = ({ comments }) => {
//   console.log("card comments");

//   return (
//     <div className="bg-white p-6 rounded-lg shadow-lg">
//       <h3 className="text-2xl font-semibold mb-4">Comments</h3>
//       {comments.length === 0 ? (
//         <NotFound message={'No comment yet !'}/>
//       ) : (
//         comments.map((comment, index) => (
//           <div
//             key={index}
//             className="bg-gray-100 p-4 rounded-lg shadow-sm mb-4 hover:bg-gray-200"
//           >
//             <h4 className="text-xl font-bold text-blue-600">{comment.userName}</h4>
//             <p className="text-sm text-gray-500">{comment.emailAddress}</p>
//             <p className="mt-2 text-gray-700">{comment.messageText}</p>
//           </div>
//         ))
//       )}
//     </div>
//   );
// };

// export default memo(FeedBackCard);
