import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "../common/Header";
import { useParams } from "react-router-dom";

function EditUserData() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [gender, setGender] = useState("");
  const [birthdate, setBirthDate] = useState("");

  const [imageURL, setImageURL] = useState([]);

  const navigate = useNavigate();
  const { id } = useParams();

  /* let userData = {
    firstname: firstname,
    lastname: lastname,
    gender: gender,
    birthdate: birthdate,
    image: imageURL,
  }; */

  function handleFileChange(event) {
    const files = event.target.files;

    if (files.length > 0) {
      const newImageURL = Array.from(files).map((file) =>
        URL.createObjectURL(file)
      );
      setImageURL(newImageURL);
    }
  }

  async function createUserData() {
    if (
      firstname !== "" &&
      lastname !== "" &&
      gender !== "" &&
      birthdate !== "" &&
      imageURL.length > 0
    ) {
      const response = await axios.put(
        `https://user-management-server-30d4.onrender.com/users/${id}`,
        {
          firstname,
          lastname,
          gender,
          birthdate,
          image: imageURL,
        }
      );
      alert("User has been updated successfully");
      setFirstname("");
      setLastname("");
      setGender("");
      setBirthDate("");
      setImageURL([]);
      navigate("/");
    } else {
      alert("Please fill your information");
    }
  }

  function cancelCreateUserData() {
    setFirstname("");
    setLastname("");
    setGender("");
    setBirthDate("");
    setImageURL([]);
  }

  function deleteImage() {
    setImageURL([]);
  }

  return (
    <>
      <div className="w-screen h-screen">
        <Header />
        <div className="h-1/12 flex justify-between items-center mt-7">
          <label className="text-slate-500 ml-11 text-2xl">
            Edit User Data
          </label>
        </div>
        <div className="h-4/6 flex pt-5 pl-10 pr-10 overflow-hidden">
          <div className="mt-5 w-1/4 h-full flex flex-col items-center ">
            <div className="w-72 h-72">
              <img
                src={imageURL}
                className="w-full h-full object-cover rounded-full border-gray-300 border-2"
              />
            </div>

            <div id="user-image" className="mt-6 flex flex-col items-center">
              <label
                htmlFor="upload"
                className="hover:cursor-pointer bg-blue-500 text-white p-3 rounded-lg"
              >
                Upload Profile Picture
                <input
                  id="upload"
                  type="file"
                  hidden
                  accept="image/*"
                  onChange={handleFileChange}
                />
              </label>

              <button
                className="hover:cursor-pointer bg-red-600 text-white p-3 rounded-lg mt-4 "
                onClick={deleteImage}
              >
                Delete Picture
              </button>
            </div>
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
                onChange={(event) => {
                  setFirstname(event.target.value);
                }}
                value={firstname}
              />
              <br />
              <label htmlFor="gender" className="text-gray-500 text-xl">
                Gender
              </label>
              <br />
              <select
                id="gender"
                className="text-xl text-gray-400 w-4/5 h-16 border-gray-300 border-2 rounded-xl mt-2 pl-5"
                onChange={(event) => {
                  setGender(event.target.value);
                }}
                value={gender}
              >
                <option value="" disabled hidden>
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
                  id="lastname"
                  type="text"
                  className="text-xl w-4/5 h-16 border-gray-300 border-2 rounded-xl mt-2 p-5 mb-10"
                  placeholder="Please enter Last name"
                  onChange={(event) => {
                    setLastname(event.target.value);
                  }}
                  value={lastname}
                />
                <br />
                <label htmlFor="gender" className="text-gray-500 text-xl">
                  Birthday
                </label>
                <br />
                <input
                  id="birthday"
                  type="date"
                  className="text-xl w-4/5 h-16 border-gray-300 border-2 rounded-xl mt-2 p-5 mb-10 text-gray-400"
                  onChange={(event) => {
                    setBirthDate(event.target.value);
                  }}
                  value={birthdate}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="h-24 flex justify-end items-center pr-36">
          <button
            className="bg-neutral-500 w-36 h-10 rounded-lg text-xl text-white"
            onClick={cancelCreateUserData}
          >
            Cancel
          </button>
          <button
            className="bg-green-600 w-36 h-10 rounded-lg text-xl text-white ml-5"
            onClick={() => {
              createUserData();
            }}
          >
            Save
          </button>
        </div>
      </div>
    </>
  );
}

export default EditUserData;
