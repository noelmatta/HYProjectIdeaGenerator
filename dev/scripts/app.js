// Import modules
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Logo from './Logo.js';
import UserLogin from './UserLogin.js';
import SocialMedia from './SocialMedia.js';
import Title from './Title.js';
import Content from './Content.js';
import IdeaOutput from './IdeaOutput.js';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      lines: [],
      "noun-plural": [],
      "verb-transitive": [],
      adjective: [],
      conjunctions: [],
      audiences: [],
      sources: []
    }
    this.getWords = this.getWords.bind(this);
  }
  render() {
    return(
      <form>
        {/* <Verb />
        <Adjective />
        <Noun /> */}
      </form>
    )
  }
  getWords(typeOfWord) {
    axios.get(`http://api.wordnik.com:80/v4/words.json/randomWords?&includePartOfSpeech=${typeOfWord}&limit=10&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5`)
    .then((res) => {
      const data = res.data;
      const wordCollector = [];

      data.map((key) => {
        wordCollector.push(key.word);
      })

      this.setState({
        [typeOfWord]: wordCollector
      });

      // for (let key in data) {
      //   console.log(key);
      //   // data.key = key;
      //   // initialVerbs.push(data.key);
      // }
      // this.setState({
      //   verbs: initialVerbs
      // });
      
    })
  }
  componentDidMount() {
    this.getWords('noun-plural')
    this.getWords('verb-transitive')
    this.getWords('adjective')
  }
}

// http://api.wordnik.com:80/v4/words.json/randomWords?&includePartOfSpeech=noun&limit=10&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5

// NounsList = () => {
// axios.get('https://wordsapiv1.p.mashape.com/words/?random=true', {
//   headers: {
//     'X-Mashape-Key': '1z9GeNNTkOmshzd4FVju29DqohZep18pXcUjsnwGUSVkD2Ngnf'
//   }
// })
//   .then(function (response) {
//     return response.data.word;
//     // listOfNouns.push(response.data.word)
//   })
//   .catch(function (error) {
//     console.log(error);
//   });


// class Verb extends React.Component {
//   constructor () {
//     super();
//     this.state = {
//       verbs: []
//     }
//     this.finalIdea = this.finalIdea.bind(this);
//   }
//   render() {
//     return (
//       <select onChange={this.finalIdea()}>
//         {
//           this.state.verbs.map((verb) => {
//             return (
//               <option key={verb}>{verb}</option>
//             )
//           })
//         }
//         <option key={this.state.verbs.length+1} id="random">...Or Pick A Random Verb!</option>

//       </select>
//     )
//   }
//   componentDidMount() {
//     const dbref = firebase.database().ref('/initialVerbs');
//     const initialVerbs = [];
//     dbref.on('value', (verbs) => {
//       const data = verbs.val();

//       for (let key in data) {
//         data.key = key;
//         initialVerbs.push(data.key);
//       }
//       this.setState({
//         verbs: initialVerbs
//       });
//     });
//   }
// }

// // Overall components container
// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       lines: [],
//       nouns: [],
//       verbs: [],
//       adjectives: [],
//       conjunctions: [],
//       audiences: [],
//       sources: [],
//       line: []
//     }
//     this.handleChange = this.handleChange.bind(this);
//     this.initialNouns = this.initialNouns.bind(this);
//   }
//   handleChange(e) {
//     e.preventDefault
//     if (e.target.id === 'plus') {
//       this.setState = {
//         line: this.state.line++
//       }
//     } else {
//       this.setState = {
//         line: this.state.line--
//       }
//     }
//     console.log(this.state.line)
//   }
//   render() {
//     return (
      // <div>
      //   <h1>Build A Web App That Will...</h1>
      //   <form>
      //     <select name="verbs" id="verbs">
      //       {
      //         this.state.verbs.map((verb) => {
      //           return (
      //             <option key={verb}>{verb}</option>
      //           )
      //         })
      //       }
      //       <option key="random">...Or Pick A Random Verb!</option>
            
      //     </select>
//           <select>
//             {
//               this.state.nouns.map((noun) => {
//                 return (
//                   <option key={noun}>{noun}</option>
//                 )
//               })
//             }
//             <option key="random">...Or Pick A Random Noun!</option>
//           </select>  
//           <button onClick={this.handleChange} id="plus">+</button>        
//           <button onClick={this.handleChange} id="minus">-</button>    

//         </form>
//       </div>
//     )
//   }
//   initialNouns() {
//     const listOfNouns = [];
//     for (let i = 0; i <= 10; i++) {
//       axios.get('https://wordsapiv1.p.mashape.com/words/?random=true', {
//         headers: {
//           'X-Mashape-Key': '1z9GeNNTkOmshzd4FVju29DqohZep18pXcUjsnwGUSVkD2Ngnf'
//         }
//       })
//         .then(function (res) {
//           const data = res.data.word
//           listOfNouns.push(data)
//         })
//         .catch(function (error) {
//           console.log(error);
//         });
//       }
//       return listOfNouns;
//     // this.setState({
//     //   nouns: initialNouns
//     // })
//   }
//   componentDidMount() {
    
//     const dbref = firebase.database().ref('/initialVerbs');
//     const initialVerbs = [];
//     dbref.on('value', (verbs) => {
//       const data = verbs.val();

//       for (let key in data) {
//         data.key = key;
//         initialVerbs.push(data.key);
//       }
//     });
//     const passNouns = this.initialNouns();
//     this.setState({
//       verbs: initialVerbs,
//       nouns: passNouns
//     });
//   }
// }

// // Header components container where logo, login area, and social media links are displayed
// class Header extends React.Component {
//   render() {
//     return (
//       <div className="">
//         <Logo />
//         {/* <UserLogin />
//         <SocialMedia /> */}
//       </div>
//     )
//   }
// }

// // Main components container where user interaction takes place
// class Main extends React.Component {
//   render() {
//     return (
//       <div>
//         {/* <Title /> */}
//         <Content />
//       </div>
//     )
//   }
// }

// // Footer components container where Project Idea is displayed
// class Footer extends React.Component {
//   render() {
//     return (
//       <div>
//         <IdeaOutput />
//       </div>
//     )
//   }
// }

ReactDOM.render(<App />, document.getElementById('app'));