function UserDataForCreateNewUser() {
  return (
    <>
      <div className="h-4/6 flex pt-5 pl-10 pr-10 overflow-hidden">
        <div className="mt-5 w-1/4 h-16 flex flex-col items-center">
          <img
            src="https://cdn.pixabay.com/photo/2012/04/14/17/20/bird-34663_640.png"
            className="w-72 h-72 object-cover rounded-full border-gray-300 border-2"
          />
          <form id="user-image" className="mt-6 flex flex-col items-center">
            <label
              htmlFor="upload"
              className="hover:cursor-pointer bg-blue-500 text-white p-3 rounded-lg"
            >
              Upload Profile Picture
              <input id="upload" type="file" hidden />
            </label>

            <button className="hover:cursor-pointer bg-red-600 text-white p-3 rounded-lg mt-4 ">
              Delete Picture
            </button>
          </form>
        </div>
        <div className="mt-5 w-3/4 h-full  flex  items-center justify-center  ">
          <div className=" w-full h-56 ml-10">
            <label htmlFor="firstname" className="text-gray-500 text-xl ">
              First Name
            </label>
            <br />
            <input
              id="firstname"
              type="text"
              className="text-xl w-4/5 h-16 border-gray-300 border-2 rounded-xl mt-2 p-5 mb-10"
              placeholder="Please enter First name"
            />
            <br />
            <label htmlFor="gender" className="text-gray-500 text-xl">
              Gender
            </label>
            <br />
            <select
              id="gender"
              className="text-xl text-gray-400 w-4/5 h-16 border-gray-300 border-2 rounded-xl mt-2 pl-5"
            >
              <option value="" disabled selected hidden>
                -- Please select Gender --
              </option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <div className=" w-full h-56">
            <div className=" w-full h-56 ">
              <label htmlFor="firstname" className="text-gray-500 text-xl ">
                Last Name
              </label>
              <br />
              <input
                id="firstname"
                type="text"
                className="text-xl w-4/5 h-16 border-gray-300 border-2 rounded-xl mt-2 p-5 mb-10"
                placeholder="Please enter Last name"
              />
              <br />
              <label htmlFor="gender" className="text-gray-500 text-xl">
                Birthday
              </label>
              <br />
              <input
                id="firstname"
                type="date"
                className="text-xl w-4/5 h-16 border-gray-300 border-2 rounded-xl mt-2 p-5 mb-10 text-gray-400"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="h-24 flex justify-end items-center pr-40">
        <button className="bg-neutral-500 w-36 h-10 rounded-lg text-xl text-white">
          Cancel
        </button>
        <button className="bg-green-600 w-36 h-10 rounded-lg text-xl text-white ml-5">
          Save
        </button>
      </div>
    </>
  );
}

export default UserDataForCreateNewUser;
