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
  Devices,
  Star,
  Speed,
  CheckCircle,
  BugReport,
  PhoneAndroid,
  PhoneIphone
} from '@mui/icons-material';

interface CrossPlatformProjectData {
  id: string;
  appName: string;
  client: string;
  category: string;
  framework: string;
  technology: string[];
  status: 'Completed' | 'In Progress' | 'Planning' | 'On Hold' | 'Testing' | 'Store Review';
  progress: number;
  startDate: string;
  endDate: string;
  budget: number;
  spent: number;
  teamSize: number;
  lead: string;
  complexity: 'Low' | 'Medium' | 'High' | 'Critical';
  platforms: string[];
  iosRating: number;
  androidRating: number;
  iosDownloads: string;
  androidDownloads: string;
  crashes: number;
  performance: number;
  batteryUsage: number;
  memoryUsage: string;
  appSize: string;
  codeSharing: number;
  features: number;
  screens: number;
  testCoverage: number;
  bugs: number;
  codeQuality: number;
  userRetention: number;
  loadTime: number;
  apiCalls: number;
  pushNotifications: boolean;
  inAppPurchases: boolean;
  offlineSupport: boolean;
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

const CrossPlatformReport: React.FC = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [complexityFilter, setComplexityFilter] = useState('All');

  const projectsData: CrossPlatformProjectData[] = [
    {
      id: 'CP001',
      appName: 'UniCommerce Mobile',
      client: 'GlobalTrade Solutions',
      category: 'Business',
      framework: 'React Native',
      technology: ['React Native', 'Redux', 'Firebase', 'Stripe API'],
      status: 'Completed',
      progress: 100,
      startDate: '2024-01-05',
      endDate: '2024-08-20',
      budget: 240000,
      spent: 228000,
      teamSize: 11,
      lead: 'Maria Gonzalez',
      complexity: 'High',
      platforms: ['iOS', 'Android'],
      iosRating: 4.6,
      androidRating: 4.4,
      iosDownloads: '85K',
      androidDownloads: '142K',
      crashes: 0.04,
      performance: 91,
      batteryUsage: 83,
      memoryUsage: '72MB',
      appSize: '38.5MB',
      codeSharing: 87,
      features: 56,
      screens: 42,
      testCoverage: 89,
      bugs: 5,
      codeQuality: 92,
      userRetention: 76,
      loadTime: 1.6,
      apiCalls: 28,
      pushNotifications: true,
      inAppPurchases: true,
      offlineSupport: true,
      localization: ['English', 'Spanish', 'French', 'German', 'Chinese'],
      security: 94,
      deployment: 'App Store + Play Store',
      cicd: 'GitHub Actions',
      testing: 'Jest + Detox',
      analytics: 'Firebase Analytics',
      crashReporting: 'Crashlytics',
      maintenance: 'Active',
      lastUpdate: '2024-12-15',
      priority: 'High'
    },
    {
      id: 'CP002',
      appName: 'HealthTracker Plus',
      client: 'WellnessTech Corp',
      category: 'Health & Fitness',
      framework: 'Flutter',
      technology: ['Flutter', 'Dart', 'Provider', 'SQLite'],
      status: 'In Progress',
      progress: 78,
      startDate: '2024-03-10',
      endDate: '2024-12-31',
      budget: 185000,
      spent: 132000,
      teamSize: 8,
      lead: 'Raj Patel',
      complexity: 'Medium',
      platforms: ['iOS', 'Android', 'Web'],
      iosRating: 0,
      androidRating: 0,
      iosDownloads: '0',
      androidDownloads: '0',
      crashes: 0,
      performance: 88,
      batteryUsage: 81,
      memoryUsage: '58MB',
      appSize: '32.1MB',
      codeSharing: 95,
      features: 43,
      screens: 35,
      testCoverage: 85,
      bugs: 12,
      codeQuality: 89,
      userRetention: 0,
      loadTime: 1.4,
      apiCalls: 22,
      pushNotifications: true,
      inAppPurchases: false,
      offlineSupport: true,
      localization: ['English', 'Spanish', 'Hindi'],
      security: 91,
      deployment: 'Beta Testing',
      cicd: 'Codemagic',
      testing: 'Flutter Test + Integration Tests',
      analytics: 'Google Analytics',
      crashReporting: 'Sentry',
      maintenance: 'Active',
      lastUpdate: '2024-12-20',
      priority: 'Medium'
    },
    {
      id: 'CP003',
      appName: 'EduConnect Learning',
      client: 'SmartEducation Inc',
      category: 'Education',
      framework: 'Xamarin',
      technology: ['Xamarin.Forms', 'C#', 'Azure', 'SignalR'],
      status: 'Testing',
      progress: 93,
      startDate: '2024-02-15',
      endDate: '2024-11-30',
      budget: 165000,
      spent: 148000,
      teamSize: 7,
      lead: 'Jennifer Kim',
      complexity: 'Medium',
      platforms: ['iOS', 'Android', 'Windows'],
      iosRating: 0,
      androidRating: 0,
      iosDownloads: '0',
      androidDownloads: '0',
      crashes: 0,
      performance: 86,
      batteryUsage: 79,
      memoryUsage: '68MB',
      appSize: '45.2MB',
      codeSharing: 82,
      features: 38,
      screens: 29,
      testCoverage: 87,
      bugs: 8,
      codeQuality: 88,
      userRetention: 0,
      loadTime: 1.8,
      apiCalls: 18,
      pushNotifications: true,
      inAppPurchases: true,
      offlineSupport: false,
      localization: ['English', 'Spanish', 'French'],
      security: 89,
      deployment: 'Alpha Testing',
      cicd: 'Azure DevOps',
      testing: 'NUnit + Xamarin.UITest',
      analytics: 'App Center Analytics',
      crashReporting: 'App Center Crashes',
      maintenance: 'Active',
      lastUpdate: '2024-12-18',
      priority: 'Medium'
    },
    {
      id: 'CP004',
      appName: 'CryptoWallet Universal',
      client: 'BlockChain Innovations',
      category: 'Finance',
      framework: 'React Native',
      technology: ['React Native', 'TypeScript', 'Redux Toolkit', 'Web3'],
      status: 'In Progress',
      progress: 65,
      startDate: '2024-04-20',
      endDate: '2025-02-28',
      budget: 320000,
      spent: 195000,
      teamSize: 14,
      lead: 'Alex Chen',
      complexity: 'Critical',
      platforms: ['iOS', 'Android'],
      iosRating: 0,
      androidRating: 0,
      iosDownloads: '0',
      androidDownloads: '0',
      crashes: 0,
      performance: 89,
      batteryUsage: 77,
      memoryUsage: '85MB',
      appSize: '42.8MB',
      codeSharing: 91,
      features: 62,
      screens: 48,
      testCoverage: 91,
      bugs: 18,
      codeQuality: 93,
      userRetention: 0,
      loadTime: 1.3,
      apiCalls: 45,
      pushNotifications: true,
      inAppPurchases: false,
      offlineSupport: false,
      localization: ['English', 'Chinese', 'Japanese', 'Korean'],
      security: 98,
      deployment: 'Internal Testing',
      cicd: 'Bitrise',
      testing: 'Jest + Detox + Security Tests',
      analytics: 'Custom Analytics',
      crashReporting: 'Bugsnag',
      maintenance: 'Active',
      lastUpdate: '2024-12-22',
      priority: 'Critical'
    },
    {
      id: 'CP005',
      appName: 'FoodieExpress Delivery',
      client: 'QuickBite Services',
      category: 'Food & Drink',
      framework: 'Flutter',
      technology: ['Flutter', 'Bloc', 'Google Maps', 'Firebase'],
      status: 'Completed',
      progress: 100,
      startDate: '2023-09-15',
      endDate: '2024-04-30',
      budget: 145000,
      spent: 138000,
      teamSize: 6,
      lead: 'Carlos Rodriguez',
      complexity: 'Medium',
      platforms: ['iOS', 'Android'],
      iosRating: 4.3,
      androidRating: 4.1,
      iosDownloads: '62K',
      androidDownloads: '98K',
      crashes: 0.06,
      performance: 87,
      batteryUsage: 84,
      memoryUsage: '54MB',
      appSize: '28.9MB',
      codeSharing: 93,
      features: 34,
      screens: 26,
      testCoverage: 83,
      bugs: 6,
      codeQuality: 86,
      userRetention: 71,
      loadTime: 1.7,
      apiCalls: 24,
      pushNotifications: true,
      inAppPurchases: false,
      offlineSupport: true,
      localization: ['English', 'Spanish'],
      security: 85,
      deployment: 'App Store + Play Store',
      cicd: 'GitHub Actions',
      testing: 'Flutter Test + Golden Tests',
      analytics: 'Firebase Analytics',
      crashReporting: 'Crashlytics',
      maintenance: 'Minimal',
      lastUpdate: '2024-11-15',
      priority: 'Low'
    },
    {
      id: 'CP006',
      appName: 'TaskMaster Pro',
      client: 'ProductivityHub',
      category: 'Productivity',
      framework: 'React Native',
      technology: ['React Native', 'MobX', 'Realm', 'Push Notifications'],
      status: 'Store Review',
      progress: 98,
      startDate: '2024-05-01',
      endDate: '2024-12-15',
      budget: 95000,
      spent: 91000,
      teamSize: 5,
      lead: 'Sarah Johnson',
      complexity: 'Low',
      platforms: ['iOS', 'Android'],
      iosRating: 0,
      androidRating: 0,
      iosDownloads: '0',
      androidDownloads: '0',
      crashes: 0,
      performance: 92,
      batteryUsage: 89,
      memoryUsage: '41MB',
      appSize: '22.3MB',
      codeSharing: 89,
      features: 28,
      screens: 20,
      testCoverage: 94,
      bugs: 2,
      codeQuality: 95,
      userRetention: 0,
      loadTime: 1.1,
      apiCalls: 14,
      pushNotifications: true,
      inAppPurchases: true,
      offlineSupport: true,
      localization: ['English', 'German', 'French'],
      security: 92,
      deployment: 'Store Review',
      cicd: 'GitHub Actions',
      testing: 'Jest + Detox',
      analytics: 'Mixpanel',
      crashReporting: 'Crashlytics',
      maintenance: 'Active',
      lastUpdate: '2024-12-19',
      priority: 'Medium'
    },
    {
      id: 'CP007',
      appName: 'WeatherWise Global',
      client: 'ClimateData Corp',
      category: 'Weather',
      framework: 'Flutter',
      technology: ['Flutter', 'Riverpod', 'Dio', 'Hive'],
      status: 'Planning',
      progress: 22,
      startDate: '2024-11-01',
      endDate: '2025-07-31',
      budget: 115000,
      spent: 18000,
      teamSize: 4,
      lead: 'Emma Wilson',
      complexity: 'Low',
      platforms: ['iOS', 'Android', 'Web'],
      iosRating: 0,
      androidRating: 0,
      iosDownloads: '0',
      androidDownloads: '0',
      crashes: 0,
      performance: 0,
      batteryUsage: 0,
      memoryUsage: '0MB',
      appSize: '0MB',
      codeSharing: 0,
      features: 8,
      screens: 0,
      testCoverage: 0,
      bugs: 0,
      codeQuality: 0,
      userRetention: 0,
      loadTime: 0,
      apiCalls: 0,
      pushNotifications: false,
      inAppPurchases: false,
      offlineSupport: false,
      localization: ['English'],
      security: 0,
      deployment: 'Development',
      cicd: 'GitHub Actions',
      testing: 'TBD',
      analytics: 'TBD',
      crashReporting: 'TBD',
      maintenance: 'Active',
      lastUpdate: '2024-12-23',
      priority: 'Low'
    },
    {
      id: 'CP008',
      appName: 'SocialHub Connect',
      client: 'ConnectWorld Inc',
      category: 'Social',
      framework: 'React Native',
      technology: ['React Native', 'GraphQL', 'Apollo', 'WebRTC'],
      status: 'On Hold',
      progress: 48,
      startDate: '2024-06-10',
      endDate: '2025-04-30',
      budget: 275000,
      spent: 118000,
      teamSize: 12,
      lead: 'Michael Thompson',
      complexity: 'High',
      platforms: ['iOS', 'Android'],
      iosRating: 0,
      androidRating: 0,
      iosDownloads: '0',
      androidDownloads: '0',
      crashes: 0,
      performance: 79,
      batteryUsage: 75,
      memoryUsage: '92MB',
      appSize: '52.1MB',
      codeSharing: 85,
      features: 32,
      screens: 28,
      testCoverage: 76,
      bugs: 22,
      codeQuality: 82,
      userRetention: 0,
      loadTime: 2.3,
      apiCalls: 38,
      pushNotifications: true,
      inAppPurchases: true,
      offlineSupport: false,
      localization: ['English', 'Spanish', 'Portuguese'],
      security: 87,
      deployment: 'Internal Testing',
      cicd: 'Jenkins',
      testing: 'Jest + Detox',
      analytics: 'Firebase Analytics',
      crashReporting: 'Crashlytics',
      maintenance: 'Minimal',
      lastUpdate: '2024-09-20',
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
      case 'Store Review': return 'secondary';
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
  const avgCodeSharing = Math.round(projectsData.reduce((sum, p) => sum + p.codeSharing, 0) / totalProjects);

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom fontWeight="bold">
          Cross-Platform Development Report
        </Typography>
        <Typography variant="h6" color="text.secondary" gutterBottom>
          Comprehensive analysis of cross-platform mobile application development projects and multi-store performance
        </Typography>
      </Box>

      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Devices sx={{ color: 'primary.main', mr: 1 }} />
                <Typography variant="h6">Total Apps</Typography>
              </Box>
              <Typography variant="h4" fontWeight="bold">{totalProjects}</Typography>
              <Typography variant="body2" color="text.secondary">
                Cross-platform apps
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
                Multi-store live
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
                <Speed sx={{ color: 'info.main', mr: 1 }} />
                <Typography variant="h6">Code Sharing</Typography>
              </Box>
              <Typography variant="h4" fontWeight="bold">{avgCodeSharing}%</Typography>
              <Typography variant="body2" color="text.secondary">
                Average efficiency
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
                <MenuItem value="Store Review">Store Review</MenuItem>
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
                <TableCell sx={{ fontWeight: 'bold', minWidth: 120 }}>Framework</TableCell>
                <TableCell sx={{ fontWeight: 'bold', minWidth: 200 }}>Technologies</TableCell>
                <TableCell sx={{ fontWeight: 'bold', minWidth: 140 }}>Status</TableCell>
                <TableCell sx={{ fontWeight: 'bold', minWidth: 100 }}>Progress</TableCell>
                <TableCell sx={{ fontWeight: 'bold', minWidth: 120 }}>Budget</TableCell>
                <TableCell sx={{ fontWeight: 'bold', minWidth: 100 }}>Team Size</TableCell>
                <TableCell sx={{ fontWeight: 'bold', minWidth: 150 }}>Project Lead</TableCell>
                <TableCell sx={{ fontWeight: 'bold', minWidth: 120 }}>Complexity</TableCell>
                <TableCell sx={{ fontWeight: 'bold', minWidth: 150 }}>Platforms</TableCell>
                <TableCell sx={{ fontWeight: 'bold', minWidth: 120 }}>iOS Rating</TableCell>
                <TableCell sx={{ fontWeight: 'bold', minWidth: 120 }}>Android Rating</TableCell>
                <TableCell sx={{ fontWeight: 'bold', minWidth: 120 }}>iOS Downloads</TableCell>
                <TableCell sx={{ fontWeight: 'bold', minWidth: 120 }}>Android Downloads</TableCell>
                <TableCell sx={{ fontWeight: 'bold', minWidth: 120 }}>Performance</TableCell>
                <TableCell sx={{ fontWeight: 'bold', minWidth: 100 }}>App Size</TableCell>
                <TableCell sx={{ fontWeight: 'bold', minWidth: 120 }}>Code Sharing</TableCell>
                <TableCell sx={{ fontWeight: 'bold', minWidth: 100 }}>Features</TableCell>
                <TableCell sx={{ fontWeight: 'bold', minWidth: 100 }}>Screens</TableCell>
                <TableCell sx={{ fontWeight: 'bold', minWidth: 120 }}>Test Coverage</TableCell>
                <TableCell sx={{ fontWeight: 'bold', minWidth: 80 }}>Bugs</TableCell>
                <TableCell sx={{ fontWeight: 'bold', minWidth: 120 }}>User Retention</TableCell>
                <TableCell sx={{ fontWeight: 'bold', minWidth: 120 }}>Load Time</TableCell>
                <TableCell sx={{ fontWeight: 'bold', minWidth: 120 }}>Push Notifications</TableCell>
                <TableCell sx={{ fontWeight: 'bold', minWidth: 120 }}>Offline Support</TableCell>
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
                      <Devices sx={{ fontSize: 16, color: 'primary.main' }} />
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
                    <Chip
                      label={project.framework}
                      size="small"
                      variant="filled"
                      color="primary"
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
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                      {project.platforms.map((platform, index) => (
                        <Chip
                          key={index}
                          label={platform}
                          size="small"
                          variant="outlined"
                          icon={platform === 'iOS' ? <PhoneIphone sx={{ fontSize: 14 }} /> : 
                                platform === 'Android' ? <PhoneAndroid sx={{ fontSize: 14 }} /> : undefined}
                          sx={{ fontSize: '0.7rem' }}
                        />
                      ))}
                    </Box>
                  </TableCell>
                  
                  <TableCell>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <PhoneIphone sx={{ fontSize: 14, color: 'text.secondary' }} />
                      <Star sx={{ fontSize: 14, color: 'warning.main' }} />
                      <Typography variant="body2">
                        {project.iosRating || 'N/A'}
                      </Typography>
                    </Box>
                  </TableCell>
                  
                  <TableCell>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <PhoneAndroid sx={{ fontSize: 14, color: 'success.main' }} />
                      <Star sx={{ fontSize: 14, color: 'warning.main' }} />
                      <Typography variant="body2">
                        {project.androidRating || 'N/A'}
                      </Typography>
                    </Box>
                  </TableCell>
                  
                  <TableCell>
                    <Typography variant="body2" fontWeight="medium">
                      {project.iosDownloads}
                    </Typography>
                  </TableCell>
                  
                  <TableCell>
                    <Typography variant="body2" fontWeight="medium">
                      {project.androidDownloads}
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
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <LinearProgress
                        variant="determinate"
                        value={project.codeSharing}
                        color={project.codeSharing >= 90 ? 'success' : project.codeSharing >= 80 ? 'warning' : 'error'}
                        sx={{ width: 50, height: 4, borderRadius: 2 }}
                      />
                      <Typography variant="body2">
                        {project.codeSharing}%
                      </Typography>
                    </Box>
                  </TableCell>
                  
                  <TableCell>
                    <Typography variant="body2" fontWeight="medium">
                      {project.features}
                    </Typography>
                  </TableCell>
                  
                  <TableCell>
                    <Typography variant="body2" fontWeight="medium">
                      {project.screens}
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
                      label={project.offlineSupport ? 'Yes' : 'No'}
                      color={project.offlineSupport ? 'success' : 'default'}
                      size="small"
                      variant="outlined"
                    />
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

export default CrossPlatformReport;