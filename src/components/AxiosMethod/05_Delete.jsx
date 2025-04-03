import axios from "axios";
import { useEffect, useState } from "react";

const DeleteUser = () => {
    const [id, setId] = useState("");
    const [status, setStatus] = useState("");
    const [error, setError] = useState("");
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        const deleteUser = async () => {
            if (!submitted || !id) return;

            setError("");
            setStatus("");

            try {
                await axios.delete(
                    `https://67e9cc5bbdcaa2b7f5ba3216.mockapi.io/users/${id}`
                );
                setStatus(`✅ User with ID ${id} has been deleted.`);
            } catch (err) {
                console.error(err);
                setError(
                    "❌ Failed to delete user. Please check the ID and try again."
                );
            } finally {
                setSubmitted(false);
            }
        };

        deleteUser();
    }, [submitted, id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className="p-4">
            <h2 className="mb-2 text-xl font-bold">Delete User (DELETE)</h2>

            <form onSubmit={handleSubmit} className="space-y-2">
                <input
                    type="text"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                    placeholder="User ID"
                    className="block w-full px-2 py-1 border"
                />
                <button
                    type="submit"
                    className="px-4 py-1 text-white bg-red-600 rounded hover:bg-red-700"
                >
                    Delete User
                </button>
            </form>

            {status && <p className="mt-2 text-green-600">{status}</p>}

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

export default DeleteUser;
