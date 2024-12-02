import IntroVideo from "./components/IntroVideo";
import Section from "./components/Section";
import Footers from "./components/Footers";
import Misc from "./components/Misc"



import freshTopicImg from "./assets/academy.png"
import freshTopic2Img from "./assets/story.png"
import tedTalksImg from "./assets/in-the-news.gif"
import franchiseImg from "./assets/franchise.gif"
import mapImg from "./assets/locations.png"
import coursesImg from "./assets/image2.png"
import albumImg from "./assets/mba-cares.gif"
import baratImg from "./assets/image1.png"
import chaiwalaImg from "./assets/image3.png"


import "./styles/App.scss";
import "./styles/intro.scss";
import "./styles/section.scss";
import "./styles/footer.scss";
import "./styles/misc.scss";
import "./styles/mediaQuerry.scss"


import data from "./data/data.json"
import { useEffect } from "react";


const yellow = " #fff100", pink = " #ed1179", brown = "#6d3d0f", white = "#fff";


function App() {
  const { freshTopic , freshTopic2 , tedTalks , franchise , map , courses , album , barat , chaiwala} = data;

const dotCursor = (e)=>{
  const cursor = document.querySelector(".cursor");
  cursor.style.top = `${e.pageY - 14}px`;
  cursor.style.left = `${e.pageX - 14}px`;



const element = e.target;
if(element.getAttribute("data-cursorPointer")){
  cursor.classList.add("cursorHover")
}
else if(element.getAttribute("data-cursorPointerMini")){
  cursor.classList.add("cursorHoverMini")
}
else{
  cursor.classList.remove("cursorHover");
  cursor.classList.remove("cursorHoverMini")
}

};


useEffect(() => {
  window.addEventListener("mousemove",dotCursor)

  return () => {
    window.removeEventListener("mousemove",dotCursor)
  }
}, [])






  return (
    <>
      <IntroVideo />

      {/* freshTopic - 1 */}
      <Section h3={freshTopic.heading} imgSrc={freshTopicImg} text={freshTopic.text} btnText={freshTopic.btn}
        backgroundColor={pink} btnBgColor={yellow} headingColor={yellow} btnColor={pink} textColor={yellow} />

      {/* freshTopic - 2 */}
      <Section h3={freshTopic2.heading} imgSrc={freshTopic2Img} text={freshTopic2.text} btnText={freshTopic2.btn}
        backgroundColor={pink} btnBgColor={yellow} headingColor={yellow} btnColor={pink} textColor={yellow} />

      {/* Ted Talks */}
      <Section h3={tedTalks.heading} imgSrc={tedTalksImg} text={tedTalks.text} btnText={tedTalks.btn}
        backgroundColor={yellow} btnBgColor={pink} headingColor={pink} btnColor={yellow} textColor={pink} />

      {/* franchise */}
      <Section h3={franchise.heading} imgSrc={franchiseImg} text={franchise.text} btnText={franchise.btn}
        backgroundColor={white} btnBgColor={brown} headingColor={pink} btnColor={yellow} textColor={brown} />

        {/* map */}
      <Section h3={map.heading} imgSrc={mapImg} text={map.text} btnText={map.btn}
       hasBtn = {false} backgroundColor={pink}  headingColor={yellow} textColor={yellow} />

       {/* courses */}
      <Section h3={courses.heading} imgSrc={coursesImg} text={courses.text} btnText={courses.btn} imgSize={"30%"}
        backgroundColor={yellow} btnBgColor={pink} headingColor={pink} btnColor={yellow} textColor={pink}  />

        {/* Album */}
      <Section h3={album.heading} imgSrc={albumImg} text={album.text} btnText={album.btn} 
        backgroundColor={white} btnBgColor={brown} headingColor={pink} btnColor={yellow} textColor={brown} />

         {/* Barat */}
      <Section h3={barat.heading} imgSrc={baratImg} text={barat.text} btnText={barat.btn} 
        backgroundColor = {pink} btnBgColor={yellow} headingColor={yellow} btnColor={pink} textColor={yellow} />

        {/* chaiwala */}
      <Section h3={chaiwala.heading} imgSrc={chaiwalaImg} text={chaiwala.text} btnText={chaiwala.btn} 
        backgroundColor = {white} btnBgColor={brown} headingColor={pink} btnColor={yellow} textColor={brown} />

        <Footers />

        <Misc />

    </>
  );
}

export default App;
