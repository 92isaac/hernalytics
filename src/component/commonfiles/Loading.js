import React from "react";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-40">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-4 border-red-900"></div>
    </div>
  );
};

export default Loading;
