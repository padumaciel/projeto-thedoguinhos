import './App.css';
import Header from '../src/components/header/Header'
import Main from '../src/components/main/Main'
import Footer from '../src/components/footer/Footer'
import React, { Component } from 'react';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      racas: [],
      subracas: []
    }
  }

  componentDidMount() {
    fetch("https://dog.ceo/api/breeds/image/random/50")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ cards: data.message, racas: data.message, subracas: data.message })
      })
  }

  render() {
    return (
      <>
        <Header />
        <Main cards={this.state.cards} racas={this.state.racas} subracas={this.state.subracas} />
        <Footer />
      </>
    )
  }
}

export default App;
