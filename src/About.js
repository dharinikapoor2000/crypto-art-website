import './App.css';
import Card from './components/card'
import CardRow from './components/cardRow'
import './index.css'

function About() {
  return (
    <div className="App">
      <header className="App-header sectionPadding maxWidth">
      <h1 className="header">
        <span>
        About NFTs test 2 {' '}  
        </span>
        {/* <span>
        with a  Sustainable {' '}  
        </span>
        <span>
        Future {' '}  
        </span> */}
      </h1>
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        <a
          className="button"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        > 
          <div className="buttonText">
          Learn More
          </div>
          <span className="arrow">
          &rarr;
          </span>
        </a>
      </header>
  
      <section className="sectionPadding purpleBg">
        <div className="maxWidth">
      {/* <div className="sectionRow">
      <h1>how it works</h1>
      </div> */}
        <div className="gridFour">
        <div className="block">
            <h2 className="gridSubtitle">The problem with digital art</h2>
          </div>
          <div className="block">
            <h2>Fungibility</h2>
            <p>In the digital art space, unique digital items such as GIF's, MP3 and other pieces of art can be easily replicated in mass without any attribution to the originator of the asset.</p>
          </div>
          <div className="block">
            <h2>Limitations</h2>
            <p>In the contemporary art market , much of the artists success is in the hands of wealthy inventors, curators, critics and galleries.</p>
          </div>
          <div className="block">
            <h2>Storage Space</h2>
            <p>Much of the art cannot be displayed at one time in a gallery , making it more difficult for artists to sell their art in its physical form.</p>
          </div>
        </div>
        </div>
      </section>
     
      <section className="sectionPadding">
      <div className="maxWidth">

      <div className="sectionRow">
      <h1>how it works</h1>
      </div>
        <div className="gridThree">
          <div className="block">
            <h2>Discover</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet pulvinar odio eget id et sed. Enim, nec, tincidunt vel leo, ac. Massa felis gravida proin est. Ac suspendisse ornare lacinia dictum massa velit quam pharetra id.</p>
          </div>
          <div className="block">
            <h2>Buy & Sell</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet pulvinar odio eget id et sed. Enim, nec, tincidunt vel leo, ac. Massa felis gravida proin est. Ac suspendisse ornare lacinia dictum massa velit quam pharetra id.</p>
          </div>
          <div className="block">
            <h2>Offset</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet pulvinar odio eget id et sed. Enim, nec, tincidunt vel leo, ac. Massa felis gravida proin est. Ac suspendisse ornare lacinia dictum massa velit quam pharetra id.</p>
          </div>
        </div>
        </div>
      </section>

      
      

      <section className="sectionPadding greenBg">
        <div className="maxWidth">
      {/* <div className="sectionRow">
      <h1>how it works</h1>
      </div> */}
        <div className="gridFour">
        <div className="block">
            <h2 className="gridSubtitle">The problem with digital art</h2>
          </div>
          <div className="block">
            <h2>Discover</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet pulvinar odio eget id et sed. Enim, nec, tincidunt vel leo, ac. Massa felis gravida proin est. Ac suspendisse ornare lacinia dictum massa velit quam pharetra id.</p>
          </div>
          <div className="block">
            <h2>Buy & Sell</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet pulvinar odio eget id et sed. Enim, nec, tincidunt vel leo, ac. Massa felis gravida proin est. Ac suspendisse ornare lacinia dictum massa velit quam pharetra id.</p>
          </div>
          <div className="block">
            <h2>Offset</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet pulvinar odio eget id et sed. Enim, nec, tincidunt vel leo, ac. Massa felis gravida proin est. Ac suspendisse ornare lacinia dictum massa velit quam pharetra id.</p>
          </div>
        </div>
        </div>
      </section>
      <section className="maxWidth sectionPadding">
    
        {/* <Card/> */}
        <CardRow/>
      </section>

      
    </div>
  );
}

export default About;
