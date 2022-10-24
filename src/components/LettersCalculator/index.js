// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {
    isCount: 0,
  }

  countLetters = event => {
    this.setState({
      isCount: event.target.value.length,
    })
  }

  render() {
    const {isCount} = this.state

    return (
      <div className="bg-container">
        <div className="sub-container">
          <h1 className="heading">
            Calculate the
            <br />
            Letters you
            <br />
            enter
          </h1>
          <label htmlFor="Enter the phrase" className="sub-heading">
            Enter the phrase
          </label>
          <br />
          <input
            type="text"
            onChange={this.countLetters}
            className="search-input"
            placeholder="Enter the phrase"
            id="Enter the phrase"
          />
          <br />
          <p className="button">No.of letters: {isCount}</p>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="letters calculator"
          className="img"
        />
      </div>
    )
  }
}
export default LettersCalculator
