import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

import Layout from '../components/layout/Layout';
import Home from '../screens/Home';
import Experience from '../screens/Experience';
import Contact from '../screens/Contact';
import Tools from '../screens/Tools';
import NoMatch from '../screens/NoMatch';

const AppRoutes = props => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="experience" element={<Experience />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="tools" element={<Tools />} />
                    <Route path="*" element={<NoMatch />} />
                </Route>
            </Routes>
        </Router>
    );
};

export default AppRoutes;