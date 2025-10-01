import React from 'react';
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  Avatar,
  Button,
  Paper,
  LinearProgress,
  Chip,
  IconButton,
  Divider
} from '@mui/material';
import {
  Dashboard as DashboardIcon,
  TrendingUp,
  People,
  Assignment,
  Notifications,
  Settings,
  ExitToApp,
  BarChart,
  PieChart,
  Timeline
} from '@mui/icons-material';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Dashboard: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const stats = [
    {
      title: 'Total Projects',
      value: '24',
      change: '+12%',
      icon: <Assignment sx={{ fontSize: 40, color: 'primary.main' }} />,
      color: 'primary'
    },
    {
      title: 'Active Users',
      value: '1,234',
      change: '+8%',
      icon: <People sx={{ fontSize: 40, color: 'success.main' }} />,
      color: 'success'
    },
    {
      title: 'Revenue',
      value: '$45,678',
      change: '+15%',
      icon: <TrendingUp sx={{ fontSize: 40, color: 'warning.main' }} />,
      color: 'warning'
    },
    {
      title: 'Tasks Completed',
      value: '89%',
      change: '+5%',
      icon: <BarChart sx={{ fontSize: 40, color: 'info.main' }} />,
      color: 'info'
    }
  ];

  const recentActivities = [
    { action: 'New project created', time: '2 hours ago', type: 'project' },
    { action: 'User registration completed', time: '4 hours ago', type: 'user' },
    { action: 'Payment received', time: '6 hours ago', type: 'payment' },
    { action: 'System backup completed', time: '8 hours ago', type: 'system' },
    { action: 'New team member added', time: '1 day ago', type: 'team' }
  ];

  const projects = [
    { name: 'E-commerce Platform', progress: 85, status: 'In Progress', dueDate: '2024-02-15' },
    { name: 'Mobile App Development', progress: 60, status: 'In Progress', dueDate: '2024-03-01' },
    { name: 'Website Redesign', progress: 100, status: 'Completed', dueDate: '2024-01-20' },
    { name: 'API Integration', progress: 40, status: 'Planning', dueDate: '2024-02-28' }
  ];

  return (
    <Box sx={{ flexGrow: 1, bgcolor: 'background.default', minHeight: '100vh' }}>
      {/* Header */}
      <Paper elevation={1} sx={{ mb: 3 }}>
        <Container maxWidth="xl">
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', py: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <DashboardIcon sx={{ fontSize: 32, color: 'primary.main' }} />
              <Typography variant="h4" component="h1" fontWeight="bold">
                Dashboard
              </Typography>
            </Box>
            
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <IconButton>
                <Notifications />
              </IconButton>
              <IconButton>
                <Settings />
              </IconButton>
              
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, ml: 2 }}>
                <Avatar sx={{ bgcolor: 'primary.main' }}>
                  {user?.firstName?.[0]}{user?.lastName?.[0]}
                </Avatar>
                <Box>
                  <Typography variant="subtitle1" fontWeight="medium">
                    {user?.firstName} {user?.lastName}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {user?.role}
                  </Typography>
                </Box>
                <Button
                  variant="outlined"
                  startIcon={<ExitToApp />}
                  onClick={handleLogout}
                  size="small"
                >
                  Logout
                </Button>
              </Box>
            </Box>
          </Box>
        </Container>
      </Paper>

      <Container maxWidth="xl">
        {/* Welcome Section */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" gutterBottom>
            Welcome back, {user?.firstName}! 👋
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Here's what's happening with your projects today.
          </Typography>
        </Box>

        {/* Stats Cards */}
        <Grid container spacing={3} sx={{ mb: 4 }}>
          {stats.map((stat, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card elevation={2} sx={{ height: '100%' }}>
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
                    <Box>
                      <Typography variant="h4" fontWeight="bold" gutterBottom>
                        {stat.value}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {stat.title}
                      </Typography>
                    </Box>
                    {stat.icon}
                  </Box>
                  <Chip
                    label={stat.change}
                    color={stat.color as any}
                    size="small"
                    variant="outlined"
                  />
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Grid container spacing={3}>
          {/* Recent Activities */}
          <Grid item xs={12} md={6}>
            <Card elevation={2} sx={{ height: '100%' }}>
              <CardContent>
                <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Timeline color="primary" />
                  Recent Activities
                </Typography>
                <Divider sx={{ mb: 2 }} />
                <Box sx={{ maxHeight: 300, overflow: 'auto' }}>
                  {recentActivities.map((activity, index) => (
                    <Box key={index} sx={{ mb: 2, pb: 2, borderBottom: index < recentActivities.length - 1 ? '1px solid' : 'none', borderColor: 'divider' }}>
                      <Typography variant="body2" fontWeight="medium">
                        {activity.action}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        {activity.time}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Grid>

          {/* Project Progress */}
          <Grid item xs={12} md={6}>
            <Card elevation={2} sx={{ height: '100%' }}>
              <CardContent>
                <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <PieChart color="primary" />
                  Project Progress
                </Typography>
                <Divider sx={{ mb: 2 }} />
                <Box sx={{ maxHeight: 300, overflow: 'auto' }}>
                  {projects.map((project, index) => (
                    <Box key={index} sx={{ mb: 3 }}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                        <Typography variant="body2" fontWeight="medium">
                          {project.name}
                        </Typography>
                        <Chip
                          label={project.status}
                          size="small"
                          color={project.status === 'Completed' ? 'success' : project.status === 'In Progress' ? 'primary' : 'default'}
                          variant="outlined"
                        />
                      </Box>
                      <LinearProgress
                        variant="determinate"
                        value={project.progress}
                        sx={{ mb: 1, height: 6, borderRadius: 3 }}
                      />
                      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography variant="caption" color="text.secondary">
                          {project.progress}% complete
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          Due: {project.dueDate}
                        </Typography>
                      </Box>
                    </Box>
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Quick Actions */}
        <Box sx={{ mt: 4, mb: 4 }}>
          <Typography variant="h6" gutterBottom>
            Quick Actions
          </Typography>
          <Grid container spacing={2}>
            <Grid item>
              <Button variant="contained" startIcon={<Assignment />}>
                New Project
              </Button>
            </Grid>
            <Grid item>
              <Button variant="outlined" startIcon={<People />}>
                Add Team Member
              </Button>
            </Grid>
            <Grid item>
              <Button variant="outlined" startIcon={<BarChart />}>
                View Reports
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Dashboard;