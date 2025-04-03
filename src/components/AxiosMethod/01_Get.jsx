import axios from "axios";
import { useEffect, useState } from "react";

const GetUsers = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      setError("");
      setLoading(true);

      try {
        const res = await axios.get(
          "https://67e9cc5bbdcaa2b7f5ba3216.mockapi.io/users"
        );
        setUsers(res.data);
      } catch (err) {
        console.error(err);
        setError("❌ Failed to fetch users. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="p-4">
      <h2 className="mb-2 text-xl font-bold">Users List (GET)</h2>

      {loading && <p className="text-blue-600">Loading users...</p>}

      {error && (
        <div className="p-2 mt-2 text-red-600 bg-red-100 rounded">
          <p>
            <strong>Error:</strong> {error}
          </p>
        </div>
      )}

      {!loading && !error && (
        <ul className="pl-4 list-disc">
          {users.map((user) => (
            <li key={user.id}>
              {user.id} {user.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default GetUsers;
