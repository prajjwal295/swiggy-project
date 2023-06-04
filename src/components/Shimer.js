import React from "react";

const Shimer = () => {
  return (
    <div className="shimer flex flex-wrap h-[79vh]">
      {Array(10)
        .fill("")
        .map((e, index) => (
          <div className="shimer-body  bg-slate-200 h-[250px] w-[200px] m-5" key={index}></div>
        ))}
    </div>
  );
};

export default Shimer;
