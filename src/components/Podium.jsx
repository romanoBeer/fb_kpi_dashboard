function Podium({ podium }) {
  return (
    <div className="flex flex-row justify-evenly items-center h-full">
      <div>
        <div className="avatar">
          <div className="w-60 rounded-full border-4 border-amber-300">
            <img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
          </div>
          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex gap-1 bg-amber-400 text-white text-sm font-bold px-3 py-1.5 rounded-full">
            <span>1</span>
          </div>
        </div>
        <div>
          <p className="mt-4 text-lg text-center">Karen Castillo</p>
          <p className="text-4xl font-bold text-center">80</p>
        </div>
      </div>

      <div>
        <div className="avatar">
          <div className="w-60 rounded-full border-4 border-gray-400">
            <img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
          </div>
          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex gap-1 bg-gray-400 text-white text-sm font-bold px-3 py-1.5 rounded-full">
            <span>2</span>
          </div>
        </div>
        <div>
          <p className="mt-4 text-lg text-center">Karen Castillo</p>
          <p className="text-4xl font-bold text-center">80</p>
        </div>
      </div>

      <div>
        <div className="avatar">
          <div className="w-60 rounded-full border-4 border-amber-600">
            <img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
          </div>
          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex gap-1 bg-amber-600 text-white text-sm font-bold px-3 py-1.5 rounded-full">
            <span>3</span>
          </div>
        </div>
        <div>
          <p className="mt-4 text-lg text-center">Karen Castillo</p>
          <p className="text-4xl font-bold text-center">80</p>
        </div>
      </div>
    </div>
  );
}

export default Podium;
