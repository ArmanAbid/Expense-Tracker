import { Link } from "react-router-dom";

export default function Layout({ children }) {
    return (
        <div className="App">
            <div className="header">
                <Link to="/"><h1>Expense Tracker</h1></Link>
            </div>

            <div className="main">
                <div className="container">{children}</div>
            </div>

            <div className="footer">&copy;2022 ABID</div>
        </div>
    );
}
