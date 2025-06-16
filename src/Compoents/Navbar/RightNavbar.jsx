import FindUs from "../FindUs/FindUs";
import SocialLogin from "../SocialLogin/SocialLogin";
import Qjon from "./Qjon";


const RightNavbar = () => {
    return (
        <div className="space-y-5">
        <SocialLogin></SocialLogin>
        <FindUs></FindUs>
        <Qjon></Qjon>
        </div>
    );
};

export default RightNavbar;