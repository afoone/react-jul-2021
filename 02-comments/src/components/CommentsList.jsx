import React from "react";
import Comment from "./Comment";

const CommentsList = (props) => {
  //props.comments [] array de comentarios
  console.log("props", props);

  return (
    <div className="comments-list">
      <div className="ui comments">
        <h3 className="ui dividing header">Comments</h3>

        {props.comments.map((i) => (
          <Comment comment={i} />
        ))}
      </div>
    </div>
  );
};

export default CommentsList;
