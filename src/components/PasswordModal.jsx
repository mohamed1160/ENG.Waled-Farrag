import { useState } from "react";


export default function PasswordModal({ isOpen, onClose, onLogin }) {
    const [password, setPassword] = useState("");

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/80 z-50" onClick={onClose}>
            <div className="bg-gray-900 p-6 rounded-lg w-[300px] flex flex-col gap-4" onClick={(e) => e.stopPropagation()}>
                <h2 className="text-lg font-bold text-white">Enter Password</h2>
                <input
                    type="password"
                    placeholder="Password"
                    className="border p-2 rounded w-full bg-gray-800 text-white border-gray-600"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <div className="flex justify-end gap-2 mt-2">
                    <button onClick={onClose} className="text-gray-300 px-3 py-1 rounded hover:bg-gray-700">
                        Cancel
                    </button>
                    <button onClick={() => onLogin(password)} className="bg-white text-black px-3 py-1 rounded hover:bg-gray-200">
                        Login
                    </button>
                </div>
            </div>
        </div>
    );
}
