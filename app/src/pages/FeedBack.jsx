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
      comments.push(newComment);
      setComments(JSON.parse(JSON.stringify(comments)));
      localStorage.setItem("comments", JSON.stringify(comments));
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
