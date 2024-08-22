import React, { useState } from 'react';
import Login from './Login';
import Register from './Register';
import './App.css';

const App: React.FC = () => {
    const [currentPage, setCurrentPage] = useState<'login' | 'register'>('login');

    return (
        <div className="app-container">
            <div className="form-wrapper">
                <h1 className="app-title">Welcome to X</h1>
                <div className="form-content">
                    {currentPage === 'login' ? <Login /> : <Register />}
                </div>
                <div className="auth-toggle">
                    {currentPage === 'login' ? (
                        <p className="toggle-text">
                            Don't have an account?{' '}
                            <button onClick={() => setCurrentPage('register')} className="toggle-button">
                                Register here
                            </button>
                        </p>
                    ) : (
                        <p className="toggle-text">
                            Already have an account?{' '}
                            <button onClick={() => setCurrentPage('login')} className="toggle-button">
                                Login here
                            </button>
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default App;
