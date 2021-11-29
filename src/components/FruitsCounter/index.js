import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {mango: 0, banana: 0}

  onClickEatMangoButton = () => {
    const {mango} = this.state

    this.setState(prevState => ({mango: prevState.mango + 1}))
  }

  onClickEatBananaButton = () => {
    const {mango, banana} = this.state

    this.setState(prevState => ({banana: prevState.banana + 1}))
  }

  render() {
    const {mango, banana} = this.state

    return (
      <div className="fruitCounter-bg-container">
        <div className="fruit-counter-container">
          <h1 className="heading">
            Bob ate <span className="mango-color">{mango}</span> mangoes
            <span className="banana-color"> {banana}</span> bananas
          </h1>
          <div className="fruits-container">
            <div className="mango-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
                className="mango-alignment"
              />
              <button
                className="button"
                type="button"
                onClick={this.onClickEatMangoButton}
              >
                Eat Mango
              </button>
            </div>
            <div className="banana-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
                className="banana-alignment"
              />
              <button
                className="button"
                type="button"
                onClick={this.onClickEatBananaButton}
              >
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
