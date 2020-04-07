import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushiList: [],
    startIndex: 0,
    endIndex: 4,
    wallet: 200,
    plates: []
  }

  componentDidMount() {
    fetch(API)
    .then(res => res.json())
    .then(sushiData => {
      this.setState({
        sushiList: sushiData
      })
    })
  }

  getMore = () => {
    this.setState({
      startIndex: this.state.startIndex+5,
      endIndex: this.state.endIndex+5
    })
  }

  stackPlates = (sushi) => {
    const newPlate = sushi.id
    const cost = sushi.price
    this.setState({
      plates: [...this.state.plates, newPlate],
      wallet: this.state.wallet - cost
    })
  }
 
  render() {
    let fourSushi = this.state.sushiList.slice(this.state.startIndex,this.state.endIndex)
    return (
      <div className="app">
        <SushiContainer sushiList={fourSushi} getMore={this.getMore} wallet={this.state.wallet} stackPlates={this.stackPlates}/>
        <Table wallet={this.state.wallet} plates={this.state.plates}/>
      </div>
    );
  }
}

export default App;