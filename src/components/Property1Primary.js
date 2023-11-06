import { useMemo } from "react";

const Property1Primary = ({
  buttonText,
  property1PrimaryHeight,
  property1PrimaryPadding,
  loginNowFontSize,
}) => {
  const property1PrimaryStyle = useMemo(() => {
    return {
      height: property1PrimaryHeight,
      padding: property1PrimaryPadding,
    };
  }, [property1PrimaryHeight, property1PrimaryPadding]);

  const loginNowStyle = useMemo(() => {
    return {
      fontSize: loginNowFontSize,
    };
  }, [loginNowFontSize]);

  return (
    <div
      className="relative rounded-lg bg-primary w-[352px] h-12 flex flex-row p-4 box-border items-center justify-center text-left text-base text-default-white font-body-large-semibold"
      style={property1PrimaryStyle}
    >
      <div
        className="relative leading-[100%] font-semibold"
        style={loginNowStyle}
      >
        {buttonText}
      </div>
    </div>
  );
};

export default Property1Primary;
