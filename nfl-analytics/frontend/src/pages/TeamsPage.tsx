import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Box, 
  Typography, 
  Card, 
  CardContent, 
  CardMedia, 
  CardActionArea,
  CircularProgress, 
  Alert,
  Divider,
  Chip,
  Grid
} from '@mui/material';
import { fetchTeams } from '../services/api';
import { Team } from '../types';

// Team logo mapping - in a real app, these would be actual image paths
const teamLogos: Record<string, string> = {
  'ARI': '/assets/team-logos/ari.png',
  'ATL': '/assets/team-logos/atl.png',
  'BAL': '/assets/team-logos/bal.png',
  'BUF': '/assets/team-logos/buf.png',
  'CAR': '/assets/team-logos/car.png',
  'CHI': '/assets/team-logos/chi.png',
  'CIN': '/assets/team-logos/cin.png',
  'CLE': '/assets/team-logos/cle.png',
  'DAL': '/assets/team-logos/dal.png',
  'DEN': '/assets/team-logos/den.png',
  'DET': '/assets/team-logos/det.png',
  'GB': '/assets/team-logos/gb.png',
  'HOU': '/assets/team-logos/hou.png',
  'IND': '/assets/team-logos/ind.png',
  'JAX': '/assets/team-logos/jax.png',
  'KC': '/assets/team-logos/kc.png',
  'LAC': '/assets/team-logos/lac.png',
  'LAR': '/assets/team-logos/lar.png',
  'LV': '/assets/team-logos/lv.png',
  'MIA': '/assets/team-logos/mia.png',
  'MIN': '/assets/team-logos/min.png',
  'NE': '/assets/team-logos/ne.png',
  'NO': '/assets/team-logos/no.png',
  'NYG': '/assets/team-logos/nyg.png',
  'NYJ': '/assets/team-logos/nyj.png',
  'PHI': '/assets/team-logos/phi.png',
  'PIT': '/assets/team-logos/pit.png',
  'SEA': '/assets/team-logos/sea.png',
  'SF': '/assets/team-logos/sf.png',
  'TB': '/assets/team-logos/tb.png',
  'TEN': '/assets/team-logos/ten.png',
  'WAS': '/assets/team-logos/was.png',
  'default': '/assets/team-logos/default.png'
};

// Conference colors
const conferenceColors: Record<string, { bg: string, text: string }> = {
  'AFC': { bg: '#013369', text: '#ffffff' },
  'NFC': { bg: '#D50A0A', text: '#ffffff' },
  'default': { bg: '#f5f5f5', text: '#333333' }
};

const TeamsPage: React.FC = () => {
  const [teams, setTeams] = useState<Team[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadTeams = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchTeams();
        setTeams(data);
      } catch (err) {
        setError('Failed to fetch teams. Please try again later.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadTeams();
  }, []);

  // Group teams by conference
  const teamsByConference = teams.reduce((acc, team) => {
    const conference = team.conference || 'Other';
    if (!acc[conference]) {
      acc[conference] = [];
    }
    acc[conference].push(team);
    return acc;
  }, {} as Record<string, Team[]>);

  return (
    <Box sx={{ py: 3 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        NFL Teams
      </Typography>

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

      {!loading && !error && (
        <Box>
          {Object.entries(teamsByConference).map(([conference, conferenceTeams]) => (
            <Box key={conference} sx={{ mb: 4 }}>
              <Typography 
                variant="h5" 
                component="h2" 
                sx={{ 
                  mb: 2,
                  pb: 1,
                  borderBottom: '2px solid',
                  borderColor: conferenceColors[conference]?.bg || conferenceColors.default.bg
                }}
              >
                {conference}
              </Typography>
              
              <Grid container spacing={3}>
                {conferenceTeams.map((team) => (
                  <Grid item xs={12} sm={6} md={4} lg={3} key={team.code}>
                    <Card 
                      sx={{ 
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        transition: 'transform 0.2s, box-shadow 0.2s',
                        '&:hover': {
                          transform: 'translateY(-4px)',
                          boxShadow: 6
                        }
                      }}
                    >
                      <CardActionArea 
                        component={Link} 
                        to={`/teams/${team.code}`}
                        sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                      >
                        <CardMedia
                          component="img"
                          height="140"
                          image={teamLogos[team.code] || teamLogos.default}
                          alt={`${team.name || team.code} logo`}
                          sx={{ 
                            objectFit: 'contain',
                            p: 2,
                            bgcolor: 'background.paper'
                          }}
                        />
                        <CardContent sx={{ flexGrow: 1 }}>
                          <Typography gutterBottom variant="h6" component="div" align="center">
                            {team.name || team.code}
                          </Typography>
                          
                          <Divider sx={{ my: 1 }} />
                          
                          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
                            <Chip 
                              label={team.division || 'Unknown Division'} 
                              size="small" 
                              color="primary" 
                              variant="outlined"
                            />
                            <Chip 
                              label={team.conference || 'Unknown Conference'} 
                              size="small" 
                              sx={{ 
                                bgcolor: conferenceColors[team.conference || '']?.bg || conferenceColors.default.bg,
                                color: conferenceColors[team.conference || '']?.text || conferenceColors.default.text
                              }}
                            />
                          </Box>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default TeamsPage; 