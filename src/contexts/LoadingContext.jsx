import { createContext, useCallback, useContext, useMemo, useState } from "react";
import PropTypes from "prop-types";

const LoadingContext = createContext();

export const LoadingProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);

    const setLoading = useCallback((state) => {
        setIsLoading(state);
    }, []);

    const value = useMemo(() => ({ isLoading, setLoading }), [isLoading, setLoading]);

    return <LoadingContext.Provider value={value}>{children}</LoadingContext.Provider>;
};

LoadingProvider.propTypes = {
    children: PropTypes.node,
};

export const useLoading = () => useContext(LoadingContext);
