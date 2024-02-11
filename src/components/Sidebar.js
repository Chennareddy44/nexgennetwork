const Sidebar = () => {
  return (
    <div className="col-span-1 font-bold shadow-lg my-1">
      <ul className="ml-3">
        <li className="my-3">🏡 Home</li>
        <li className="my-8 ">🩳 Shorts</li>
        <li className="my-8 ">💵 Subscriptions</li>
        <li className="my-8 ">🧑‍🍼 You</li>
        <li className="my-8">📗 History</li>
      </ul>
      <ul className="ml-3">
        <li className="my-8">💹 Trending</li>
        <li className="my-8">👀 Watch Later</li>
        <li className="my-8">👍🏼 Liked</li>
        <li className="my-8">📐 Settings</li>
      </ul>
    </div>
  );
};

export default Sidebar;
