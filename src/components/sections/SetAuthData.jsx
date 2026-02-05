import React, { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

const UserSection = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loginUsername, setLoginUsername] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [jwt, setJwt] = useState("");

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [savedUsername, setSavedUsername] = useState("");
    const [savedPassword, setSavedPassword] = useState("");
    const [userId, setUserId] = useState(null);

    useEffect(() => {}, []);

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:1337/api/auth/local", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    identifier: loginUsername,
                    password: loginPassword,
                }),
            });
            const data = await response.json();
            console.log("Login response:", data);

            if (data.jwt) {
                setJwt(data.jwt);
                localStorage.setItem("jwt", data.jwt);
                setIsLoggedIn(true);
                fetchUser(data.jwt);
                toast.success("Login successful!");
            } else {
                toast.error("Login error. Check username and password.");
            }
        } catch (error) {
            console.error("Error logging in:", error);
            toast.error("Login error.");
        }
    };

    const fetchUser = async (token) => {
        try {
            const response = await fetch("http://localhost:1337/api/users/me", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            const data = await response.json();
            console.log("User API response:", data);

            const user = data || {};
            setUserId(user.id);
            setSavedUsername(user.username || "");
            setSavedPassword(user.password ? "********" : "");
            setUsername(user.username || "");
            setPassword("");
            setConfirmPassword("");
        } catch (error) {
            console.error("Error fetching user:", error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            toast.error("Passwords do not match!");
            return;
        }
        if (!userId || !jwt) {
            toast.error("User not logged in or ID not found.");
            return;
        }
        const confirm = window.confirm("Are you sure you want to delete the old username and password and update them with the new ones? This action cannot be undone.");
        if (!confirm) return;

        try {
            const response = await fetch(`http://localhost:1337/api/users/${userId}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${jwt}`,
                },
                body: JSON.stringify({
                    username: username,
                    password: password,
                }),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            console.log("User update response:", data);

            const user = data || {};
            setSavedUsername(user.username || username);
            setSavedPassword("********");
            setUsername("");
            setPassword("");
            setConfirmPassword("");
            toast.success("Old username and password deleted and updated successfully!");
        } catch (error) {
            console.error("Error saving user:", error);
            toast.error("Error updating user. Please try again.");
        }
    };

    const handleLogout = () => {
        localStorage.removeItem("jwt");
        setJwt("");
        setIsLoggedIn(false);
        setUserId(null);
        setSavedUsername("");
        setSavedPassword("");
        setUsername("");
        setPassword("");
        setConfirmPassword("");
        toast.success("Logged out.");
    };

    return (
        <div className="bg-black text-white p-4 sm:p-6 md:p-8">
            <Toaster />
            <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8">User Section</h1>
            <div className="max-w-md mx-auto bg-white/20 p-4 sm:p-6 rounded-lg shadow-lg backdrop-blur-sm">
                {!isLoggedIn ? (
                    <form onSubmit={handleLogin} className="space-y-4 mb-6">
                        <h2 className="text-xl font-semibold text-center">Login First</h2>
                        <input
                            type="text"
                            placeholder="Username"
                            value={loginUsername}
                            onChange={(e) => setLoginUsername(e.target.value)}
                            required
                            className="w-full p-3 border border-gray-300 rounded-lg bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={loginPassword}
                            onChange={(e) => setLoginPassword(e.target.value)}
                            required
                            className="w-full p-3 border border-gray-300 rounded-lg bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                        />
                        <button type="submit" className="w-full bg-blue-500 text-white px-4 py-3 rounded-lg hover:bg-blue-600 transition duration-300 shadow-md">
                            Login
                        </button>
                    </form>
                ) : (
                    <>
                        <form onSubmit={handleSubmit} className="space-y-4 mb-6">
                            <h2 className="text-xl font-semibold text-center">Update Username & Password</h2>
                            <input
                                type="text"
                                placeholder="New Username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                                className="w-full p-3 border border-gray-300 rounded-lg bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                            />
                            <input
                                type="password"
                                placeholder="New Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="w-full p-3 border border-gray-300 rounded-lg bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                            />
                            <input
                                type="password"
                                placeholder="Confirm New Password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                                className="w-full p-3 border border-gray-300 rounded-lg bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                            />
                            <button type="submit" className="w-full bg-blue-500 text-white px-4 py-3 rounded-lg hover:bg-blue-600 transition duration-300 shadow-md">
                                Done
                            </button>
                        </form>
                        <button onClick={handleLogout} className="w-full bg-red-500 text-white px-4 py-3 rounded-lg hover:bg-red-600 transition duration-300 shadow-md">
                            Logout
                        </button>
                        {savedUsername && <div className="text-center text-sm text-gray-300 mt-4">Current Username: {savedUsername}</div>}
                    </>
                )}
            </div>
        </div>
    );
};

export default UserSection;
