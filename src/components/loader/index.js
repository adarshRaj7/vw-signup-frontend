import React, { useState, useEffect } from "react";
import { SunspotLoader } from "react-awesome-loaders";

// const Loader = () => {
//   const [isLoading, setIsLoading] = useState(true);

//   if (isLoading) {
//     return <div>Loading...</div>;
//   } else {
//     return null;
//   }
// };

// export default Loader;

export const Loader = () => {
  return (
    <>
      <SunspotLoader
        gradientColors={["#6366F1", "#E0E7FF"]}
        shadowColor={"#3730A3"}
        desktopSize={"128px"}
        mobileSize={"100px"}
      />
    </>
  );
};
