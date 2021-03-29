import { Component } from 'react';
import './Card.css';

class Card extends Component {
    render(props) {
        return (<div className="cards">
            <article className="card">
                <header>
                    <h2>{this.props.header}</h2>
                </header>
                <img src={this.props.image} alt="Hot air balloons"></img>
                <div className="content">
                    <p>{this.props.content}</p>
                </div>
            </article>
        </div>)
    }
}

export default Card;