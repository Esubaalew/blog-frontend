import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import PostList from './components/PostList';
import PostDetail from './components/PostDetail';

function App() {
    return (
        <Router>
            <div className="app-container">
                <Header /> {/* Render Header component */}
                <Routes>
                    <Route path="/" element={<PostList />} />
                    <Route path="/posts/:slug" element={<PostDetail />} />
                </Routes>
                <Footer /> {/* Render Footer component */}
            </div>
        </Router>
    );
}

export default App;
