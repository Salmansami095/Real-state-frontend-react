import NavBar from "./common/Navbar/NavBar.tsx";
import TabBar from "./common/TabBar/TabBar.tsx";
import Cards from "./Components/Cards/Cards.tsx";
import Footer from "./Components/Footer/footer.tsx";
import LoginPage from "./Components/loginPage/LoginPage.tsx";
import SideBar from "./Components/Sidebar/SideBar.tsx";
import Main from "./Components/Sidebar/SideContent.tsx";
function App() {
  return (
    <div>
      {/* <LoginPage/> */}
      <NavBar />
      <TabBar title="Application" />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
