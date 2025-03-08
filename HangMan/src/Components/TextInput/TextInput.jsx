function TextInput({ label, type = "text", value, onChange }) {
  return (
    <label >
    {label && <span className="text-gray-700">{label}</span>}
      <input
        className="border-2 border-gray-500 w-full p-2 rounded-lg"
        type={type}
        placeholder={label}
        value={value}
        onChange={onChange}
      />
    </label>
  );
}

export default TextInput;
