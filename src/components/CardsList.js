import { Component } from "react";
import Card from "./card/Card";
import './CardsList.css';


class CardsList extends Component {
    render(props) {
        return (
            <div className="cards">
                {this.props.cards.map(card =>
                    <Card
                        header={card.header}
                        content={card.content}
                        image={card.image}
                    />)}
            </div>
        )
    }
}

export default CardsList;