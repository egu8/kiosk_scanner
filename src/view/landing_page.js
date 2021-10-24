import AppStreamCam from '../view_model/camera_logic';
import HelpButton from '../components/help_button.js';
import PayCardButton from '../components/payCard_button.js';
import PayCashButton from '../components/payCash_button.js';

function LandingPage() {
    return <div>
        {/* <h2 style={{display: 'flex', justifyContent:'center'}}>Video</h2> */}
        <h1 style={{display: 'flex', justifyContent:'center'}}>gestureA to begin checkout or scan item</h1>
        <div style={{display: 'flex', justifyContent:'center'}}>
            <div style={{paddingRight:'50px'}}>
                <AppStreamCam/>
            </div>

            <div style={{alignItems:'center'}}>
                <div style={{padding:'15px'}}>
                    <HelpButton/>
                </div>
                <div style={{padding:'15px'}}>
                    <PayCardButton/>
                </div>
                <div style={{padding:'15px'}}>
                    <PayCashButton/>
                </div>
            </div>
            
        </div>
        
        
    </div>;
}
export default LandingPage;