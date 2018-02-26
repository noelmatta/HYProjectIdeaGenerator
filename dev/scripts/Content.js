import React from 'react';
import axios from 'axios';


class Content extends React.Component {
  render() {
    return (
      <section>
        {/* <Instructions /> */}
        <Form />
      </section>
    )
  }
}

class Instructions extends React.Component {
  render() {
    return (
      <section>
        Build an app that...
      </section>
    )
  }
}

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      line: [0],
      nouns: []
    }
    this.handleChange = this.handleChange.bind(this);
  };
  render() {
    return (
      <section>
        <h1>Build A Web App That Will...</h1>
        <Line />
        {/* <ControlLines /> */}
      </section>
    )
  }
  handleChange(e) {
    console.log(e)
    // this.setState({
    //   line: line.push(e)
    // })
  }
  componentDidMount() {

  }
}

class Line extends React.Component {
  render() {
    return (
      <form>
        <Verb />
        <AdjNoun />
        <Conjunction />
      </form>
    )
  }
}

// const ControlLines = () => {
//   return (
//     <span>
//       <button onClick={this.handleChange} id="addLine" value="addLine">+</button>
//       <button onSubmit="">-</button>
//     </span>
//   )
// }


class Verb extends React.Component {
  constructor() {
    super();
    this.state = {
      verbs: []
    }
  }
  render() {
    return (
      <select>
        {
          this.state.verbs.map((verb) => {
            return (
              <option key={verb}>{verb}</option>
            )
          })
        }
        <option key="random">...Or Pick A Random Verb!</option>
      </select>
    )
  }
  componentDidMount() {
    const dbref = firebase.database().ref('/initialVerbs');
    const initialVerbs = [];
    dbref.on('value', (verbs) => {
      const data = verbs.val();

      for (let key in data) {
        data.key = key;
        initialVerbs.push(data.key);
      }
      this.setState({
        verbs: initialVerbs
      });
    });
  }
}

class AdjNoun extends React.Component {
  constructor() {
    super();
    this.state = {
      nouns: [],
      adjectives: []
    }
  }
  render() {
    return (
      <select>
        {
          this.state.nouns.map((noun) => {
            return (
              <option key={noun}>{noun}</option>
            )
          })
        }
        <option key="random">...Or Pick A Random Noun!</option>
      </select>
    )
  }
  componentDidMount() {
    const word = NounsList();
    this.setState({
      nouns: word
    });
  }
}


// NounsList = () => {
  axios.get('https://wordsapiv1.p.mashape.com/words/?random=true', {
    headers: {
      'X-Mashape-Key': '1z9GeNNTkOmshzd4FVju29DqohZep18pXcUjsnwGUSVkD2Ngnf'
    }
  })
  .then(function (response) {
    return response.data.word;
    // listOfNouns.push(response.data.word)
  })
  .catch(function (error) {
    console.log(error);
  });
// }    

class Conjunction extends React.Component {
  constructor() {
    super();
    this.state = {
      conjunctions: []
    }
  }
  render() {
    return (
      <select>
        {
          this.state.conjunctions.map((conjunction) => {
            return (
              <option key={conjunction}>{conjunction}</option>
            )
          })
        }
      </select>
    )
  }
  componentDidMount() {
    const dbref = firebase.database().ref('/conjunctions');
    const initialConjunctions = [];
    dbref.on('value', (conjunctions) => {
      const data = conjunctions.val();

      for (let key in data) {
        data.key = key;
        initialConjunctions.push(data.key);
      }
      this.setState({
        conjunctions: initialConjunctions
      });
    });
  }
}

class Audience extends React.Component {
  render() {
    return (
      <input type="checkbox" name="" id="" />
    )
  }
}

export default Content;

// import React from 'react';

// class Content extends React.Component {
//   render() {
//     return (
//       <section>
//         {/* <Instructions /> */}
//         <Form />
//       </section>
//     )
//   }
// }

// class Form extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       line : 0
//     }
//     this.handleChange = this.handleChange.bind(this);
//   };
//   render() {
//     return (
//       <section>
//         <h1>Build A Web App That Will...</h1>
//         <Line key={this.state.line}/>
//         <button onClick={this.handleChange} id="plus">+</button>        
//         <button onClick={this.handleChange} id="minus">-</button>    
//       </section>
//     )
//   }
//   handleChange(e) {
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
//   componentDidMount() {

//   }
// }

// class Line extends React.Component {
//   render() {
//     return (
//       <form>
//         <h1>test</h1>
//       </form>
//     )
//   }
// }

// class Noun extends React.Component {
//   constructor() {
//     super();
//   }

// // class ControlLines extends React.Component {
// //   constructor() {
// //     this.state = {

// //     }
// //   }
// //   render() {
// //     return (
// //       <span>
// //         <button onClick={this.handleChange} id="plus">+</button>        
// //         <button onClick={this.handleChange} id="minus">-</button>        
// //       </span>
// //     )
// //   }
// //   handleChange(e) {
// //     console.log(e.target.id);
// //   }
// // }

// export default Content;