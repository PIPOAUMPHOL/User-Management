import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/");
  }

  return (
    <div className="bg-blue-500 w-full h-1/12 p-3 flex justify-between">
      <button className="text-white ml-8 text-2xl" onClick={handleClick}>
        User Management
      </button>
      <button className="mr-4 flex justify-center items-center text-2xl bg-white text-slate-500 w-9 h-9   rounded-full">
        D
      </button>
    </div>
  );
}

export default Header;
