import { useMemo } from "react";

const Property1Secondary = ({
  itemCode,
  buttonText,
  property1SecondaryHeight,
  property1SecondaryPadding,
  property1SecondaryGap,
  iconGoogleOriginalWidth,
  iconGoogleOriginalHeight,
  loginNowFontSize,
}) => {
  const property1SecondaryStyle = useMemo(() => {
    return {
      height: property1SecondaryHeight,
      padding: property1SecondaryPadding,
      gap: property1SecondaryGap,
    };
  }, [
    property1SecondaryHeight,
    property1SecondaryPadding,
    property1SecondaryGap,
  ]);

  const iconGoogleOriginalStyle = useMemo(() => {
    return {
      width: iconGoogleOriginalWidth,
      height: iconGoogleOriginalHeight,
    };
  }, [iconGoogleOriginalWidth, iconGoogleOriginalHeight]);

  const loginNow1Style = useMemo(() => {
    return {
      fontSize: loginNowFontSize,
    };
  }, [loginNowFontSize]);

  return (
    <div
      className="relative rounded-lg bg-primary-weak w-[352px] h-12 flex flex-row p-4 box-border items-center justify-center gap-[8px] text-left text-base text-primary font-body-large-semibold"
      style={property1SecondaryStyle}
    >
      <img
        className="relative w-5 h-5 overflow-hidden shrink-0 object-cover"
        alt=""
        src={itemCode}
        style={iconGoogleOriginalStyle}
      />
      <div
        className="relative leading-[100%] font-semibold"
        style={loginNow1Style}
      >
        {buttonText}
      </div>
    </div>
  );
};

export default Property1Secondary;
