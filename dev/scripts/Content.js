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
          <Hold />
          <AdjNoun />
          <Hold />
          <Randomize /><br />
          <AddLine />
          <RemoveLine />
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
class Hold extends React.Component {
  render() {
    return (
      <input type="checkbox" name="" id=""/>
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
  render() {
    return (
      <select name="" id="">
        <option value="test">Verb</option>
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
        <option value="for">for</option>
        <option value="if">if</option>
      </select>    )
  }
}

export default Content;