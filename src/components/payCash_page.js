import React from "react";

class PayCash extends React.Component {
    render () {
        return (
            <div className="cash pay page">
                <div style={{display: 'flex', justifyContent:'center', alignItems:'center'}}>
                    <h1>Cash Payment Selected</h1>
                </div>
                <div style={{display: 'flex', justifyContent:'center', alignItems:'center'}}>
                    <h2>Please Wait for Assistance</h2>
                </div>
                <div style={{display: 'flex', justifyContent:'center', alignItems:'center'}}>
                    <h2>Attendant is coming</h2>
                </div>
                
            </div>
        );
    }
}
export default PayCash;
