export function ChildrenPropDemo({children}){


    return(
        <>
        <div className='border-2 border-black p-4 w-full flex justify-center gap-3'>
            <div className="border-2  "><h1 className='text-3xl font-semibold'> Default inbuiled Demo</h1>
            <p className='text-lg font-semibold'>This is a demo of children prop in React</p>
            <p className='text-lg font-semibold'>This is a demo of children prop in React</p></div>
            
            {children }
        </div>
        </>
    )

}