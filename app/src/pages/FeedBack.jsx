import React, { useCallback, useState } from "react";
import FeedBackForm from "../components/feedback/FeedBackForm";
import FeedBackCard from "../components/feedback/FeedBackCard";
import NotFound from "../components/common/NotFound";

const FeedBack = () => {
  const storedComments = localStorage.getItem("comments");
  const initialComments = storedComments ? JSON.parse(storedComments) : [];
  const [comments, setComments] = useState(initialComments);

  const handleSubmit = useCallback(
    (newComment) => {
      const updatedComments = [...comments, newComment];
      setComments(updatedComments);
      localStorage.setItem("comments", JSON.stringify(updatedComments));
    },
    [comments]
  );


  return (
    <div>
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-12 lg:col-span-4">
          <FeedBackForm handleSubmit={handleSubmit} />
        </div>
        <div className="col-span-12 md:col-span-12 lg:col-span-8">
          {comments.length === 0 ? (
            <NotFound message={"No Comment yet!"} />
          ) : (
            comments.map((cmt, index) => (
              <div key={index} >
                <FeedBackCard comment={cmt} />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default FeedBack;
