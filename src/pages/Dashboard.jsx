import { useAuth } from "../context/AuthContext";

export const Dashboard = () => {
    const { user } = useAuth();

    return (
        <div className="page-container">
            <h2>Dashboard (Protected)</h2>
            <p>Welcome back, <strong>{user?.username}</strong>!</p>
            <p>This data is secure and hidden behind a login wall.</p>
        </div>
    );
};
