const Loading = () => {
  return (
    <div className="flex gap-1 mt-2">
      <div className="w-3 h-3 rounded-full animate-pulse bg-[#202123]"></div>
      <div className="w-3 h-3 rounded-full animate-pulse bg-[#00897B]"></div>
      <div className="w-3 h-3 rounded-full animate-pulse bg-[#4C86DD]"></div>
    </div>
  );
};

export default Loading;
