import React ,{ useContext } from "react";
import Valuelelo from "./context";


function Component1() {
    const {count,setCount}= useContext(Valuelelo);

  return (
    <>
      <div>
        <button>
          <button
            onClick={() => setCount(count + 1)}
            className="border-3 px-4 py-2 my-5 rounded-xl"
          >
            Counter {count}
          </button>
        </button>
      </div>
    </>
  );
}

export default Component1;
