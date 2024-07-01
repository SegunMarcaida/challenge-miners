import React, { useEffect } from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HouseList from './components/HouseList';
import HouseDetail from './components/HouseDetail';
import { initializeAmplitude } from './amplitude';
import usePageViews from './hooks/usePageViews';

const App = () => {
    useEffect(() => {
        initializeAmplitude();
    }, []);

    return (
        <Router>
            <PageViewTracker />
            <Routes>
                <Route path="/" element={<HouseList />} />
                <Route path="/house/:id" element={<HouseDetail />} />
            </Routes>
        </Router>
    );
};

const PageViewTracker = () => {
    usePageViews();
    return null;
};

export default App;
