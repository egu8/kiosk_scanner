import AppStreamCam from '../view_model/camera_logic';
import HelpButton from '../components/help_button.js';

function LandingPage() {
    return <div>
        <div>
            <HelpButton/>
        </div>
        <div>
            <h2>Video</h2>
            <AppStreamCam/>
        </div>
        
    </div>;
}
export default LandingPage;