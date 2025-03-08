function getStyleType(btnStyle) {
  const primary = "bg-blue-500  border border-blue-700";
  const secondary = "bg-yellow-400  border border-blue-700";
  const sucess = "bg-green-500  border border-green-700";
  // const warning = "bg-orange-500  border border-red-700";
  const error = "bg-red-500  border border-red-700";

  if (btnStyle === "primary") {
    return primary;
  } else if (btnStyle === "secondary") {
    return secondary;
  } else if (btnStyle === "sucess") {
    return sucess;
  } else if (btnStyle === "error") {
    return error;
  } else {
    return error;
  }
}

export default getStyleType;
