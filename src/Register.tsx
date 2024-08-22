import React, { useState } from 'react';
import './Register.css';
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa"; 

const Register: React.FC = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
    };

    return (
        <div className="auth-container">
            <h2 className="auth-title">Register</h2>
            <form className="auth-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <div className="input-wrapper">
                        <FaUser className="input-icon" />
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                            placeholder="Enter your username"
                        />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <div className="input-wrapper">
                        <FaEnvelope className="input-icon" />
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            placeholder="Enter your email"
                        />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <div className="input-wrapper">
                        <FaLock className="input-icon" />
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            placeholder="Enter your password"
                        />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="confirm-password">Confirm Password:</label>
                    <div className="input-wrapper">
                        <FaLock className="input-icon" />
                        <input
                            type="password"
                            id="confirm-password"
                            name="confirm-password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                            placeholder="Confirm your password"
                        />
                    </div>
                </div>
                <button type="submit" className="auth-button">Register</button>
            </form>
        </div>
    );
}

export default Register;
