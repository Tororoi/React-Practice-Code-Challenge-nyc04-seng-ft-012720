import React, { Component } from 'react'

class Sushi extends Component {

  state = {
    eaten: false
  }

  eatMe = () => {
    if (!this.state.eaten) {this.props.stackPlates(this.props.details)} 
    this.setState({
      eaten: true
    })
  }

  render() {
    const {name, img_url, price} = this.props.details
    return (
      <div className="sushi">
        <div className="plate" 
            onClick={(this.props.wallet >= price) ? this.eatMe : null}>
          { this.state.eaten ? null : <img src={img_url} width="100%" /> }
        </div>
        <h4 className="sushi-details">
          {name} - ${price}
        </h4>
      </div>
    )
  }
}

export default Sushi