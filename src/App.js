import React, { Component } from "react";
import scene from "./images/Scene.png";
import mobel from "./images/mobel.png";
import aboutUs from "./images/aboutUs.png";
import howToApply from "./images/illustrations.png";
import faq from "./images/faq.png";
import footer1 from "./images/trekmobil.png";
import logo from "./images/logo.png";
import SocialGroup from "./Components/SocialGroup";
import "./App.css";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      user: {
        name: "",
        email: "",
      },
      questions: [
        "Question1",
        "Question1",
        "Question1",
        "Question1",
        "Question1",
        "Question1",
        "Question1",
        "Question1",
        "Question1",
        "Question1",
      ],
      details: [
        "Some Details",
        "Some Details",
        "Some Details",
        "Some Details",
        "Some Details",
        "Some Details",
        "Some Details",
        "Some Details",
        "Some Details",
        "Some Details",
      ],
      display: [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
      ],
      buttonPressed: false,
    };
  }
  componentDidMount() {}
  onHandleChange = (e) => {
    e.preventDefault();
    let userTemp = { ...this.state.user };
    switch (e.target.name) {
      case "Name":
        userTemp.name = e.target.value;
        break;
      case "Email":
        userTemp.email = e.target.value;
        break;
      default:
        break;
    }
    this.setState({
      user: userTemp,
    });
  };

  onSubmit = () => {
    if (this.state.user.name.length > 0 && this.state.user.email.length > 0) {
      alert(
        `Thank you for your time ${this.state.user.name}. We will contact you at ${this.state.user.email}`
      );
    } else {
      alert(
        `You did not complete the fields! Please do it so we can register you`
      );
    }
  };

  scroll = (e) => {
    switch (e.target.innerHTML) {
      case "ABOUT":
        window.scrollTo({
          top: document.getElementsByClassName("titleAboutUs")[0].offsetParent
            .offsetTop,
          left: 0,
          behavior: "smooth",
        });
        break;
      case "HOW TO":
        window.scrollTo({
          top: document.getElementsByClassName("titleHowToApply")[0]
            .offsetParent.offsetTop,
          left: 0,
          behavior: "smooth",
        });
        break;
      case "FAQS":
        window.scrollTo({
          top:
            document.getElementsByClassName("titleFaq")[0].offsetParent
              .offsetTop + 300,
          left: 0,
          behavior: "smooth",
        });
        break;
      default:
        break;
    }
  };

  display = (e, value) => {
    if (this.state.display[value] === false) {
      e.target.parentNode.childNodes[1].style.display = "block";
      let displayUse = this.state.display;
      displayUse[value] = true;
      this.setState({ display: displayUse });
    } else {
      e.target.parentNode.childNodes[1].style.display = "none";
      let displayUse = this.state.display;
      displayUse[value] = false;
      this.setState({ display: displayUse });
    }
  };

  loadMore = () => {
    if (this.state.buttonPressed === false) {
      this.setState({
        buttonPressed: true,
      });
    } else {
      this.setState({
        buttonPressed: false,
      });
    }

    console.log(document.getElementsByClassName("faqQuestions")[0].parentNode);
  };
  render() {
    return (
      <div className="desktop">
        <h2 className="h21Header" name="aboutus" onClick={this.scroll}>
          ABOUT
        </h2>
        <h2 className="h22Header" name="howto" onClick={this.scroll}>
          HOW TO
        </h2>
        <h2 className="h23Header" name="faqs" onClick={this.scroll}>
          FAQS
        </h2>
        <button
          className="contactUsHeader"
          onClick={()=>{alert("You can find us at office@trafico.com or 07xxxxxxxx")}}
        >
          CONTACT US
        </button>
        <img className="logoHeader" src={logo}></img>
        <img className="scene" src={scene}></img>
        <h1 className="h1header"> Your awesome traffic permit consultant.</h1>
        <button
          className="getStartedHeader"
          
        >GET STARTED</button>
        <img className="mobel" src={mobel}></img>

        <div className="aboutUs">
          <h2 className="titleAboutUs">ABOUT US</h2>
          <h2 className="h2AboutUs">
            The occupational traffic permit is one of the most important things
            in the company when carrying out freight transport. In fact, it is a
            prerequisite for doing business traffic at all.
          </h2>
          <img className="imgAboutUs" src={aboutUs} />
          <div className="rectangleVerticalAboutUs"></div>
          <div className="rectangleAboutUs">
            <h2 className="h2RectangleAboutUs">
              How do you do when you need to obtain a commercial traffic permit
              for freight transport to your business?
            </h2>
          </div>
        </div>
        <div className="howToApply">
          <h2 className="titleHowToApply">How to Apply</h2>
          <h2 className="textHowToApply">
            When applying for a traffic permit, there are certain requirements
            that you must meet that are included in the examination:
            requirements for professional knowledge, solid establishment, good
            reputation and financial resources. Important to remember is to
            confirm your application for a traffic permit by the company's
            company signer or CEO.
          </h2>
          <img className="imgHowToApply" src={howToApply} />
        </div>

        <div className="faq">
          <title className="titleFaq">FAQ</title>
          <h2 className="textFaq">
            Questions and Answers on Professional Traffic Permits:{" "}
          </h2>
          <div className="faqQuestions">
            {this.state.questions.map((index, value) => {
              if (this.state.buttonPressed === false) {
                if (value < 6) {
                  return (
                    <div className="row">
                      <span
                        className="questions"
                        onClick={(e) => {
                          this.display(e, value);
                        }}
                      >
                        {index}
                      </span>
                      <div className="details">{this.state.details[value]}</div>
                    </div>
                  );
                }
              } else {
                return (
                  <div className="row">
                    <span
                      className="questions"
                      onClick={(e) => {
                        this.display(e, value);
                      }}
                    >
                      {index}
                    </span>
                    <div className="details">{this.state.details[value]}</div>
                  </div>
                );
              }
            })}
          </div>
          <button className="loadMoreFaq" onClick={this.loadMore}>
            Load More
          </button>
          <div className="rectangleFaq">
            <img className="imgFaq" src={faq} />
          </div>
        </div>
        <div className="footer">
          <img className="img1Footer" src={footer1} />
          <form className="formFooter">
            <label className="labelFormFooter">Name</label>
            <input
              className="inputFormFooter"
              name="Name"
              onChange={this.onHandleChange}
            ></input>
            <label className="labelFormFooter">Email adress</label>
            <input
              className="inputFormFooter"
              name="Email"
              onChange={this.onHandleChange}
            ></input>
            <input
              className="buttonFormFooter"
              type="button"
              value="GET STARTED ---->"
              onClick={()=>{this.onSubmit()}}
            ></input>
          </form>
          <div className="maskFooter">
            <img className="imgLogoFooter" src={logo}></img>
            <div className="rectangleFooter"></div>
            <h2 className="textFooter">
              {" "}
              We provide traffic management consultants so you get started
              quickly, contact us for a quote today!
            </h2>
            <h2 className="h21Footer" name="aboutus" onClick={this.scroll}>
              ABOUT
            </h2>
            <h2 className="h22Footer" name="howto" onClick={this.scroll}>
              HOW TO
            </h2>
            <h2 className="h23Footer" name="faqs" onClick={this.scroll}>
              FAQS
            </h2>
          </div>
          <h2 className="copyrightFooter">Copyright @ 2019</h2>
          <SocialGroup />
        </div>
      </div>
    );
  }
}
