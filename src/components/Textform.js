//rfc

import React,{useState} from "react";

export default function Textform(props) {
  const [text,setText] = useState("enter dhoom 2");

  return (
    
    <div>
      <div className="mb-3">
        <h1>{props.heading}-{text}</h1>
        <textarea className="form-control" id="mybox" rows="18"></textarea>
      </div>
      <button className='btn btn-primary'>Change To UpperCase </button>
    </div>
  );
}
