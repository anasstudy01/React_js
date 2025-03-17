 function ChildPropDemo({name,children}) {
    return (
<>
      <div className="ChildPropDemo bg-red-500 text-white p-4 rounded-md flex gap-2 w-full max-w-md mx-auto mt-4">
        <div className=" p-4 overflow-hidden border-2 border-white rounded-md">

        <h1>Child Prop Demo</h1>
        <p>This is a child component</p>
        <p>The parent component passed me a prop called {name}</p>
        </div>

        {children}
      </div>
</>        
    )
}


export default ChildPropDemo;
