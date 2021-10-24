import AppStreamCam from '../view_model/camera_logic';
import HelpButton from '../components/help_button.js';
import PayCardButton from '../components/payCard_button.js';
import PayCashButton from '../components/payCash_button.js';
import InitKiosk from '../components/init_kiosk';
import React from 'react';

import { withRouter } from 'react-router'

class LandingPage extends React.Component{
    constructor(props) {
        super(props);
        this.handleAction= this.handleAction.bind(this);
        this.handleItems = this.handleItems.bind(this);
        this.state = {
            latest_action: 'No_gesture',
            list_of_items: []
          }
      }
    

    handleAction (option) {

        const action = option[0]
        const confidence = option[1]

        const { history: { push } } = this.props;
        if (action == "Swiping_Left" && confidence > 0.15) {
            push("/checkout");
        } else if (action == "Swiping_Up" && confidence > 0.25) {
            push("/pay1card")
        } else if (action == "Swiping_Down" && confidence > 0.25) {
            push("/pay2cash")
        } else if (action == "Stop_Sign" && confidence > 0.75) {
            push("/help")
        }

        this.setState( {
            latest_action: action
        })

    }

    handleItems (data) {
        console.log(data)
        const item_name = data["item_name"]
        const price = data["price"]

        if (item_name !== "n/a") {
          this.setState( {
            list_of_items: [...this.list_of_items, [item_name, price]]
          })
        }
    }

    render() {
        return <div>
        {/* <h2 style={{display: 'flex', justifyContent:'center'}}>Video</h2> */}
        <div style={{display:'flex', justifyContent:'center'}}>
            {/* <div><text>gestureA to begin checkout or scan item</text></div>
            <div><HelpButton/></div> */}
            <h1>gestureA to begin checkout or scan item</h1>

        </div>
        
        <div style={{display: 'flex', justifyContent:'center'}}>
            <div style={{paddingRight:'0px'}}>
                <AppStreamCam
                    handleAction={this.handleAction}
                    handleItems={this.handleItems}
                          />
            </div>

            <div style={{alignItems:'center', width:'100%'}}>
                <div style={{padding:'8px 15px 0px'}}>
                    <HelpButton/>
                </div>
                {/* <div style={{padding:'0px 15px'}}>
                    <PayCardButton/>
                </div>
                <div style={{padding:'0px 15px'}}>
                    <PayCashButton/>
                </div> */}

                <div style={{padding:'0px 15px'}}>
                    <InitKiosk/>
                </div>

            </div>
            
        </div>
    </div>;
    }

}
export default withRouter(LandingPage);