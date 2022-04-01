import React from "react";

function TextImage(props) {
  return (
    <div className="border border-white rounded-full flex items-center justify-center space-x-1 px-3">
      {props.t}
      <img src={props?.pic} alt="" />
    </div>
  );
}

export default TextImage;
