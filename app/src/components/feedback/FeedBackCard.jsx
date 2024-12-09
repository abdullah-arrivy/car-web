import React, { memo } from "react";

const FeedBackCard = ({ comment, age }) => {
  console.log("feed back card", age);
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

const areEqual = (prevProps, nextProps) => {
  return (
    prevProps.comment.userName === nextProps.comment.userName &&
    prevProps.comment.emailAddress === nextProps.comment.emailAddress &&
    prevProps.comment.messageText === nextProps.comment.messageText
  );
};

export default memo(FeedBackCard, areEqual);
