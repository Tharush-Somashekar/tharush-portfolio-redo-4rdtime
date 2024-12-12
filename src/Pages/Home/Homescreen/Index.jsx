import Herosection from "../Herosection";
import Aboutme from "../Aboutme";
import Skills from "../Skills";
import MyPortfolio from "../Myportfolio";
import Footer from "../Footer";

export default function Home() {
    return (
      <>
        <Herosection />
        <Aboutme/>
        <Skills/>
        <MyPortfolio/>
        <Footer/>
      </>
    );
  }