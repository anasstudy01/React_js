import getButtonStyling from "./buttonStyling";
function CreateButton({ text, buttonType ,styletype}) {

  return (
    <button
      type={buttonType}
      className={` h-10 my-8 ${getButtonStyling(styletype)}`}
    >
      {text}
    </button>
  );
}

export default CreateButton;
