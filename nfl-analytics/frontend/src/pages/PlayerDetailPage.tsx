import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { PlayerDetails } from '../types';
import { fetchPlayerDetails } from '../services/api';

const PlayerDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [player, setPlayer] = useState<PlayerDetails | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) {
      setError('Player ID not found in URL.');
      setLoading(false);
      return;
    }

    const loadPlayerDetails = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchPlayerDetails(id);
        if (data) {
          setPlayer(data);
        } else {
          setError(`Player with ID ${id} not found.`);
        }
      } catch (err) {
        setError('Failed to fetch player details. Please try again later.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadPlayerDetails();
  }, [id]);

  if (loading) {
    return (
      <div className="bg-white shadow rounded-lg p-6 text-center">
        <p className="text-gray-500">Loading player details...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
        <strong className="font-bold">Error:</strong>
        <span className="block sm:inline"> {error}</span>
      </div>
    );
  }

  if (!player) {
    return (
      <div className="bg-white shadow rounded-lg p-6 text-center">
        <p className="text-gray-700">Player data could not be loaded.</p>
      </div>
    );
  }

  return (
    <div className="bg-white shadow rounded-lg p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-800">{player.name}</h1>
        <p className="text-lg text-gray-600">{player.position || 'Position Unknown'}</p>
        {player.dob && <p className="text-sm text-gray-500">DOB: {new Date(player.dob).toLocaleDateString()}</p>}
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">Recent Game Stats</h2>
        {player.playerGameStats && player.playerGameStats.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-2 text-left font-medium text-gray-500 uppercase tracking-wider">Game</th>
                  <th className="px-4 py-2 text-left font-medium text-gray-500 uppercase tracking-wider">Snaps</th>
                  <th className="px-4 py-2 text-left font-medium text-gray-500 uppercase tracking-wider">FPts</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {player.playerGameStats.map((stat) => (
                  <tr key={stat.gameKey} className="hover:bg-gray-50">
                    <td className="px-4 py-2 whitespace-nowrap">{stat.gameKey}</td>
                    <td className="px-4 py-2 whitespace-nowrap">{stat.snaps ?? '-'}</td>
                    <td className="px-4 py-2 whitespace-nowrap">{stat.fantasyPoints?.toFixed(2) ?? '-'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-gray-500 italic">No recent game stats available.</p>
        )}
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">Visualizations (TBD)</h2>
        <div className="border border-dashed border-gray-300 p-4 rounded text-center text-gray-400">
          Charts will be displayed here using Recharts.
        </div>
      </div>

    </div>
  );
};

export default PlayerDetailPage; 