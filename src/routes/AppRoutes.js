import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

import Layout from '../components/layout/Layout';
import Home from '../screens/Home';
import About from '../screens/About';
import Contact from '../screens/Contact';
import NoMatch from '../screens/NoMatch';

const AppRoutes = props => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="*" element={<NoMatch />} />
                </Route>
            </Routes>
        </Router>
    );
};

export default AppRoutes;