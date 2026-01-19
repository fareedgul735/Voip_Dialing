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
      className={`${className}`}
    >
      {icon}
      {value}
    </button>
  );
};
