const Comment = ({ data }) => {
  return (
    <div className="flex shadow-sm p-2 bg-gray-100 rounded-lg w-[650px] my-2">
      <img
        className="w-12 h-12 p-2"
        alt="User"
        src="https://cdn-icons-png.freepik.com/256/456/456212.png"
      />
      <div className="px-3">
        <h1 className="font-bold">{data.name}</h1>
        <h2>{data.text}</h2>
      </div>
    </div>
  );
};

export default Comment;
