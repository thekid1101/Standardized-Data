import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h1 className="text-3xl font-bold mb-4 text-gray-800">Welcome to NFL Analytics</h1>
      <p className="text-gray-600 mb-6">
        Explore comprehensive NFL data analysis. Use the navigation above to dive into player stats,
        team performance, game breakdowns, and advanced statistical comparisons.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Example Cards - Replace with actual links/features */}
        <div className="border p-4 rounded shadow hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold mb-2">Player Analysis</h2>
          <p className="text-sm text-gray-500">Deep dive into individual player statistics and trends.</p>
        </div>
        <div className="border p-4 rounded shadow hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold mb-2">Team Insights</h2>
          <p className="text-sm text-gray-500">Analyze team rosters, stats, and tendencies.</p>
        </div>
        <div className="border p-4 rounded shadow hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold mb-2">Game Breakdowns</h2>
          <p className="text-sm text-gray-500">Review play-by-play data and game summaries.</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage; 