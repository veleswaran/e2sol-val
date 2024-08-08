import ServiceSection from "../components/Elements/ServiceSection";
import TerminalSection from "../components/Elements/TerminalSection";
import IndustrySections from "../components/Elements/IndustrySections";
import OurProject from "../components/Elements/OurProject";
import Information from "../components/Elements/Information";
import OurTeam from "../components/Elements/OurTeam";
import Footer from "../components/Elements/Footer";
import BlogSection from "../components/Elements/BlogSection";
import StatisticsMap from "../components/Elements/StatisticsMap";
import LatestNewsSection from "../components/Elements/LatestNewsSection";
import Header1 from "../components/Elements/Header/Header1";
import Slider from "../components/Elements/Slider";
import Carousel from "../components/Elements/Carousel";

const home = () => {
 
  return (
    <>
     <div id="canvas">
        <div id="box_wrapper">
          <Header1/>
          <Carousel/>
          <ServiceSection />
          <TerminalSection/>
          <IndustrySections/>
          <OurProject/>
          <Information/>
          <OurTeam/>
          <BlogSection/>
          <StatisticsMap/>
          <LatestNewsSection/>
          <Footer/>
        </div>
      </div>          
    </>
  );
};
export default home;
