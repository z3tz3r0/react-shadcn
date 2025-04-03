import axios from "axios";
import { useEffect, useState } from "react";

const PutUser = () => {
    const [id, setId] = useState("");
    const [newName, setNewName] = useState("");
    const [response, setResponse] = useState(null);
    const [error, setError] = useState("");
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        const updateUser = async () => {
            if (!submitted || !id || !newName) return;

            setError("");
            setResponse(null);

            try {
                const res = await axios.put(
                    `https://67e9cc5bbdcaa2b7f5ba3216.mockapi.io/users/${id}`,
                    { name: newName }
                );
                setResponse(res.data);
            } catch (err) {
                console.error(err);
                setError(
                    "❌ Failed to update user. Please check the ID and try again."
                );
            } finally {
                setSubmitted(false);
            }
        };

        updateUser();
    }, [submitted, id, newName]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className="p-4">
            <h2 className="mb-2 text-xl font-bold">Update User (PUT)</h2>

            <form onSubmit={handleSubmit} className="space-y-2">
                <input
                    type="text"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                    placeholder="User ID"
                    className="block w-full px-2 py-1 border"
                />
                <input
                    type="text"
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    placeholder="New Name"
                    className="block w-full px-2 py-1 border"
                />
                <button
                    type="submit"
                    className="px-4 py-1 text-white bg-yellow-600 rounded hover:bg-yellow-700"
                >
                    Update User
                </button>
            </form>

            {response && (
                <p className="mt-2 text-green-600">✅ Updated to: {response.name}</p>
            )}

            {error && (
                <div className="p-2 mt-2 text-red-600 bg-red-100 rounded">
                    <p>
                        <strong>Error:</strong> {error}
                    </p>
                </div>
            )}
        </div>
    );
};

export default PutUser;
