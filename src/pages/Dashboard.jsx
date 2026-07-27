import React from 'react'
import { useNavigate } from 'react-router-dom'
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Avatar,
} from '@mui/material'
import DashboardIcon from '@mui/icons-material/Dashboard'
import PeopleIcon from '@mui/icons-material/People'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import { useAuth } from '../AuthContext.jsx'

const stats = [
  { label: 'Total Users', value: '1,204', icon: <PeopleIcon />, color: '#4F46E5' },
  { label: 'Revenue', value: '$8,540', icon: <AttachMoneyIcon />, color: '#0EA5E9' },
  { label: 'Growth', value: '+12.5%', icon: <TrendingUpIcon />, color: '#22C55E' },
]

export default function Dashboard() {
  const { currentUser, logout } = useAuth()
  const navigate = useNavigate()

  function handleLogout() {
    logout()
    navigate('/login')
  }

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      <AppBar position="static" elevation={0} color="primary">
        <Toolbar>
          <DashboardIcon sx={{ mr: 1 }} />
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Dashboard
          </Typography>
          <Typography variant="body2" sx={{ mr: 2 }}>
            {currentUser?.name}
          </Typography>
          <Button color="inherit" variant="outlined" onClick={handleLogout}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Paper elevation={2} sx={{ p: 3, mb: 4, display: 'flex', alignItems: 'center', gap: 2 }}>
          <Avatar sx={{ bgcolor: 'primary.main', width: 56, height: 56 }}>
            {currentUser?.name?.[0]?.toUpperCase() || 'U'}
          </Avatar>
          <Box>
            <Typography variant="h6">Wellcome, {currentUser?.name}!</Typography>
            <Typography variant="body2" color="text.secondary">
              {currentUser?.email}
            </Typography>
          </Box>
        </Paper>

        <Grid container spacing={3}>
          {stats.map((stat) => (
            <Grid item xs={12} sm={4} key={stat.label}>
              <Paper elevation={2} sx={{ p: 3, display: 'flex', alignItems: 'center', gap: 2 }}>
                <Avatar sx={{ bgcolor: stat.color }}>{stat.icon}</Avatar>
                <Box>
                  <Typography variant="h5" fontWeight={600}>
                    {stat.value}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {stat.label}
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>

        <Paper elevation={2} sx={{ p: 3, mt: 4 }}>
          <Typography variant="h6" gutterBottom>
            Recent Activity
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Yahan apka app content, tables, ya charts add ho sakte hain. Ye sirf ek simple
            starting point hai jo aap apni zaroorat ke mutabiq badal sakte hain.
          </Typography>
        </Paper>
      </Container>
    </Box>
  )
}
