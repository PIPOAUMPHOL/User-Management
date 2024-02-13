import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function UserData() {
  const [userData, setUserData] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  async function getUserData() {
    if (search === "") {
      const response = await axios.get("http://localhost:4000/users");
      setUserData(response.data.data);
    }
  }

  useEffect(() => {
    getUserData();
  }, []);

  async function searchUserData(event) {
    event.preventDefault();

    if (search !== "") {
      const response = await axios.get(`http://localhost:4000/users/${search}`);
      setSearchData(response.data.data);
      setSearch("");
    }
  }

  console.log(searchData);
  console.log(search);

  async function deleteUserData(userID) {
    await axios.delete(`http://localhost:4000/users/${userID}`);
    getUserData();
    alert("User has been deleted successfully");
  }

  function handleClick() {
    navigate("/CreateNewUser");
  }

  return (
    <>
      <form className="h-1/12 flex justify-between items-center mt-7">
        <label htmlFor="search" className="text-slate-500 ml-11 text-2xl">
          User Lists
        </label>
        <div className="flex justify-center items-center w-2/4">
          <input
            id="search"
            type="text"
            className="w-3/4 h-14 p-5 border-2 border-slate-400 rounded-xl text-xl"
            onChange={(event) => {
              setSearch(event.target.value);
            }}
            value={search}
            placeholder="Search by First name or Last name"
          />
          <button
            onClick={(event) => {
              searchUserData(event);
            }}
          >
            <img
              className="w-7 h-7 ml-4"
              src="https://cdn.pixabay.com/photo/2021/10/11/00/59/search-6699087_1280.png"
            />
          </button>
        </div>
        <button
          type="submit"
          className="bg-blue-500 w-28 h-11 mr-8 p-1 text-white rounded-lg"
          onClick={handleClick}
        >
          Add +
        </button>
      </form>

      <div className="mt-12 h-4/6 flex flex-col items-center overflow-hidden">
        <div className="w-11/12 h-16 bg-gray-300 flex items-center justify-around">
          <p className="text-lg font-medium ">Profile Picture</p>
          <p className="text-lg font-medium relative right-2 ">First name</p>
          <p className="text-lg font-medium relative right-2 ">Last name</p>
          <p className="text-lg font-medium relative right-1 ">Gender</p>
          <p className="text-lg font-medium relative right-2 ">Birthday</p>
          <p className="text-lg font-medium relative right-5">Action</p>
        </div>

        {searchData[0] === undefined
          ? userData.map((item) => {
              return (
                <div className="mt-5 w-11/12" key={item.id}>
                  <ul className="flex w-full items-center justify-around">
                    <li>
                      <img
                        src={item.image}
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
                        <button
                          className="bg-yellow-400 w-2/5 pl-2 pr-3 h-10 text-white"
                          onClick={() => {
                            navigate(`/EditUserData/${item.id}`);
                          }}
                        >
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
            })
          : searchData.map((item) => {
              return (
                <div className="mt-5 w-11/12" key={item.id}>
                  <ul className="flex w-full items-center justify-around">
                    <li>
                      <img
                        src={item.image}
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
                        <button
                          className="bg-yellow-400 w-2/5 pl-2 pr-3 h-10 text-white"
                          onClick={() => {
                            navigate(`/EditUserData/${item.id}`);
                          }}
                        >
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
    </>
  );
}

export default UserData;
