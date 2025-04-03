import axios from "axios";
import { useEffect, useState } from "react";

const PatchUser = () => {
    const [id, setId] = useState("");
    const [newName, setNewName] = useState("");
    const [response, setResponse] = useState(null);
    const [error, setError] = useState("");
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        const patchUser = async () => {
            if (!submitted || !id || !newName) return;

            setError("");
            setResponse(null);

            try {
                const res = await axios.patch(
                    `https://67e9cc5bbdcaa2b7f5ba3216.mockapi.io/users/${id}`,
                    { name: newName }
                );
                setResponse(res.data);
            } catch (err) {
                console.error(err);
                setError(
                    "PATCH method is not supported by this API. Please use PUT instead for updates."
                );
            } finally {
                setSubmitted(false);
            }
        };

        patchUser();
    }, [submitted, id, newName]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className="p-4">
            <h2 className="mb-2 text-xl font-bold">Patch User (PATCH)</h2>

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
                    className="px-4 py-1 text-white bg-purple-600 rounded hover:bg-purple-700"
                >
                    Patch User
                </button>
            </form>

            {response && (
                <p className="mt-2 text-green-600">Patched to: {response.name}</p>
            )}

            {error && (
                <div className="p-2 mt-2 text-red-600 bg-red-100 rounded">
                    <p>
                        <strong>Error:</strong> {error}
                    </p>
                    <p className="mt-1 text-sm">
                        The MockAPI you're using does not currently allow PATCH requests.
                        You can emulate PATCH by using GET + PUT instead.
                    </p>
                </div>
            )}
        </div>
    );
};

export default PatchUser;
