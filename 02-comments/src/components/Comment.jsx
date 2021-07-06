import React from "react";

const Comment = (props) => {
  // props.comment

  return (
    <div className="comment">
      <div className="avatar">
        <img src="https://semantic-ui.com/images/avatar/small/matt.jpg" alt="avatar" />
      </div>
      <div className="content">
        <div className="author" href="#">Matt</div>
        <div className="metadata">
          <span className="date">Today at 5:42PM</span>
        </div>
        <div className="text">{props.comment.comment}</div>
      </div>
    </div>
  );
};

export default Comment;
