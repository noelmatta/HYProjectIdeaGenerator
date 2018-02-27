// Import modules
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Line from './Line.js';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedNoun: '',
      selectedVerb: '',
      selectedAdjective: '',
      noun: [],
      "verb-transitive": [],
      adjective: []
    }
    // this.Line = this.Line.bind(this);
    this.getWords = this.getWords.bind(this);
    this.buildIdea = this.buildIdea.bind(this);
  }
  render() {
    return(
      <div className="wrapper">
        <header>
        </header>
        <main>
          <form>
            <h1>The Unofficial HackerYou Project Idea Generator</h1>
            <p>Select a verb, adjective, and noun:</p>
            <Line data={this.state["verb-transitive"]} buildIdea={this.buildIdea} speechType="verb-transitive" />
            <Line data={this.state["adjective"]} buildIdea={this.buildIdea} speechType="adjective" />
            <Line data={this.state["noun"]} buildIdea={this.buildIdea} speechType="noun" />     
          </form>
          <span className="idea">
            <h2>The Greatest Project Idea:</h2>
            <h3>Build a web app that will {this.state.selectedVerb} {this.state.selectedAdjective} {this.state.selectedNoun}!!!</h3>
          </span>
        </main>
      </div>
    )
  }
  buildIdea(fragments) {
    const target = fragments.target;
    const speechType = target.dataset.name;

    speechType === 'verb-transitive' ? this.setState({ selectedVerb: fragments.target.value })
    :
    speechType === 'adjective' ? this.setState({ selectedAdjective: fragments.target.value })
    :
    speechType === 'noun' ? this.setState({ selectedNoun: fragments.target.value }) : console.log('hey') ;
    
      
  }
  getWords(typeOfWord) {
    axios.get(`http://api.wordnik.com:80/v4/words.json/randomWords?&includePartOfSpeech=${typeOfWord}&limit=15&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5`)
    .then((res) => {
      const data = res.data;
      const wordCollector = [];

      data.map((key) => {
        wordCollector.push(key.word);
      })

      this.setState({
        [typeOfWord]: wordCollector
      });
    })
  }
  componentDidMount() {
    this.getWords('noun')
    this.getWords('verb-transitive')
    this.getWords('adjective')
  }
}

ReactDOM.render(<App />, document.getElementById('app'));