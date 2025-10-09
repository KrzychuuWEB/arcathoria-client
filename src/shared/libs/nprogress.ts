import NProgress from "nprogress";
import "./nprogress.css";

NProgress.configure({
    showSpinner: false,
    speed: 400,
    minimum: 0.15,
});

export default NProgress;
