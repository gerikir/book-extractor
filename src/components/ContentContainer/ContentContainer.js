import React from "react";

const ContentContainer = ({ children }) => {
  return (
    <div className="mx-auto px-[24px] text-textBlack lg:max-w-[1200px] xl:px-0">
      {children}
    </div>
  );
};

export default ContentContainer;
