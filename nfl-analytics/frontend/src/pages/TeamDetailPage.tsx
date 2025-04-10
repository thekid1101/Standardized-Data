import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { 
  Box, 
  Typography, 
  CircularProgress, 
  Alert,
} from '@mui/material';
import { fetchTeamDetails } from '../services/api';
import { TeamDetails } from '../types';

const TeamDetailPage: React.FC = () => {
  const { teamCode } = useParams<{ teamCode: string }>();
  const [team, setTeam] = useState<TeamDetails | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadTeam = async () => {
      if (!teamCode) return;
      
      setLoading(true);
      setError(null);
      try {
        const data = await fetchTeamDetails(teamCode);
        setTeam(data);
      } catch (err) {
        setError('Failed to fetch team details. Please try again later.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadTeam();
  }, [teamCode]);

  return (
    <Box sx={{ py: 3 }}>
      {loading && (
        <Box sx={{ display: 'flex', justifyContent: 'center', p: 3 }}>
          <CircularProgress />
        </Box>
      )}

      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}

      {!loading && !error && team && (
        <Box>
          <Typography variant="h4" component="h1" gutterBottom>
            {team.name || team.code}
          </Typography>
          <Typography variant="h6" color="textSecondary" gutterBottom>
            {team.conference} • {team.division}
          </Typography>
          {/* Add more team details here as needed */}
        </Box>
      )}
    </Box>
  );
};

export default TeamDetailPage; 