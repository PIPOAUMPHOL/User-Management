import Header from "../common/Header";
import CreateNewUser from "../common/CreateNewUser";
import UserDataForCreateNewUser from "../common/UserDataForCreateNewUser";

function CreateNewUserPage() {
  return (
    <div className="w-screen h-screen">
      <Header />
      <CreateNewUser />
      <UserDataForCreateNewUser />
    </div>
  );
}

export default CreateNewUserPage;
