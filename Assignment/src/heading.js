import react, { Component } from 'react'
import './styles/main.css'


class Heading extends Component {

    render() {
        return (
            <div>
                <div className="recipies">
                    <h1 className="mainHeading"> { this.props.itemHeading.heading } </h1>
                    <button onClick={() => this.props.onDelete(this.props.itemHeading.id) }>Remove</button>
                </div>

                <div>
                    <h3>How to make rasam:</h3>
                </div>
            </div>
        )
    }

}

export default Heading;