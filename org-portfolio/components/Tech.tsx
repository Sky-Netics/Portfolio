"use client"

const TechnologyGrid = () => {
  return (
    <div className="max-h-screen bg-black text-white flex items-center justify-center overflow-hidden pb-8 md:pb-20 px-2  md:px-4">
      <div className="grid grid-cols-2 gap-2 md:gap-8 w-full max-w-[700px] md:max-w-[1400px] h-[300px] md:h-[600px]">
        <div className="relative border-r border-b border-red-500 rounded-lg h-full flex flex-col">
          <div className="relative border-r border-b border-blue-500 rounded-lg m-1 md:m-4 flex-1 mb-6 md:mb-16">
            <h2 className="text-xs md:text-xl font-bold absolute bottom-1 md:bottom-4 right-1 md:right-4">
              BLOCKCHAIN
            </h2>
          </div>
          <div className="absolute bottom-1 md:bottom-4 right-1 md:right-4">
            <h2 className="text-xs md:text-xl font-bold">DEVOPS</h2>
          </div>
        </div>

        <div className="relative border-l border-b border-yellow-500 rounded-lg h-[85%] flex flex-col">
          <div className="relative border-l border-b border-green-400 rounded-lg m-1 md:m-4 flex-1 mb-8 md:mb-20">
            <h2 className="text-xs md:text-xl font-bold absolute bottom-1 md:bottom-4 left-1 md:left-4">BIG DATA</h2>
          </div>
          <div className="absolute bottom-1 md:bottom-4 left-1 md:left-4">
            <h2 className="text-xs md:text-xl font-bold">IOT</h2>
          </div>
          <div className="absolute -bottom-15 md:-bottom-32 right-2 md:right-4 text-right text-sm md:text-3xl font-serif italic">
            <p>Wonderful!!</p>
            <p>Isn't it?</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TechnologyGrid;
