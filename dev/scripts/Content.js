import React from 'react';

class Content extends React.Component {
  render() {
    return (
      <section>
        <Instructions />
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
      line    : 0,
      nouns   : [],
      verbs   : []
    }
  };
  render() {
    return (
      <section>
        <form action="">
          <select>
            {
              this.state.verbs.map((verb) => {
                return (
                  <option key={verb}>{verb}</option>
                )
              })
            }
          </select>
          <select>
            {
              this.state.verbs.map((verb) => {
                return (
                  <option key={verb}>{verb}</option>
                )
              })
            }
          </select>
        </form>
      </section>
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

class Line extends React.Component {

}


class Audience extends React.Component {
  render() {
    return (
      <input type="checkbox" name="" id="" />
    )
  }
}

export default Content;