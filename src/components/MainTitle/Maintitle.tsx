import React from "react";

interface MainTitleProps {
  title: string;
  classname?: string;
}

const MainTitle: React.FC<MainTitleProps> = ({ title,classname }) => {
  return (
    <>
      <h1
        style={{ fontFamily: "NolanNextBold" }}
        className={`${classname} text-[28px] md:text-4xl lg:text-[40px] font-bold leading-tight`}
      >
        {title}
      </h1>
    </>
  );
};

export default MainTitle;
