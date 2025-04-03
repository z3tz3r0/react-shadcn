import axios from "axios";
import { useEffect, useState } from "react";

const PostUser = () => {
    const [name, setName] = useState("");
    const [response, setResponse] = useState(null);
    const [error, setError] = useState("");
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        const createUser = async () => {
            if (!submitted || !name) return;

            setError("");
            setResponse(null);

            try {
                const res = await axios.post(
                    "https://67e9cc5bbdcaa2b7f5ba3216.mockapi.io/users",
                    { name }
                );
                setResponse(res.data);
            } catch (err) {
                console.error(err);
                setError("❌ Failed to create user. Please try again.");
            } finally {
                setSubmitted(false);
            }
        };

        createUser();
    }, [submitted, name]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className="p-4">
            <h2 className="mb-2 text-xl font-bold">Create User (POST)</h2>

            <form onSubmit={handleSubmit} className="space-y-2">
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter name"
                    className="block w-full px-2 py-1 border"
                />
                <button
                    type="submit"
                    className="px-4 py-1 text-white bg-blue-600 rounded hover:bg-blue-700"
                >
                    Create User
                </button>
            </form>

            {response && (
                <p className="mt-2 text-green-600">✅ Created: {response.name}</p>
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

export default PostUser;
