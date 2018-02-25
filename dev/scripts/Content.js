import React from 'react';

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
      line    : [0]
    }
  };
  render() {
    return (
      <section>
        <h1>Build A Web App That Will...</h1>
          <Line />
          <ControlLines data={this.state} key={this.state.line} />
      </section>
    )
  }
  componentDidMount() {

  }
}

const ControlLines = (props) => {
  return (
    console.log(props)
  )
}


class Verb extends React.Component {
  constructor() {
    super();
    this.state = {
      verbs : []
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