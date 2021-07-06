import React from "react";

const Comment = ({comment}) => {
//   const comment = props.comment
  //const {comment} = props

  return (
    <div className="comment">
      <div className="avatar">
        <img src={comment.avatar} alt="avatar" />
      </div>
      <div className="content">
        <div className="author">{comment.author}</div>
        <div className="metadata">
          <span className="date">{comment.date.toLocaleDateString()} {comment.date.toLocaleTimeString()}</span>
        </div>
        <div className="text">{comment.comment}</div>
      </div>
    </div>
  );
};

export default Comment;
