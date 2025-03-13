

export default function Card({title,description}) {
    return(<>
        <div className="max-w-xs p-6 rounded-md  mt-15 mx-2 shadow-md bg-black  " >
        <img
          src="https://images.unsplash.com/photo-1741471884167-a2b08fb14a3e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8"
          alt=""
          className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
        />
        <div className="mt-6 mb-2">
          <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
            {title}
          </span>
          <h2 className="text-xl font-semibold tracking-wide">Lorem ipsum dolor</h2>
        </div>
        <p className="text-gray-300">
          {description}
        </p>
      </div>
    </>)
    
}
 