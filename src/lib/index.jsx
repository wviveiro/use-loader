import React, {useState, useCallback} from 'react';

const useLoader = () => {
    const [loaded, _setLoaded] = useState(false);
    const [error, _setError] = useState(false);


    const isLoaded = () => loaded;
    const isError = () => error !== false;
    const showContent = () => {
        if (!loaded) return <div>{'Loading'}...</div>;
        if (error !== false) return <div className="alert alert-danger">{error}</div>;
        return null;
    }
    const notReady = () => !isLoaded() || isError();

    const setError = useCallback((_error) => {
        _setError(_error);
        _setLoaded(true);
    }, []);

    const setLoaded = useCallback((l) => {
        _setError(false);
        _setLoaded(l);
    }, []);

    return [{isLoaded, isError, showContent, notReady}, setLoaded, setError];
}



export default useLoader;