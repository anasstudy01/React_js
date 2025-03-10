import { Children } from "react";

function ChildrenPropDemo({children}) {

    return (
        <div>
        
           <h1>
            children Prop Demo
           </h1>
           {children}
        </div>
    )
}

export default ChildrenPropDemo;