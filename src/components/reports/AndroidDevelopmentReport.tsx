import React, { useState, useMemo } from 'react';
import {
  Container,
  Paper,
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  TextField,
  InputAdornment,
  Chip,
  IconButton,
  Tooltip,
  Card,
  CardContent,
  Grid,
  LinearProgress,
  Avatar,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel
} from '@mui/material';
import {
  Search,
  GetApp,
  Visibility,
  Edit,
  TrendingUp,
  Android,
  Star,
  Speed,
  CheckCircle,
  BugReport,
  PlayArrow
} from '@mui/icons-material';

interface AndroidProjectData {
  id: string;
  appName: string;
  client: string;
  category: string;
  technology: string[];
  status: 'Completed' | 'In Progress' | 'Planning' | 'On Hold' | 'Testing' | 'Play Store Review';
  progress: number;
  startDate: string;
  endDate: string;
  budget: number;
  spent: number;
  teamSize: number;
  lead: string;
  complexity: 'Low' | 'Medium' | 'High' | 'Critical';
  playStoreRating: number;
  downloads: string;
  crashes: number;
  performance: number;
  batteryUsage: number;
  memoryUsage: string;
  appSize: string;
  supportedVersions: string;
  targetSDK: number;
  minSDK: number;
  features: number;
  activities: number;
  testCoverage: number;
  bugs: number;
  codeQuality: number;
  userRetention: number;
  loadTime: number;
  apiCalls: number;
  pushNotifications: boolean;
  inAppPurchases: boolean;
  permissions: number;
  localization: string[];
  security: number;
  deployment: string;
  cicd: string;
  testing: string;
  analytics: string;
  crashReporting: string;
  maintenance: 'Active' | 'Minimal' | 'Legacy';
  lastUpdate: string;
  priority: 'Low' | 'Medium' | 'High' | 'Critical';
}

const AndroidDevelopmentReport: React.FC = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [complexityFilter, setComplexityFilter] = useState('All');

  const projectsData: AndroidProjectData[] = [
    {
      id: 'AND001',
      appName: 'ShopEasy Mobile',
      client: 'RetailMax Corporation',
      category: 'Shopping',
      technology: ['Kotlin', 'Jetpack Compose', 'Room', 'Retrofit'],
      status: 'Completed',
      progress: 100,
      startDate: '2024-01-10',
      endDate: '2024-09-15',
      budget: 195000,
      spent: 187000,
      teamSize: 9,
      lead: 'Priya Sharma',
      complexity: 'High',
      playStoreRating: 4.5,
      downloads: '250K',
      crashes: 0.03,
      performance: 92,
      batteryUsage: 82,
      memoryUsage: '68MB',
      appSize: '42.3MB',
      supportedVersions: 'Android 7.0+',
      targetSDK: 34,
      minSDK: 24,
      features: 48,
      activities: 32,
      testCoverage: 88,
      bugs: 4,
      codeQuality: 91,
      userRetention: 73,
      loadTime: 1.4,
      apiCalls: 22,
      pushNotifications: true,
      inAppPurchases: true,
      permissions: 8,
      localization: ['English', 'Spanish', 'Hindi', 'Portuguese'],
      security: 94,
      deployment: 'Google Play Store',
      cicd: 'GitHub Actions',
      testing: 'Espresso + JUnit',
      analytics: 'Firebase Analytics',
      crashReporting: 'Crashlytics',
      maintenance: 'Active',
      lastUpdate: '2024-12-18',
      priority: 'High'
    },
    {
      id: 'AND002',
      appName: 'FitTracker Pro',
      client: 'HealthTech Solutions',
      category: 'Health & Fitness',
      technology: ['Java', 'Android Views', 'SQLite', 'Google Fit API'],
      status: 'In Progress',
      progress: 76,
      startDate: '2024-03-15',
      endDate: '2024-12-31',
      budget: 165000,
      spent: 118000,
      teamSize: 7,
      lead: 'Marcus Johnson',
      complexity: 'Medium',
      playStoreRating: 0,
      downloads: '0',
      crashes: 0,
      performance: 85,
      batteryUsage: 78,
      memoryUsage: '52MB',
      appSize: '28.7MB',
      supportedVersions: 'Android 8.0+',
      targetSDK: 34,
      minSDK: 26,
      features: 35,
      activities: 24,
      testCoverage: 82,
      bugs: 11,
      codeQuality: 87,
      userRetention: 0,
      loadTime: 1.8,
      apiCalls: 18,
      pushNotifications: true,
      inAppPurchases: false,
      permissions: 12,
      localization: ['English', 'Spanish'],
      security: 89,
      deployment: 'Internal Testing',
      cicd: 'Jenkins',
      testing: 'Espresso + Mockito',
      analytics: 'Google Analytics',
      crashReporting: 'Bugsnag',
      maintenance: 'Active',
      lastUpdate: '2024-12-20',
      priority: 'Medium'
    },
    {
      id: 'AND003',
      appName: 'EduKids Learning',
      client: 'SmartEducation Inc',
      category: 'Education',
      technology: ['Kotlin', 'MVVM', 'Dagger Hilt', 'ExoPlayer'],
      status: 'Testing',
      progress: 94,
      startDate: '2024-02-01',
      endDate: '2024-11-30',
      budget: 140000,
      spent: 128000,
      teamSize: 6,
      lead: 'Sarah Kim',
      complexity: 'Medium',
      playStoreRating: 0,
      downloads: '0',
      crashes: 0,
      performance: 89,
      batteryUsage: 85,
      memoryUsage: '95MB',
      appSize: '78.5MB',
      supportedVersions: 'Android 7.0+',
      targetSDK: 33,
      minSDK: 24,
      features: 42,
      activities: 28,
      testCoverage: 91,
      bugs: 6,
      codeQuality: 90,
      userRetention: 0,
      loadTime: 2.2,
      apiCalls: 15,
      pushNotifications: true,
      inAppPurchases: true,
      permissions: 6,
      localization: ['English', 'Spanish', 'French', 'German'],
      security: 87,
      deployment: 'Alpha Testing',
      cicd: 'GitLab CI/CD',
      testing: 'UI Automator + JUnit',
      analytics: 'Mixpanel',
      crashReporting: 'Sentry',
      maintenance: 'Active',
      lastUpdate: '2024-12-19',
      priority: 'Medium'
    },
    {
      id: 'AND004',
      appName: 'CryptoTrader Mobile',
      client: 'FinanceFlow Ltd',
      category: 'Finance',
      technology: ['Kotlin', 'Jetpack Compose', 'Coroutines', 'WebSocket'],
      status: 'In Progress',
      progress: 68,
      startDate: '2024-04-10',
      endDate: '2025-01-31',
      budget: 220000,
      spent: 142000,
      teamSize: 10,
      lead: 'David Chen',
      complexity: 'Critical',
      playStoreRating: 0,
      downloads: '0',
      crashes: 0,
      performance: 91,
      batteryUsage: 79,
      memoryUsage: '74MB',
      appSize: '35.2MB',
      supportedVersions: 'Android 9.0+',
      targetSDK: 34,
      minSDK: 28,
      features: 52,
      activities: 38,
      testCoverage: 85,
      bugs: 15,
      codeQuality: 89,
      userRetention: 0,
      loadTime: 1.6,
      apiCalls: 45,
      pushNotifications: true,
      inAppPurchases: false,
      permissions: 10,
      localization: ['English', 'Chinese', 'Japanese', 'Korean'],
      security: 97,
      deployment: 'Beta Testing',
      cicd: 'Bitrise',
      testing: 'Espresso + Robolectric',
      analytics: 'Custom Analytics',
      crashReporting: 'Crashlytics',
      maintenance: 'Active',
      lastUpdate: '2024-12-21',
      priority: 'Critical'
    },
    {
      id: 'AND005',
      appName: 'FoodDelivery Express',
      client: 'QuickBite Services',
      category: 'Food & Drink',
      technology: ['Java', 'MVP', 'Volley', 'Google Maps API'],
      status: 'Completed',
      progress: 100,
      startDate: '2023-10-01',
      endDate: '2024-05-15',
      budget: 125000,
      spent: 119000,
      teamSize: 8,
      lead: 'Lisa Rodriguez',
      complexity: 'Medium',
      playStoreRating: 4.2,
      downloads: '180K',
      crashes: 0.08,
      performance: 86,
      batteryUsage: 81,
      memoryUsage: '58MB',
      appSize: '32.1MB',
      supportedVersions: 'Android 6.0+',
      targetSDK: 33,
      minSDK: 23,
      features: 31,
      activities: 22,
      testCoverage: 79,
      bugs: 7,
      codeQuality: 84,
      userRetention: 68,
      loadTime: 1.9,
      apiCalls: 28,
      pushNotifications: true,
      inAppPurchases: false,
      permissions: 9,
      localization: ['English', 'Spanish'],
      security: 83,
      deployment: 'Google Play Store',
      cicd: 'GitHub Actions',
      testing: 'Espresso + JUnit',
      analytics: 'Firebase Analytics',
      crashReporting: 'Crashlytics',
      maintenance: 'Minimal',
      lastUpdate: '2024-10-30',
      priority: 'Low'
    },
    {
      id: 'AND006',
      appName: 'TaskManager Pro',
      client: 'ProductivityHub',
      category: 'Productivity',
      technology: ['Kotlin', 'Clean Architecture', 'Room', 'WorkManager'],
      status: 'Play Store Review',
      progress: 97,
      startDate: '2024-06-01',
      endDate: '2024-12-15',
      budget: 85000,
      spent: 81000,
      teamSize: 5,
      lead: 'Robert Park',
      complexity: 'Low',
      playStoreRating: 0,
      downloads: '0',
      crashes: 0,
      performance: 93,
      batteryUsage: 88,
      memoryUsage: '41MB',
      appSize: '18.9MB',
      supportedVersions: 'Android 8.0+',
      targetSDK: 34,
      minSDK: 26,
      features: 26,
      activities: 18,
      testCoverage: 94,
      bugs: 2,
      codeQuality: 95,
      userRetention: 0,
      loadTime: 1.1,
      apiCalls: 12,
      pushNotifications: true,
      inAppPurchases: true,
      permissions: 5,
      localization: ['English', 'German', 'French'],
      security: 91,
      deployment: 'Play Store Review',
      cicd: 'GitHub Actions',
      testing: 'Espresso + JUnit 5',
      analytics: 'Google Analytics',
      crashReporting: 'Crashlytics',
      maintenance: 'Active',
      lastUpdate: '2024-12-17',
      priority: 'Medium'
    },
    {
      id: 'AND007',
      appName: 'WeatherWise',
      client: 'ClimateData Corp',
      category: 'Weather',
      technology: ['Kotlin', 'Jetpack Compose', 'Retrofit', 'Hilt'],
      status: 'Planning',
      progress: 18,
      startDate: '2024-11-15',
      endDate: '2025-07-31',
      budget: 95000,
      spent: 15000,
      teamSize: 4,
      lead: 'Emma Wilson',
      complexity: 'Low',
      playStoreRating: 0,
      downloads: '0',
      crashes: 0,
      performance: 0,
      batteryUsage: 0,
      memoryUsage: '0MB',
      appSize: '0MB',
      supportedVersions: 'Android 8.0+',
      targetSDK: 34,
      minSDK: 26,
      features: 6,
      activities: 0,
      testCoverage: 0,
      bugs: 0,
      codeQuality: 0,
      userRetention: 0,
      loadTime: 0,
      apiCalls: 0,
      pushNotifications: false,
      inAppPurchases: false,
      permissions: 0,
      localization: ['English'],
      security: 0,
      deployment: 'Development',
      cicd: 'GitHub Actions',
      testing: 'TBD',
      analytics: 'TBD',
      crashReporting: 'TBD',
      maintenance: 'Active',
      lastUpdate: '2024-12-22',
      priority: 'Low'
    },
    {
      id: 'AND008',
      appName: 'SocialHub Connect',
      client: 'ConnectWorld Inc',
      category: 'Social',
      technology: ['Kotlin', 'MVVM', 'Firebase', 'CameraX'],
      status: 'On Hold',
      progress: 52,
      startDate: '2024-05-20',
      endDate: '2025-03-31',
      budget: 180000,
      spent: 85000,
      teamSize: 9,
      lead: 'Alex Thompson',
      complexity: 'High',
      playStoreRating: 0,
      downloads: '0',
      crashes: 0,
      performance: 78,
      batteryUsage: 74,
      memoryUsage: '89MB',
      appSize: '48.7MB',
      supportedVersions: 'Android 8.0+',
      targetSDK: 33,
      minSDK: 26,
      features: 28,
      activities: 25,
      testCoverage: 74,
      bugs: 19,
      codeQuality: 81,
      userRetention: 0,
      loadTime: 2.4,
      apiCalls: 32,
      pushNotifications: true,
      inAppPurchases: true,
      permissions: 15,
      localization: ['English', 'Spanish', 'Portuguese'],
      security: 86,
      deployment: 'Internal Testing',
      cicd: 'Jenkins',
      testing: 'Espresso + Mockito',
      analytics: 'Firebase Analytics',
      crashReporting: 'Crashlytics',
      maintenance: 'Minimal',
      lastUpdate: '2024-09-15',
      priority: 'Low'
    }
  ];

  const filteredData = useMemo(() => {
    return projectsData.filter(project => {
      const matchesSearch = project.appName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           project.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           project.lead.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesStatus = statusFilter === 'All' || project.status === statusFilter;
      const matchesComplexity = complexityFilter === 'All' || project.complexity === complexityFilter;
      
      return matchesSearch && matchesStatus && matchesComplexity;
    });
  }, [searchTerm, statusFilter, complexityFilter]);

  const paginatedData = useMemo(() => {
    const startIndex = page * rowsPerPage;
    return filteredData.slice(startIndex, startIndex + rowsPerPage);
  }, [filteredData, page, rowsPerPage]);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'success';
      case 'In Progress': return 'primary';
      case 'Testing': return 'warning';
      case 'Planning': return 'info';
      case 'On Hold': return 'error';
      case 'Play Store Review': return 'secondary';
      default: return 'default';
    }
  };

  const getComplexityColor = (complexity: string) => {
    switch (complexity) {
      case 'Low': return 'success';
      case 'Medium': return 'warning';
      case 'High': return 'error';
      case 'Critical': return 'error';
      default: return 'default';
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const totalProjects = projectsData.length;
  const completedProjects = projectsData.filter(p => p.status === 'Completed').length;
  const inProgressProjects = projectsData.filter(p => p.status === 'In Progress').length;
  const avgRating = Math.round((projectsData.reduce((sum, p) => sum + p.playStoreRating, 0) / completedProjects) * 10) / 10;

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom fontWeight="bold">
          Android Development Report
        </Typography>
        <Typography variant="h6" color="text.secondary" gutterBottom>
          Comprehensive analysis of Android mobile application development projects and Play Store performance
        </Typography>
      </Box>

      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Android sx={{ color: 'success.main', mr: 1 }} />
                <Typography variant="h6">Total Apps</Typography>
              </Box>
              <Typography variant="h4" fontWeight="bold">{totalProjects}</Typography>
              <Typography variant="body2" color="text.secondary">
                Android applications
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <CheckCircle sx={{ color: 'success.main', mr: 1 }} />
                <Typography variant="h6">Published</Typography>
              </Box>
              <Typography variant="h4" fontWeight="bold">{completedProjects}</Typography>
              <Typography variant="body2" color="text.secondary">
                Play Store live
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <TrendingUp sx={{ color: 'warning.main', mr: 1 }} />
                <Typography variant="h6">In Development</Typography>
              </Box>
              <Typography variant="h4" fontWeight="bold">{inProgressProjects}</Typography>
              <Typography variant="body2" color="text.secondary">
                Active projects
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Star sx={{ color: 'info.main', mr: 1 }} />
                <Typography variant="h6">Avg Rating</Typography>
              </Box>
              <Typography variant="h4" fontWeight="bold">{avgRating || 'N/A'}</Typography>
              <Typography variant="body2" color="text.secondary">
                Play Store rating
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Paper sx={{ p: 3, mb: 3 }}>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} md={4}>
            <TextField
              fullWidth
              placeholder="Search apps, clients, or leads..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          
          <Grid item xs={12} md={3}>
            <FormControl fullWidth>
              <InputLabel>Status</InputLabel>
              <Select
                value={statusFilter}
                label="Status"
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <MenuItem value="All">All Statuses</MenuItem>
                <MenuItem value="Completed">Completed</MenuItem>
                <MenuItem value="In Progress">In Progress</MenuItem>
                <MenuItem value="Testing">Testing</MenuItem>
                <MenuItem value="Planning">Planning</MenuItem>
                <MenuItem value="On Hold">On Hold</MenuItem>
                <MenuItem value="Play Store Review">Play Store Review</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          
          <Grid item xs={12} md={3}>
            <FormControl fullWidth>
              <InputLabel>Complexity</InputLabel>
              <Select
                value={complexityFilter}
                label="Complexity"
                onChange={(e) => setComplexityFilter(e.target.value)}
              >
                <MenuItem value="All">All Complexities</MenuItem>
                <MenuItem value="Low">Low</MenuItem>
                <MenuItem value="Medium">Medium</MenuItem>
                <MenuItem value="High">High</MenuItem>
                <MenuItem value="Critical">Critical</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          
          <Grid item xs={12} md={2}>
            <Button
              fullWidth
              variant="outlined"
              startIcon={<GetApp />}
              sx={{ height: 56 }}
            >
              Export
            </Button>
          </Grid>
        </Grid>
      </Paper>

      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer sx={{ maxHeight: 800 }}>
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: 'bold', minWidth: 100 }}>App ID</TableCell>
                <TableCell sx={{ fontWeight: 'bold', minWidth: 200 }}>App Name</TableCell>
                <TableCell sx={{ fontWeight: 'bold', minWidth: 150 }}>Client</TableCell>
                <TableCell sx={{ fontWeight: 'bold', minWidth: 120 }}>Category</TableCell>
                <TableCell sx={{ fontWeight: 'bold', minWidth: 200 }}>Technologies</TableCell>
                <TableCell sx={{ fontWeight: 'bold', minWidth: 140 }}>Status</TableCell>
                <TableCell sx={{ fontWeight: 'bold', minWidth: 100 }}>Progress</TableCell>
                <TableCell sx={{ fontWeight: 'bold', minWidth: 120 }}>Budget</TableCell>
                <TableCell sx={{ fontWeight: 'bold', minWidth: 100 }}>Team Size</TableCell>
                <TableCell sx={{ fontWeight: 'bold', minWidth: 150 }}>Project Lead</TableCell>
                <TableCell sx={{ fontWeight: 'bold', minWidth: 120 }}>Complexity</TableCell>
                <TableCell sx={{ fontWeight: 'bold', minWidth: 120 }}>Play Store Rating</TableCell>
                <TableCell sx={{ fontWeight: 'bold', minWidth: 100 }}>Downloads</TableCell>
                <TableCell sx={{ fontWeight: 'bold', minWidth: 120 }}>Performance</TableCell>
                <TableCell sx={{ fontWeight: 'bold', minWidth: 100 }}>App Size</TableCell>
                <TableCell sx={{ fontWeight: 'bold', minWidth: 120 }}>Memory Usage</TableCell>
                <TableCell sx={{ fontWeight: 'bold', minWidth: 150 }}>Android Version</TableCell>
                <TableCell sx={{ fontWeight: 'bold', minWidth: 100 }}>Target SDK</TableCell>
                <TableCell sx={{ fontWeight: 'bold', minWidth: 100 }}>Features</TableCell>
                <TableCell sx={{ fontWeight: 'bold', minWidth: 100 }}>Activities</TableCell>
                <TableCell sx={{ fontWeight: 'bold', minWidth: 120 }}>Test Coverage</TableCell>
                <TableCell sx={{ fontWeight: 'bold', minWidth: 80 }}>Bugs</TableCell>
                <TableCell sx={{ fontWeight: 'bold', minWidth: 120 }}>User Retention</TableCell>
                <TableCell sx={{ fontWeight: 'bold', minWidth: 120 }}>Load Time</TableCell>
                <TableCell sx={{ fontWeight: 'bold', minWidth: 120 }}>Push Notifications</TableCell>
                <TableCell sx={{ fontWeight: 'bold', minWidth: 120 }}>In-App Purchases</TableCell>
                <TableCell sx={{ fontWeight: 'bold', minWidth: 100 }}>Permissions</TableCell>
                <TableCell sx={{ fontWeight: 'bold', minWidth: 150 }}>Localization</TableCell>
                <TableCell sx={{ fontWeight: 'bold', minWidth: 100 }}>Security</TableCell>
                <TableCell sx={{ fontWeight: 'bold', minWidth: 120 }}>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {paginatedData.map((project) => (
                <TableRow key={project.id} hover>
                  <TableCell>
                    <Typography variant="body2" fontWeight="medium">
                      {project.id}
                    </Typography>
                  </TableCell>
                  
                  <TableCell>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <PlayArrow sx={{ fontSize: 16, color: 'success.main' }} />
                      <Typography variant="body2" fontWeight="medium">
                        {project.appName}
                      </Typography>
                    </Box>
                  </TableCell>
                  
                  <TableCell>
                    <Typography variant="body2">
                      {project.client}
                    </Typography>
                  </TableCell>
                  
                  <TableCell>
                    <Chip
                      label={project.category}
                      size="small"
                      variant="outlined"
                      color="info"
                    />
                  </TableCell>
                  
                  <TableCell>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                      {project.technology.map((tech, index) => (
                        <Chip
                          key={index}
                          label={tech}
                          size="small"
                          variant="outlined"
                          sx={{ fontSize: '0.75rem' }}
                        />
                      ))}
                    </Box>
                  </TableCell>
                  
                  <TableCell>
                    <Chip
                      label={project.status}
                      color={getStatusColor(project.status) as any}
                      size="small"
                    />
                  </TableCell>
                  
                  <TableCell>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <LinearProgress
                        variant="determinate"
                        value={project.progress}
                        sx={{ width: 60, height: 6, borderRadius: 3 }}
                      />
                      <Typography variant="body2" sx={{ minWidth: 35 }}>
                        {project.progress}%
                      </Typography>
                    </Box>
                  </TableCell>
                  
                  <TableCell>
                    <Typography variant="body2" fontWeight="medium">
                      {formatCurrency(project.budget)}
                    </Typography>
                  </TableCell>
                  
                  <TableCell>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Avatar sx={{ width: 24, height: 24, fontSize: '0.75rem' }}>
                        {project.teamSize}
                      </Avatar>
                    </Box>
                  </TableCell>
                  
                  <TableCell>
                    <Typography variant="body2">
                      {project.lead}
                    </Typography>
                  </TableCell>
                  
                  <TableCell>
                    <Chip
                      label={project.complexity}
                      color={getComplexityColor(project.complexity) as any}
                      size="small"
                      variant="outlined"
                    />
                  </TableCell>
                  
                  <TableCell>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Star sx={{ fontSize: 16, color: 'warning.main' }} />
                      <Typography variant="body2" fontWeight="medium">
                        {project.playStoreRating || 'N/A'}
                      </Typography>
                    </Box>
                  </TableCell>
                  
                  <TableCell>
                    <Typography variant="body2" fontWeight="medium">
                      {project.downloads}
                    </Typography>
                  </TableCell>
                  
                  <TableCell>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <LinearProgress
                        variant="determinate"
                        value={project.performance}
                        color={project.performance >= 90 ? 'success' : project.performance >= 80 ? 'warning' : 'error'}
                        sx={{ width: 50, height: 4, borderRadius: 2 }}
                      />
                      <Typography variant="body2">
                        {project.performance}%
                      </Typography>
                    </Box>
                  </TableCell>
                  
                  <TableCell>
                    <Typography variant="body2">
                      {project.appSize}
                    </Typography>
                  </TableCell>
                  
                  <TableCell>
                    <Typography variant="body2">
                      {project.memoryUsage}
                    </Typography>
                  </TableCell>
                  
                  <TableCell>
                    <Typography variant="body2">
                      {project.supportedVersions}
                    </Typography>
                  </TableCell>
                  
                  <TableCell>
                    <Typography variant="body2" fontWeight="medium">
                      API {project.targetSDK}
                    </Typography>
                  </TableCell>
                  
                  <TableCell>
                    <Typography variant="body2" fontWeight="medium">
                      {project.features}
                    </Typography>
                  </TableCell>
                  
                  <TableCell>
                    <Typography variant="body2" fontWeight="medium">
                      {project.activities}
                    </Typography>
                  </TableCell>
                  
                  <TableCell>
                    <LinearProgress
                      variant="determinate"
                      value={project.testCoverage}
                      color={project.testCoverage >= 85 ? 'success' : project.testCoverage >= 70 ? 'warning' : 'error'}
                      sx={{ width: 50, height: 4, borderRadius: 2 }}
                    />
                  </TableCell>
                  
                  <TableCell>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <BugReport 
                        sx={{ 
                          fontSize: 16, 
                          color: project.bugs <= 5 ? 'success.main' : project.bugs <= 10 ? 'warning.main' : 'error.main' 
                        }} 
                      />
                      <Typography variant="body2">
                        {project.bugs}
                      </Typography>
                    </Box>
                  </TableCell>
                  
                  <TableCell>
                    <Typography variant="body2">
                      {project.userRetention}%
                    </Typography>
                  </TableCell>
                  
                  <TableCell>
                    <Typography 
                      variant="body2"
                      color={project.loadTime <= 1.5 ? 'success.main' : project.loadTime <= 2.5 ? 'warning.main' : 'error.main'}
                    >
                      {project.loadTime}s
                    </Typography>
                  </TableCell>
                  
                  <TableCell>
                    <Chip
                      label={project.pushNotifications ? 'Yes' : 'No'}
                      color={project.pushNotifications ? 'success' : 'default'}
                      size="small"
                      variant="outlined"
                    />
                  </TableCell>
                  
                  <TableCell>
                    <Chip
                      label={project.inAppPurchases ? 'Yes' : 'No'}
                      color={project.inAppPurchases ? 'success' : 'default'}
                      size="small"
                      variant="outlined"
                    />
                  </TableCell>
                  
                  <TableCell>
                    <Typography variant="body2" fontWeight="medium">
                      {project.permissions}
                    </Typography>
                  </TableCell>
                  
                  <TableCell>
                    <Typography variant="body2">
                      {project.localization.length} languages
                    </Typography>
                  </TableCell>
                  
                  <TableCell>
                    <Typography variant="body2">
                      {project.security}%
                    </Typography>
                  </TableCell>
                  
                  <TableCell>
                    <Box sx={{ display: 'flex', gap: 0.5 }}>
                      <Tooltip title="View Details">
                        <IconButton size="small">
                          <Visibility fontSize="small" />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Edit Project">
                        <IconButton size="small">
                          <Edit fontSize="small" />
                        </IconButton>
                      </Tooltip>
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        
        <TablePagination
          rowsPerPageOptions={[5, 10, 25, 50]}
          component="div"
          count={filteredData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Container>
  );
};

export default AndroidDevelopmentReport;