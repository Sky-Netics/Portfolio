import React from "react";
import Image from "next/image";
import logoPng from "../../../public/images/logo-transparent-png.png";
import logoPng2 from '../../../public/images/logo-transparent-png2.png';

const Logo = () => {
  return (
    <div className="grid md:grid-cols-2 max-w-4xl mx-auto my-15 gap-8 p-4">
      <Image
        src={logoPng}
        alt="sky netics Logo"
        width={900}
        height={900}
        className="  h-auto object-contain"
      />
      <Image
        src={logoPng2}
        alt="sky netics Logo"
        width={900}
        height={900}
        className="  h-auto object-contain"
      />

    </div>
  );
};

export default Logo;
