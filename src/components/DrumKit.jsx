function DrumKit() {
  const drumSamples = ['kick', 'hihat', 'snare', 'clap', 'crash'];
  const inputCheckFieldStyle = "h-8 w-8 rounded-full shadow mx-3 my-6  bg-red-100 border-red-300 text-red-500 focus:ring-red-200";
  const n = 8;
  const gridCols = "grid grid-cols-" + n;

  return (
    <div className={gridCols} >

    {[...Array(n)].map((drumSamples, index) => <input
          key={index}
          type="checkbox"
          value="kick"
          className={inputCheckFieldStyle} 
          />
      )}
      </div>
  )
}

export default DrumKit