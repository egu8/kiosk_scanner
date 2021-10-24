import AppStreamCam from '../view_model/camera_logic';
import HelpButton from '../components/help_button.js';
import PayCardButton from '../components/payCard_button.js';
import PayCashButton from '../components/payCash_button.js';
import CancelButton from '../components/cancel_button';
import InitKiosk from '../components/init_kiosk';
import React from 'react';
import { withRouter } from 'react-router';
import BasicTable from '../components/table';

class CheckoutPage extends React.Component {
    constructor(props) {
        super(props);
        this.handleAction= this.handleAction.bind(this);
        this.handleItems = this.handleItems.bind(this);
        this.state = {
            latest_action: 'No_gesture',
            list_of_items: []
          }
      }

    handleAction (action) {

        this.setState( {
            latest_action: action
        })
        const { history: { push } } = this.props;

        if (action == "Swiping_Up") {
            push("/pay1card")
        } else if (action == "Swiping_Down") {
            push("/pay2cash")
        } else if (action == "Stop_Sign") {
            push("/help")
        } else if (action == "Pushing_Two_Fingers_Away") {
            push("/")
        }
    }

    handleItems (data) {
        const item_name = data["item_name"]
        const price = data["price"]

        console.log(item_name)
        console.log(price)
        if (item_name !== "n/a") {
          this.setState( {
            list_of_items: [...this.state.list_of_items, {name:item_name, price:price}]
          })

          console.log(this.state.list_of_items)
        }
    }

    render() {
    return <div>
        {/* <h2 style={{display: 'flex', justifyContent:'center'}}>Video</h2> */}
        <h1 style={{display: 'flex', justifyContent:'center'}}>Scan item or gestureB to finish</h1>
        <div style={{display: 'flex', justifyContent:'center'}}>
            <div style={{paddingRight:'0px'}}>
            <AppStreamCam
                    handleAction={this.handleAction}
                    handleItems={this.handleItems}
                          />
            </div>

            <div style={{alignItems:'center', width:'100%'}}>
                <div style={{display: 'flex'}}>
                    <div style={{padding:'8px 15px 0px'}}>
                        <HelpButton/>
                    </div>
                    <div style={{padding:'8px 15px 0px'}}>
                        <PayCardButton/>
                    </div>
                </div>
                
                <div style={{display: 'flex'}}>
                    <div style={{padding:'0px 15px'}}>
                        <CancelButton/>
                    </div>
                    <div style={{padding:'0px 15px'}}>
                        <PayCashButton/>
                    </div>
                </div>

                    {/* <PayCardButton/>
                    <PayCashButton/> */}

                

                <div style={{padding:'0px 15px'}}>
                    <BasicTable list_of_items={this.state.list_of_items}/>
                </div>

                {/* <div class="itemCard">
                    <ItemsList items={this.state.items} />
                </div> */}

                

                {/* <div style={{padding:'0px 15px'}}>
                    <InitKiosk/>
                </div> */}

            </div>
            
        </div>
        
        
    </div>;
    }
}
export default withRouter(CheckoutPage);