
const Item = () => {
  return (
    <div className="flex flex-wrap gap-4 justify-center w-full mt-10 border px-2 py-5 border-blue-600 rounded-xl">
    <div className='h-65 flex shadow-xl backdrop-blur-3xl items-center justify-center w-full max-w-2xs px-4 py-3 text-center text-white bg-blue-200'>
      <h2>I am Box 1</h2>
    </div>
    <div className='h-65 shadow-xl backdrop-blur-3xl flex items-center justify-center w-full max-w-2xs px-4 py-3 text-center text-white bg-blue-200'>
      <h2>I am Box 2</h2>
    </div>
    <div className='h-65 flex shadow-xl backdrop-blur-3xl items-center justify-center w-full max-w-2xs px-4 py-3 text-center text-white bg-blue-200'>
      <h2>I am Box 3</h2>
    </div>
    <div className='h-65 flex shadow-xl backdrop-blur-3xl items-center justify-center w-full max-w-2xs px-4 py-3 text-center text-white bg-blue-200'>
      <h2>I am Box 4</h2>
    </div>
    </div>
  )
}

export default Item
