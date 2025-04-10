import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Box, 
  Typography, 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Paper, 
  TablePagination, 
  TextField, 
  InputAdornment, 
  FormControl, 
  InputLabel, 
  Select, 
  MenuItem, 
  CircularProgress, 
  Alert,
  IconButton,
  Tooltip
} from '@mui/material';
import { 
  Search as SearchIcon, 
  ArrowUpward as ArrowUpwardIcon, 
  ArrowDownward as ArrowDownwardIcon,
  SportsFootball as FootballIcon,
  Person as PersonIcon
} from '@mui/icons-material';
import { Player } from '../types';
import { fetchPlayers, getPlayersByPosition, searchPlayers } from '../services/api';
import Card from '../components/common/Card';
import Button from '../components/common/Button';

// Position icons mapping
const positionIcons: Record<string, React.ReactNode> = {
  'QB': <FootballIcon fontSize="small" />,
  'RB': <FootballIcon fontSize="small" />,
  'WR': <FootballIcon fontSize="small" />,
  'TE': <FootballIcon fontSize="small" />,
  'OL': <FootballIcon fontSize="small" />,
  'DL': <FootballIcon fontSize="small" />,
  'LB': <FootballIcon fontSize="small" />,
  'DB': <FootballIcon fontSize="small" />,
  'K': <FootballIcon fontSize="small" />,
  'P': <FootballIcon fontSize="small" />,
  'default': <PersonIcon fontSize="small" />
};

// Available positions for filter
const positions = ['All', 'QB', 'RB', 'WR', 'TE', 'OL', 'DL', 'LB', 'DB', 'K', 'P'];

// Sort direction type
type SortDirection = 'asc' | 'desc';

// Sort field type
type SortField = 'name' | 'position' | 'dob';

const PlayersPage: React.FC = () => {
  // State for players data
  const [players, setPlayers] = useState<Player[]>([]);
  const [filteredPlayers, setFilteredPlayers] = useState<Player[]>([]);
  
  // State for loading and error handling
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  
  // State for pagination
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);
  const [totalPlayers, setTotalPlayers] = useState<number>(0);
  
  // State for filtering and search
  const [positionFilter, setPositionFilter] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [searchTimeout, setSearchTimeout] = useState<NodeJS.Timeout | null>(null);
  
  // State for sorting
  const [sortField, setSortField] = useState<SortField>('name');
  const [sortDirection, setSortDirection] = useState<SortDirection>('asc');

  // Load players data
  useEffect(() => {
    const loadPlayers = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetchPlayers(page + 1, rowsPerPage);
        setPlayers(response.data);
        setFilteredPlayers(response.data);
        setTotalPlayers(response.metadata?.total || response.data.length);
      } catch (err) {
        setError('Failed to fetch players. Please try again later.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadPlayers();
  }, [page, rowsPerPage]);

  // Handle search input with debounce
  useEffect(() => {
    if (searchTimeout) {
      clearTimeout(searchTimeout);
    }

    if (searchQuery.trim() === '') {
      setFilteredPlayers(players);
      return;
    }

    const timeout = setTimeout(async () => {
      try {
        const searchResults = await searchPlayers(searchQuery);
        setFilteredPlayers(searchResults);
      } catch (err) {
        console.error('Search error:', err);
        setFilteredPlayers(players);
      }
    }, 500);

    setSearchTimeout(timeout);

    return () => {
      if (searchTimeout) {
        clearTimeout(searchTimeout);
      }
    };
  }, [searchQuery, players]);

  // Handle position filter
  useEffect(() => {
    if (positionFilter === 'All') {
      setFilteredPlayers(players);
      return;
    }

    const loadPlayersByPosition = async () => {
      try {
        const positionPlayers = await getPlayersByPosition(positionFilter);
        setFilteredPlayers(positionPlayers);
      } catch (err) {
        console.error('Position filter error:', err);
        setFilteredPlayers(players);
      }
    };

    loadPlayersByPosition();
  }, [positionFilter, players]);

  // Handle pagination
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Handle sorting
  const handleSort = (field: SortField) => {
    const isAsc = sortField === field && sortDirection === 'asc';
    setSortDirection(isAsc ? 'desc' : 'asc');
    setSortField(field);
    
    const sortedPlayers = [...filteredPlayers].sort((a, b) => {
      if (field === 'name') {
        return isAsc 
          ? (a.name || '').localeCompare(b.name || '')
          : (b.name || '').localeCompare(a.name || '');
      } else if (field === 'position') {
        return isAsc 
          ? (a.position || '').localeCompare(b.position || '')
          : (b.position || '').localeCompare(a.position || '');
      } else if (field === 'dob') {
        const dateA = a.dob ? new Date(a.dob).getTime() : 0;
        const dateB = b.dob ? new Date(b.dob).getTime() : 0;
        return isAsc ? dateA - dateB : dateB - dateA;
      }
      return 0;
    });
    
    setFilteredPlayers(sortedPlayers);
  };

  // Get sort icon for column header
  const getSortIcon = (field: SortField) => {
    if (sortField !== field) return null;
    return sortDirection === 'asc' ? <ArrowUpwardIcon fontSize="small" /> : <ArrowDownwardIcon fontSize="small" />;
  };

  return (
    <Card title="Players" className="mb-6">
      {/* Search and Filter Controls */}
      <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
        <TextField
          label="Search Players"
          variant="outlined"
          size="small"
          fullWidth
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        <FormControl variant="outlined" size="small" sx={{ minWidth: 120 }}>
          <InputLabel id="position-filter-label">Position</InputLabel>
          <Select
            labelId="position-filter-label"
            value={positionFilter}
            onChange={(e) => setPositionFilter(e.target.value as string)}
            label="Position"
          >
            {positions.map((pos) => (
              <MenuItem key={pos} value={pos}>{pos}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      {/* Loading and Error States */}
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

      {/* Players Table */}
      {!loading && !error && (
        <TableContainer component={Paper} sx={{ boxShadow: 'none', border: '1px solid #e0e0e0' }}>
          <Table sx={{ minWidth: 650 }} aria-label="players table">
            <TableHead>
              <TableRow>
                <TableCell>
                  <Box sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={() => handleSort('name')}>
                    Name {getSortIcon('name')}
                  </Box>
                </TableCell>
                <TableCell>
                  <Box sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={() => handleSort('position')}>
                    Position {getSortIcon('position')}
                  </Box>
                </TableCell>
                <TableCell>
                  <Box sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={() => handleSort('dob')}>
                    Date of Birth {getSortIcon('dob')}
                  </Box>
                </TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredPlayers.length > 0 ? (
                filteredPlayers.map((player) => (
                  <TableRow key={player.id} hover>
                    <TableCell component="th" scope="row">
                      <Link to={`/players/${player.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                        <Typography variant="body2" sx={{ fontWeight: 500, color: 'primary.main' }}>
                          {player.name}
                        </Typography>
                      </Link>
                    </TableCell>
                    <TableCell>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        {player.position ? (
                          <Tooltip title={player.position}>
                            <IconButton size="small" sx={{ mr: 1 }}>
                              {positionIcons[player.position] || positionIcons.default}
                            </IconButton>
                          </Tooltip>
                        ) : null}
                        {player.position || 'N/A'}
                      </Box>
                    </TableCell>
                    <TableCell>
                      {player.dob ? new Date(player.dob).toLocaleDateString() : 'N/A'}
                    </TableCell>
                    <TableCell>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => window.location.href = `/players/${player.id}`}
                      >
                        View Details
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={4} align="center">
                    <Typography variant="body2" color="text.secondary">
                      No players found.
                    </Typography>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25, 50]}
            component="div"
            count={totalPlayers}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </TableContainer>
      )}
    </Card>
  );
};

export default PlayersPage; 