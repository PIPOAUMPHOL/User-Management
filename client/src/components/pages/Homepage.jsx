import Header from "../common/Header";
import UserData from "../common/UserDataForHomepage";
import Footer from "../common/FooterForHomepage";

function Homepage() {
  return (
    <div className="w-screen h-screen">
      <Header />
      <UserData />
      <Footer />
    </div>
  );
}

export default Homepage;
