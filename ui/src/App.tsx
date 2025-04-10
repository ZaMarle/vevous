import './App.css';
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from 'react-router-dom';
import { useAuth } from './components/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import TeamPage from './pages/TeamPage';
import ProfilePage from './pages/ProfilePage';

function App() {
    const { token } = useAuth();

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route>
                <Route path="/" element={<NavBar />}>
                    <Route index element={<HomePage />} />
                    <Route
                        path="profile"
                        element={
                            <ProtectedRoute
                                canActivate={token != null}
                                redirectPath="/signin"
                            >
                                <ProfilePage />
                            </ProtectedRoute>
                        }
                    />
                    <Route path="team/:teamId" element={<TeamPage />} />
                    {/* <Route path="test" element={<TestPage />} /> */}
                </Route>
                <Route
                    path="/signin"
                    element={
                        <ProtectedRoute
                            canActivate={token == null}
                            redirectPath="/"
                        >
                            <SignInPage />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/signup"
                    element={
                        <ProtectedRoute
                            canActivate={token == null}
                            redirectPath="/"
                        >
                            <SignUpPage />
                        </ProtectedRoute>
                    }
                />
            </Route>,
        ),
    );

    return <RouterProvider router={router} />;
}

export default App;
