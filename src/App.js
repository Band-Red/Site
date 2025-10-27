import "./style/App.css";
import "./style/Mobile.css";
import "./style/Large.css";
import ButtonIcon from './components/Buttons/BtnIcon';
import TaggleLanguage from './components/Buttons/TaggleSwichLanguage'
import Overview from "./Pages/Overview";
import Awards from "./Pages/Awards";
import WhatIuse from "./Pages/WhatUse";
import MyProject from "./Pages/MyProject";
import LastPosts from "./Pages/BlogTutorials";
// import RoadMap from "./components/RoadMaps/RoadWeb";
// import BiofuelRoadmap from './components/RoadMaps/RoadMaptwo';
import Contact from "./Pages/Contact";
import Footer from "./components/Bars/Footer";


function App() {


  return (
    <>
      <header className={"headerBar"}>
          <h2 id={"user-name"}>
            <a href={'https://github.com/Band-Red'} target={"_blank"}>Band_Red</a>
          </h2>

          <span className={"Container-buttons"}>
            <TaggleLanguage />

            <ButtonIcon titleBtn={"View Menu"} typeBtn={"button"} nameBtn={"Menu"}>
              <svg viewBox="0 0 36 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.5 22C0.5 23.1046 1.39543 24 2.5 24H24.5C25.6046 24 26.5 23.1046 26.5 22C26.5 20.8954 25.6046 20 24.5 20H2.5C1.39543 20 0.5 20.8954 0.5 22ZM0.5 12C0.5 13.1046 1.39543 14 2.5 14H18.5C19.6046 14 20.5 13.1046 20.5 12C20.5 10.8954 19.6046 10 18.5 10H2.5C1.39543 10 0.5 10.8954 0.5 12ZM2.5 0C1.39543 0 0.5 0.895431 0.5 2C0.5 3.10457 1.39543 4 2.5 4H24.5C25.6046 4 26.5 3.10457 26.5 2C26.5 0.895431 25.6046 0 24.5 0H2.5ZM35.091 20.589C35.8695 19.8105 35.8704 18.5486 35.0929 17.769L29.34 12L35.0929 6.23098C35.8704 5.4514 35.8695 4.18948 35.091 3.41098C34.3117 2.63172 33.0483 2.63172 32.269 3.41098L27.2155 8.46447C25.2629 10.4171 25.2629 13.5829 27.2155 15.5355L32.269 20.589C33.0483 21.3683 34.3117 21.3683 35.091 20.589Z"></path>
              </svg>
            </ButtonIcon>
          </span>
      </header>
      
      <nav></nav>
      
      <main className="Content">
        <section id={"overview"} className={"overview-container"}>
          <Overview />
        </section>

        <section id={"Awards"} className={"container-awards"}>
          <Awards/>
        </section>

        <section id={"WhatIuse"} className={"container-WhatIuse"}>
          <WhatIuse />
        </section>

        <section id={"my-projects"} className={"container-Projects"}>
          <MyProject/>
        </section>

        <section id={"Blog"} className={"container-Blog"}>
          <LastPosts />
        </section>
        
        <section id={"Contact"} className={"container-Contact"}>
          <Contact />
        </section>
      </main>

      <aside></aside>
      
      <Footer />
    </>
  );
}

export default App;
