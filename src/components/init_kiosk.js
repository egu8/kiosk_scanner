import React from "react";
import { Link } from "react-router-dom";

class InitKiosk extends React.Component {
    constructor(props) {
        super(props);
        this.state = {activeState: false};
    
        this.handleClick = this.handleClick.bind(this);

        /* this.componentDidMount(); {
            fetch('http://jsonplaceholder.typicode.com/itemData')
            .then(res => res.json())
            .then((data) => {
            this.setState({ contacts: data })
            })
            .catch(console.log)
        } */
        
    }

    handleClick() {
        this.setState(prevState => ({
            activeState: !prevState.activeState
        }));

    }

    render() {
        return (
            <Link to="/checkout">
                <button onClick={this.handleClick} style={{
                    backgroundColor: 'green',
                    color: 'white',
                    fontSize: '20px',
                    paddingTop: '12px',
                    paddingBottom: '12px',
                    paddingRight: '60px',
                    paddingLeft: '60px',
                    borderRadius: '5px',
                    marginTop: '10px',
                    marginBottom: '10px',
                    cursor: "pointer",
                    fontFamily: "sans-serif",
                    width: '300px',
                    }}>
                    {this.state.activeState ? 'Cancel Checkout' : 'Begin Checkout'}
                </button>
            </Link>
            
        );
    }
}
export default InitKiosk;