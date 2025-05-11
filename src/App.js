import { useState } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    NavLink,
} from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Testing from "./components/Testing";
import Visualize from "./components/Visualize";

export default function App() {
    const [articleValidity, setArticleValidity] = useState(null);

    return (
        <Router>
            <>
                <nav>
                    <ul>
                        <li className="nav-link">
                            <NavLink to="/">Flush</NavLink>
                        </li>
                        <li className="nav-link">
                            <NavLink to="/about">About</NavLink>
                        </li>
                        <li className="nav-link">
                            <NavLink to="/testing">Testing</NavLink>
                        </li>
                        <li className="nav-link">
                            <NavLink to="/visualize">Visualize</NavLink>
                        </li>
                    </ul>
                </nav>

                <main>
                    <Routes>
                        <Route path="/about" element={<About />} />
                        <Route path="/testing" element={<Testing />} />
                        <Route path="/visualize" element={<Visualize />} />
                        <Route
                            path="/"
                            element={
                                <Home
                                    articleValidity={articleValidity}
                                    setArticleValidity={setArticleValidity}
                                />
                            }
                        />
                    </Routes>
                </main>
            </>
        </Router>
    );
}
