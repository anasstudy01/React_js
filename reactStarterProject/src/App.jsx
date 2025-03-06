import ChildrenPropDemo from "./ChildrenPropDemo";
import CustomComponent from "./CustomComponet";

function App() {
  return (
    <div>
      <h2 className="m-3">hellow react developers</h2>
      <ChildrenPropDemo>
      <CustomComponent />{" "}
        </ChildrenPropDemo>
    </div>
  );
}
export default App;
