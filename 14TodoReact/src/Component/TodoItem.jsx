function TodoItem({ text, iscompleted }) {
  return (
    <>
      <div className=" flex gap-4 my-4 mx-2">
        <input type="checkbox" checked={iscompleted} />
        <p>{text}</p>
        <button className="bg-red-500 text-white px-2 py-1 rounded-xl">
          Delete
        </button>
      </div>
    </>
  );
}

export default TodoItem;
