import Header from "../common/Header";
import UserList from "../common/UserListForHomepage";
import UserData from "../common/UserDataForHomepage";
import Footer from "../common/FooterForHomepage";

function Homepage() {
  return (
    <div className="w-screen h-screen">
      <Header />
      <UserList />
      <UserData />
      <Footer />
    </div>
  );
}

export default Homepage;
