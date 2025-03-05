import getButtonStyling from "./buttonStyling";
function CreateButton({ text, buttonType ,styletype}) {

  return (
    <button
      type={buttonType}
      className={`mx-3 ${getButtonStyling(styletype)}`}
    >
      {text}
    </button>
  );
}

export default CreateButton;
