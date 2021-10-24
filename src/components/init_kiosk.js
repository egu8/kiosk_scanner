import React from "react";


class InitKiosk extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};
    
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render() {
        return (
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
                {this.state.isToggleOn ? 'Begin Checkout' : 'Cancel Checkout'}
            </button>
        );
    }
}
export default InitKiosk;