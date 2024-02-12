import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();

  return (
    <div className="w-11/12 flex flex-row-reverse items-center ml-10 hover:cursor-pointer">
      &gt;
      <p
        onClick={() => {
          navigate("/");
        }}
      >
        &nbsp;6&nbsp;
      </p>
      <p
        onClick={() => {
          navigate("/");
        }}
      >
        &nbsp;5&nbsp;
      </p>
      <p
        onClick={() => {
          navigate("/");
        }}
      >
        &nbsp;4&nbsp;
      </p>
      <p
        onClick={() => {
          navigate("/");
        }}
      >
        &nbsp;3&nbsp;
      </p>
      <p
        onClick={() => {
          navigate("/");
        }}
      >
        &nbsp;2&nbsp;
      </p>
      <p
        onClick={() => {
          navigate("/");
        }}
      >
        &nbsp;1&nbsp;
      </p>
      &lt;
    </div>
  );
}

export default Footer;
