function UserData() {
  return (
    <div className="mt-12 h-4/6 flex flex-col items-center overflow-hidden">
      <div className="w-11/12 h-16 bg-gray-300 flex items-center justify-around">
        <p className="text-lg font-medium ">Profile Picture</p>
        <p className="text-lg font-medium relative right-2 ">First name</p>
        <p className="text-lg font-medium relative right-2 ">Last name</p>
        <p className="text-lg font-medium relative right-1 ">Gender</p>
        <p className="text-lg font-medium relative right-2 ">Birthday</p>
        <p className="text-lg font-medium relative right-5">Action</p>
      </div>
      <div className="mt-5 w-11/12">
        <ul className="flex w-full items-center justify-around">
          <li>
            <img
              src="https://cdn.pixabay.com/photo/2012/04/14/17/20/bird-34663_640.png"
              className="w-16 h-16 rounded-full object-cover relative left-14 "
            />
          </li>
          <li>
            <p className="text-lg  w-36 relative left-28 ">Aumphol</p>
          </li>
          <li>
            <p className="text-lg  w-40 relative left-24">Kao-ian</p>
          </li>
          <li>
            <p className="text-lg  w-16 relative left-16 ">Female</p>
          </li>
          <li>
            <p className="text-lg  w-24 relative left-24 ">10/06/1995</p>
          </li>
          <li>
            <div className="text-lg  w-48 flex justify-evenly relative left-10">
              <button className="bg-yellow-400 w-2/5 pl-2 pr-3 h-10 text-white">
                Edit
              </button>
              <button className="bg-red-500 w-2/5 pl-2 pr-3 h-10 text-white">
                Delete
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default UserData;
