function getStyleType(style) {
  const primary = "bg-blue-500  border border-blue-700";
  const secondary = "bg-cyan-500  border border-blue-700";
  const sucess = "bg-green-500  border border-green-700";
  const warning = "bg-orange-500  border border-red-700";
  const error = "bg-red-500  border border-red-700";

  if (style === "primary") {
    return primary;
  } else if (style === "secondary") {
    return secondary;
  } else if (style === "sucess") {
    return sucess;
  } else if (style === "warning") {
    return warning;
  } else {
    return error;
  }
}

export default getStyleType;
