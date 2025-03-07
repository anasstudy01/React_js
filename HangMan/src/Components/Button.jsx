import getStyleType from "./getStyleType";

function Button({ text, btnType, btnStyle, onClickHandler }) {
  return (
    <button
      type={btnType}
      onClick={onClickHandler}
      className={`  ${getStyleType(btnStyle)}
        bg-blue-500  border border-blue-700  m-3 px-4 py-2  text-white hover:bg-blue-700e hover:text-white rounded-md transition-all duration-300 ease-in-out `}
    >
      {text}
    </button>
  );
}

export default Button;
