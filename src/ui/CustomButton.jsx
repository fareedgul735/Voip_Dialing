

export const CustomButton = ({
  className = "",
  icon,
  value,
  onClick,
  htmlType,
  size,
  style,
}) => {
  return (
    <button
      type="text"
      htmlType={htmlType}
      onClick={onClick}
      className={`${className}`}
      size={size}
      style={style}
    >
      {icon}
      {value}
    </button>
  );
};

const outlinedButtonStyles = `
  !flex !items-center !justify-center !gap-2
  !px-6 !py-3 !rounded-full
  !font-semibold !text-base
  !border !border-sky-400
  !text-sky-700
  hover:!bg-blue-50
  !transition-all !duration-200 !ease-in-out
`;

export const CustomButtonTwin = ({
  className = "",
  icon,
  value,
  onClick,
  htmlType,
}) => {
  return (
    <button
      type="text"
      htmlType={htmlType}
      onClick={onClick}
      className={`${outlinedButtonStyles} ${className}`}
    >
      {icon}
      {value}
    </button>
  );
};
