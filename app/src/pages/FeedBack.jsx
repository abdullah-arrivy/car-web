import React, { useState, useEffect, useCallback } from "react";
import FeedBackForm from "../components/feedback/FeedBackForm";
import FeedBackCard from "../components/feedback/FeedBackCard";

const FeedBack = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const storedComments = localStorage.getItem("comments");
    if (storedComments) {
      setComments(JSON.parse(storedComments));
    }
  }, []);

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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <FeedBackForm handleSubmit={handleSubmit} />
        </div>
        <div>
          <FeedBackCard comments={comments} />
        </div>
      </div>
    </div>
  );
};

export default FeedBack;
