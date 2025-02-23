import {LoadingProvider} from './LoadingContext';
import PropTypes from "prop-types";

const AppProviders = ({children}) => {
    return (
        <LoadingProvider>
            {children}
        </LoadingProvider>
    );
};

AppProviders.propTypes = {
    children: PropTypes.node,
}

export default AppProviders;
