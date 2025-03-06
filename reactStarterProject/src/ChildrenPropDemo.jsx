function ChildrenPropDemo(props) {
  return (
    <div>
      <h1>Children Prop Demo</h1>
      {props.children}
    </div>
  );
}
export default ChildrenPropDemo;