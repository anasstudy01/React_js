import getButtonStyling from "./buttonStyling";

function CreateButton({ text, buttonType, styletype, onClick }) {
  return (
    <button
      type={buttonType}
      className={`h-10 my-8 ${getButtonStyling(styletype)}`}
      onClick={onClick} // Add this line to handle click events
    >
      {text}
    </button>
  );
}

export default CreateButton;