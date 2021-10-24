import AppStreamCam from '../view_model/camera_logic';
import HelpButton from '../components/help_button.js';
import PayCardButton from '../components/payCard_button.js';
import PayCashButton from '../components/payCash_button.js';
import InitKiosk from '../components/init_kiosk';

function LandingPage() {
    return <div>
        {/* <h2 style={{display: 'flex', justifyContent:'center'}}>Video</h2> */}
        <div style={{flexDirection:'row', justifyContent:'space-between'}}>
            <div><text>gestureA to begin checkout or scan item</text></div>
            <div><HelpButton/></div>
        </div>
        
        <div style={{display: 'flex', justifyContent:'center'}}>
            <div style={{paddingRight:'0px'}}>
                <AppStreamCam/>
            </div>

            <div style={{alignItems:'center', width:'100%'}}>
                <div style={{padding:'8px 15px 0px'}}>
                    <HelpButton/>
                </div>
                <div style={{padding:'0px 15px'}}>
                    <PayCardButton/>
                </div>
                <div style={{padding:'0px 15px'}}>
                    <PayCashButton/>
                </div>

                <div style={{padding:'0px 15px'}}>
                    <InitKiosk/>
                </div>

            </div>
            
        </div>
        
        
    </div>;
}
export default LandingPage;