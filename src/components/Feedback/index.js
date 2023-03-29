// Write your React code here.
import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {isClickingRating: false}

  GiveRating = () => {
    this.setState({isClickingRating: true})
  }

  renderFeedbackOption = () => {
    const {feedbackData} = this.props
    const {emojis} = feedbackData
    return (
      <div>
        <h1 className="heading">
          How satisfied are you with our customer support performance?
        </h1>
        <ul className="emojis">
          {emojis.map(each => (
            <li key={each.id} onClick={this.GiveRating}>
              <img src={each.imageUrl} alt={each.name} className="img" />
              <p className="title">{each.name}</p>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  changeRating = () => {
    const {feedbackData} = this.props
    const {loveEmojiUrl} = feedbackData

    return (
      <div>
        <img src={loveEmojiUrl} alt="love emoji" className="love" />
        <h1>Thank You!</h1>
        <p>
          We will use your feedback to improve our customer support performance.
        </p>
      </div>
    )
  }

  render() {
    const {isClickingRating} = this.state
    console.log(isClickingRating)
    return (
      <div className="container">
        <div className="card-rating">
          {isClickingRating ? this.changeRating() : this.renderFeedbackOption()}
        </div>
      </div>
    )
  }
}
export default Feedback
