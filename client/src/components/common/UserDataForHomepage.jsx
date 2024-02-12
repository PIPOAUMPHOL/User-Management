import { useEffect, useState } from "react";
import axios from "axios";

function UserData() {
  const [userData, setUserData] = useState();

  async function getUserData() {
    const response = await axios.get("http://localhost:4000/users");
    setUserData(response.data.data);
  }

  useEffect(() => {
    getUserData();
  }, []);

  async function deleteUserData(userID) {
    await axios.delete(`http://localhost:4000/users/${userID}`);
    getUserData();
  }

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

      {userData &&
        userData.map((item) => {
          return (
            <div className="mt-5 w-11/12" key={item.id}>
              <ul className="flex w-full items-center justify-around">
                <li>
                  <img
                    src="https://cdn.pixabay.com/photo/2012/04/14/17/20/bird-34663_640.png"
                    className="w-16 h-16 rounded-full object-cover relative left-14 "
                  />
                </li>
                <li>
                  <p className="text-lg  w-36 relative left-28 ">
                    {item.firstname}
                  </p>
                </li>
                <li>
                  <p className="text-lg  w-40 relative left-24">
                    {item.lastname}
                  </p>
                </li>
                <li>
                  <p className="text-lg  w-16 relative left-16 ">
                    {item.gender}
                  </p>
                </li>
                <li>
                  <p className="text-lg  w-24 relative left-24 ">
                    {item.birthdate}
                  </p>
                </li>
                <li>
                  <div className="text-lg  w-48 flex justify-evenly relative left-10">
                    <button className="bg-yellow-400 w-2/5 pl-2 pr-3 h-10 text-white">
                      Edit
                    </button>
                    <button
                      className="bg-red-500 w-2/5 pl-2 pr-3 h-10 text-white"
                      onClick={() => {
                        deleteUserData(item.id);
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </li>
              </ul>
            </div>
          );
        })}
    </div>
  );
}

export default UserData;
