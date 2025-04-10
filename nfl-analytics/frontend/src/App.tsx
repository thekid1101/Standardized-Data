import { Routes, Route } from 'react-router-dom';
import './App.css'; // Keep existing App CSS if needed
import Layout from './components/layout/Layout'; // Import the Layout component
import HomePage from './pages/HomePage'; // Import HomePage
import PlayersPage from './pages/PlayersPage'; // Import the actual PlayersPage
import PlayerDetailPage from './pages/PlayerDetailPage'; // Import PlayerDetailPage
import TeamsPage from './pages/TeamsPage'; // Import the new TeamsPage
import TeamDetailPage from './pages/TeamDetailPage'; // Import TeamDetailPage
import GamesPage from './pages/GamesPage'; // Import the new GamesPage

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}> {/* Use Layout for all nested routes */}
        <Route index element={<HomePage />} /> {/* index route renders at / */}
        <Route path="players" element={<PlayersPage />} /> {/* Use the imported PlayersPage */}
        <Route path="players/:id" element={<PlayerDetailPage />} /> {/* Add route for player detail */}
        <Route path="teams" element={<TeamsPage />} /> {/* Use the new TeamsPage */}
        <Route path="teams/:teamCode" element={<TeamDetailPage />} /> {/* Add route for team detail */}
        <Route path="games" element={<GamesPage />} /> {/* Add route for games page */}
        {/* Add other routes here, nested under Layout */}
        {/* <Route path="compare" element={<ComparisonPage />} /> */}
        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
