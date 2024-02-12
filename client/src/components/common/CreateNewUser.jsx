import { useNavigate } from "react-router-dom";

function CreateNewUser() {
  const navigate = useNavigate();

  function handleSubmit() {
    navigate("/CreateNewUser");
  }

  return (
    <form
      className="h-1/12 flex justify-between items-center mt-7"
      onSubmit={handleSubmit}
    >
      <label className="text-slate-500 ml-11 text-2xl">Create new User</label>
      <button
        type="submit"
        className="bg-blue-500 w-28 h-11 mr-8 p-1 text-white rounded-lg"
      >
        Add +
      </button>
    </form>
  );
}

export default CreateNewUser;
