import { useNavigate } from "react-router-dom";

function UserList() {
  const navigate = useNavigate();

  function handleSubmit() {
    navigate("/CreateNewUser");
  }

  return (
    <form
      className="h-1/12 flex justify-between items-center mt-5"
      onSubmit={handleSubmit}
    >
      <label htmlFor="search" className="text-slate-500 ml-11 text-2xl">
        User Lists
      </label>
      <div className="flex justify-center items-center w-2/4">
        <input
          id="search"
          type="text"
          className="w-3/4 h-14 p-5 border-2 border-slate-400 rounded-xl text-xl"
          placeholder="Search"
        />
        <button>
          <img
            className="w-7 h-7 ml-4"
            src="https://cdn.pixabay.com/photo/2021/10/11/00/59/search-6699087_1280.png"
          />
        </button>
      </div>
      <button
        type="submit"
        className="bg-blue-500 w-28 h-11 mr-8 p-1 text-white rounded-lg"
      >
        Add +
      </button>
    </form>
  );
}

export default UserList;
