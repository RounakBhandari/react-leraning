import React, { useState } from "react";
function Click(props) {
  const times = props.times;
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + times);
  };
  return (
    <div>
      <button onClick={handleClick}>Click Me    {count}</button>
    </div>
  );
}

export default Click;
