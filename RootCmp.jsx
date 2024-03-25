import { HomePage } from "./pages/HomePage.jsx"

const Router = ReactRouterDOM.HashRouter
const { Route, Routes } = ReactRouterDOM

export function App() {

    return (
        <Router>
            <section className="app">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                </Routes>
            </section>
        </Router>
    )
}