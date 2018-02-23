// Import modules
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'; // why not capitalized?
import Logo from './Logo.js';
import UserLogin from './UserLogin.js';
import SocialMedia from './SocialMedia.js';
import Title from './Title.js';
import Content from './Content.js';
import IdeaOutput from './IdeaOutput.js';

// DataMuse API info
const dataMuseURL = 'http://api.datamuse.com/words';
const autoCorrect = 'http://api.datamuse.com/sug';

// Words API info
const wordsAPI = {
  wordsURL  : 'https://wordsapiv1.p.mashape.com/words/',
  method    : 'GET',
  headers   : {
                "X-Mashape-Key" : '1z9GeNNTkOmshzd4FVju29DqohZep18pXcUjsnwGUSVkD2Ngnf',
                "Accept"        : 'application/json',
                "Content-Type"  : 'application/json'
  }
}

// Firebase API info
var config = {
  apiKey: "AIzaSyB-HJKi9VWDVinJG4zybbretVoG42uE5R8",
  authDomain: "idea-generator-dc40d.firebaseapp.com",
  databaseURL: "https://idea-generator-dc40d.firebaseio.com",
  projectId: "idea-generator-dc40d",
  storageBucket: "idea-generator-dc40d.appspot.com",
  messagingSenderId: "102907688500"
};
firebase.initializeApp(config);

// Overall components container
class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
        {/* <Footer /> */}
      </div>
    )
  }
}

// Header components container where logo, login area, and social media links are displayed
class Header extends React.Component {
  render() {
    return (
      <div className="">
        <Logo />
        {/* <UserLogin />
        <SocialMedia /> */}
      </div>
    )
  }
}

// Main components container where user interaction takes place
class Main extends React.Component {
  render() {
    return (
      <div>
        {/* <Title /> */}
        <Content />
      </div>
    )
  }
}

// Footer components container where Project Idea is displayed
class Footer extends React.Component {
  render() {
    return (
      <div>
        <IdeaOutput />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));