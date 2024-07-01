import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { logEvent } from '../amplitude';

const usePageViews = () => {
    const location = useLocation();

    useEffect(() => {
        logEvent('Page View', { path: location.pathname });
    }, [location]);
};

export default usePageViews;
