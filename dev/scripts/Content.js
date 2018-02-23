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
  render() {
    return (
      <section>
        <form action="">
          <Verb />
          <AdjNoun />
          <AddLine />
          <RemoveLine /><br />
          <Conjunction />
        </form>
      </section>
    )
  }
}

class AddLine extends React.Component {
  render() {
    return (
      <button>+</button>
    )
  }
}

class RemoveLine extends React.Component {
  render() {
    return (
      <button>-</button>
    )
  }
}

class Randomize extends React.Component {
  render() {
    return (
      <button>randomize</button>
    )
  }
}

class AdjNoun extends React.Component {
  render() {
    return (
      <select name="" id="">
        <option value="adjNoun">Adjective + Noun</option>
      </select>
    )
  }
}

class Verb extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    console.log(e.target.value);
  }
  render() {
    return (
      <select name="" id="" value="" onChange={this.handleChange}>
        <option value="on">Select A Verb</option>
        <option value="test">Generates</option>
        <option value="test2">Transforms</option>
        <option value="test3">Calculates</option>
        <option value="test4">Displays</option>
        <option value="test5">Finds</option>
        <option value="test6">Uses</option>
        <option value="test7">Get A Random Verb</option>
      </select>
    )
  }
}


class Audience extends React.Component {
  render() {
    return (
      <input type="checkbox" name="" id="" />
    )
  }
}

class Conjunction extends React.Component {
  render() {
    return (
      <select name="" id="">
        <option value="and">and</option>
        <option value="or">or</option>
        <option value="from">from</option>
        <option value="while">while</option>
        <option value="into">into</option>
        <option value="to">to</option>
        <option value="for">for</option>
        <option value="if">if</option>
      </select>    )
  }
}

export default Content;