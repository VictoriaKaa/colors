import React from "react";
import { withRouter } from 'react-router';
import StarRating from "../../StarRating/StarRating";
import "./Color.scss";

class Color extends React.Component {
  render() {
    const { id, title, color, rating, time, onRemove, onRate, history } = this.props;

    return (
      <section className="colorSection" style={this.style}>
        <h1 ref="title"
        onClick={() => history.push(`/${id}`)}>
          {title}</h1>
        <div>date: {time}</div>
        <button onClick={onRemove}>
          delete
        </button>
        <div className="color"
        onClick={() => history.push(`/${id}`)}
        style={{ backgroundColor: color }}></div>
        <div>
          <StarRating
            starsSelected={rating}
            onRate={onRate}
          />
        </div>
      </section>
    );
  }
}
export default withRouter(Color);
