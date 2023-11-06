import { useMemo } from "react";

const Property1Default = ({
  context = "Context",
  icon = true,
  property1DefaultFlexDirection,
  property1DefaultAlignSelf,
  property1DefaultHeight,
  inputTextBorder,
  inputTextFlex,
  inputTextPadding,
  inputTextGap,
  contextColor,
  contextFontSize,
  iconeyeWidth,
  iconeyeHeight,
}) => {
  const property1DefaultStyle = useMemo(() => {
    return {
      flexDirection: property1DefaultFlexDirection,
      alignSelf: property1DefaultAlignSelf,
      height: property1DefaultHeight,
    };
  }, [
    property1DefaultFlexDirection,
    property1DefaultAlignSelf,
    property1DefaultHeight,
  ]);

  const inputTextStyle = useMemo(() => {
    return {
      border: inputTextBorder,
      flex: inputTextFlex,
      padding: inputTextPadding,
      gap: inputTextGap,
    };
  }, [inputTextBorder, inputTextFlex, inputTextPadding, inputTextGap]);

  const contextStyle = useMemo(() => {
    return {
      color: contextColor,
      fontSize: contextFontSize,
    };
  }, [contextColor, contextFontSize]);

  const iconeyeStyle = useMemo(() => {
    return {
      width: iconeyeWidth,
      height: iconeyeHeight,
    };
  }, [iconeyeWidth, iconeyeHeight]);

  return (
    <div
      className="relative flex flex-col items-start justify-start text-left text-sm text-text-tertiary font-body-large-semibold"
      style={property1DefaultStyle}
    >
      <div
        className="self-stretch rounded-lg flex flex-row py-3 px-4 items-center justify-start gap-[5px] border-[1px] border-solid border-text-tertiary"
        style={inputTextStyle}
      >
        <div className="flex-1 relative leading-[100%]" style={contextStyle}>
          {context}
        </div>
        <div className="flex flex-row items-center justify-end">
          {icon && (
            <img
              className="relative w-6 h-6 object-cover"
              alt=""
              src="/iconeye.png"
              style={iconeyeStyle}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Property1Default;
