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
  PhoneIphone,
  Star,
  Speed,
  CheckCircle,
  Apple,
  BugReport
} from '@mui/icons-material';

interface IOSProjectData {
  id: string;
  appName: string;
  client: string;
  category: string;
  technology: string[];
  status: 'Completed' | 'In Progress' | 'Planning' | 'On Hold' | 'Testing' | 'App Store Review';
  progress: number;
  startDate: string;
  endDate: string;
  budget: number;
  spent: number;
  teamSize: number;
  lead: string;
  complexity: 'Low' | 'Medium' | 'High' | 'Critical';
  appStoreRating: number;
  downloads: string;
  crashes: number;
  performance: number;
  batteryUsage: number;
  memoryUsage: string;
  appSize: string;
  supportedDevices: string[];
  minIOSVersion: string;
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
  accessibility: number;
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

const IOSDevelopmentReport: React.FC = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [complexityFilter, setComplexityFilter] = useState('All');

  const projectsData: IOSProjectData[] = [
    {
      id: 'iOS001',
      appName: 'FinanceTracker Pro',
      client: 'MoneyWise Solutions',
      category: 'Finance',
      technology: ['Swift', 'SwiftUI', 'Core Data', 'CloudKit'],
      status: 'Completed',
      progress: 100,
      startDate: '2024-01-15',
      endDate: '2024-08-30',
      budget: 180000,
      spent: 172000,
      teamSize: 8,
      lead: 'Sarah Johnson',
      complexity: 'High',
      appStoreRating: 4.7,
      downloads: '125K',
      crashes: 0.02,
      performance: 94,
      batteryUsage: 85,
      memoryUsage: '45MB',
      appSize: '28.5MB',
      supportedDevices: ['iPhone', 'iPad', 'Apple Watch'],
      minIOSVersion: '15.0',
      features: 42,
      screens: 28,
      testCoverage: 91,
      bugs: 3,
      codeQuality: 93,
      userRetention: 78,
      loadTime: 1.2,
      apiCalls: 15,
      pushNotifications: true,
      inAppPurchases: true,
      accessibility: 96,
      localization: ['English', 'Spanish', 'French', 'German'],
      security: 97,
      deployment: 'App Store Connect',
      cicd: 'Xcode Cloud',
      testing: 'XCTest + UI Testing',
      analytics: 'Firebase Analytics',
      crashReporting: 'Crashlytics',
      maintenance: 'Active',
      lastUpdate: '2024-12-15',
      priority: 'High'
    },
    {
      id: 'iOS002',
      appName: 'HealthSync',
      client: 'WellCare Medical',
      category: 'Health & Fitness',
      technology: ['Swift', 'UIKit', 'HealthKit', 'ResearchKit'],
      status: 'In Progress',
      progress: 82,
      startDate: '2024-03-01',
      endDate: '2024-12-31',
      budget: 220000,
      spent: 165000,
      teamSize: 10,
      lead: 'Dr. Michael Chen',
      complexity: 'Critical',
      appStoreRating: 0,
      downloads: '0',
      crashes: 0,
      performance: 89,
      batteryUsage: 78,
      memoryUsage: '62MB',
      appSize: '35.2MB',
      supportedDevices: ['iPhone', 'Apple Watch'],
      minIOSVersion: '16.0',
      features: 58,
      screens: 35,
      testCoverage: 87,
      bugs: 12,
      codeQuality: 90,
      userRetention: 0,
      loadTime: 1.8,
      apiCalls: 28,
      pushNotifications: true,
      inAppPurchases: false,
      accessibility: 94,
      localization: ['English', 'Spanish'],
      security: 98,
      deployment: 'TestFlight',
      cicd: 'GitHub Actions',
      testing: 'XCTest + Quick/Nimble',
      analytics: 'Apple Analytics',
      crashReporting: 'Bugsnag',
      maintenance: 'Active',
      lastUpdate: '2024-12-20',
      priority: 'Critical'
    },
    {
      id: 'iOS003',
      appName: 'EduLearn Kids',
      client: 'BrightMinds Education',
      category: 'Education',
      technology: ['Swift', 'SwiftUI', 'ARKit', 'AVFoundation'],
      status: 'Testing',
      progress: 95,
      startDate: '2024-02-10',
      endDate: '2024-11-15',
      budget: 150000,
      spent: 138000,
      teamSize: 7,
      lead: 'Emily Rodriguez',
      complexity: 'Medium',
      appStoreRating: 0,
      downloads: '0',
      crashes: 0,
      performance: 91,
      batteryUsage: 82,
      memoryUsage: '78MB',
      appSize: '125MB',
      supportedDevices: ['iPhone', 'iPad'],
      minIOSVersion: '15.0',
      features: 35,
      screens: 42,
      testCoverage: 89,
      bugs: 8,
      codeQuality: 88,
      userRetention: 0,
      loadTime: 2.1,
      apiCalls: 12,
      pushNotifications: true,
      inAppPurchases: true,
      accessibility: 92,
      localization: ['English', 'Spanish', 'French'],
      security: 89,
      deployment: 'TestFlight',
      cicd: 'Bitrise',
      testing: 'XCTest + Snapshot Testing',
      analytics: 'Mixpanel',
      crashReporting: 'Sentry',
      maintenance: 'Active',
      lastUpdate: '2024-12-18',
      priority: 'Medium'
    },
    {
      id: 'iOS004',
      appName: 'SocialConnect',
      client: 'NextGen Social',
      category: 'Social Networking',
      technology: ['Swift', 'SwiftUI', 'Combine', 'WebRTC'],
      status: 'In Progress',
      progress: 68,
      startDate: '2024-04-01',
      endDate: '2025-02-28',
      budget: 280000,
      spent: 175000,
      teamSize: 12,
      lead: 'David Kim',
      complexity: 'High',
      appStoreRating: 0,
      downloads: '0',
      crashes: 0,
      performance: 85,
      batteryUsage: 72,
      memoryUsage: '95MB',
      appSize: '42.8MB',
      supportedDevices: ['iPhone'],
      minIOSVersion: '16.0',
      features: 48,
      screens: 38,
      testCoverage: 83,
      bugs: 18,
      codeQuality: 86,
      userRetention: 0,
      loadTime: 1.5,
      apiCalls: 35,
      pushNotifications: true,
      inAppPurchases: true,
      accessibility: 88,
      localization: ['English', 'Spanish', 'Portuguese', 'Japanese'],
      security: 92,
      deployment: 'TestFlight',
      cicd: 'Xcode Cloud',
      testing: 'XCTest + UI Testing',
      analytics: 'Firebase Analytics',
      crashReporting: 'Crashlytics',
      maintenance: 'Active',
      lastUpdate: '2024-12-22',
      priority: 'High'
    },
    {
      id: 'iOS005',
      appName: 'FoodieDelight',
      client: 'Gourmet Delivery Co',
      category: 'Food & Drink',
      technology: ['Swift', 'UIKit', 'MapKit', 'Core Location'],
      status: 'Completed',
      progress: 100,
      startDate: '2023-09-01',
      endDate: '2024-04-30',
      budget: 120000,
      spent: 115000,
      teamSize: 6,
      lead: 'Lisa Wang',
      complexity: 'Medium',
      appStoreRating: 4.3,
      downloads: '89K',
      crashes: 0.05,
      performance: 88,
      batteryUsage: 79,
      memoryUsage: '52MB',
      appSize: '31.7MB',
      supportedDevices: ['iPhone'],
      minIOSVersion: '14.0',
      features: 28,
      screens: 22,
      testCoverage: 85,
      bugs: 5,
      codeQuality: 87,
      userRetention: 65,
      loadTime: 1.4,
      apiCalls: 18,
      pushNotifications: true,
      inAppPurchases: false,
      accessibility: 84,
      localization: ['English', 'Spanish'],
      security: 86,
      deployment: 'App Store',
      cicd: 'GitHub Actions',
      testing: 'XCTest',
      analytics: 'Amplitude',
      crashReporting: 'Bugsnag',
      maintenance: 'Minimal',
      lastUpdate: '2024-11-30',
      priority: 'Low'
    },
    {
      id: 'iOS006',
      appName: 'TaskMaster Pro',
      client: 'ProductivityPlus Inc',
      category: 'Productivity',
      technology: ['Swift', 'SwiftUI', 'Core Data', 'Widgets'],
      status: 'App Store Review',
      progress: 98,
      startDate: '2024-05-15',
      endDate: '2024-12-20',
      budget: 95000,
      spent: 89000,
      teamSize: 5,
      lead: 'Robert Taylor',
      complexity: 'Low',
      appStoreRating: 0,
      downloads: '0',
      crashes: 0,
      performance: 92,
      batteryUsage: 88,
      memoryUsage: '38MB',
      appSize: '22.1MB',
      supportedDevices: ['iPhone', 'iPad', 'Apple Watch'],
      minIOSVersion: '15.0',
      features: 24,
      screens: 18,
      testCoverage: 93,
      bugs: 2,
      codeQuality: 94,
      userRetention: 0,
      loadTime: 0.9,
      apiCalls: 8,
      pushNotifications: true,
      inAppPurchases: true,
      accessibility: 95,
      localization: ['English', 'German', 'French'],
      security: 91,
      deployment: 'App Store Review',
      cicd: 'Xcode Cloud',
      testing: 'XCTest + UI Testing',
      analytics: 'Apple Analytics',
      crashReporting: 'Crashlytics',
      maintenance: 'Active',
      lastUpdate: '2024-12-19',
      priority: 'Medium'
    },
    {
      id: 'iOS007',
      appName: 'TravelGuide AR',
      client: 'Wanderlust Travel',
      category: 'Travel',
      technology: ['Swift', 'SwiftUI', 'ARKit', 'Core ML'],
      status: 'Planning',
      progress: 15,
      startDate: '2024-12-01',
      endDate: '2025-08-31',
      budget: 200000,
      spent: 25000,
      teamSize: 9,
      lead: 'Jennifer Martinez',
      complexity: 'High',
      appStoreRating: 0,
      downloads: '0',
      crashes: 0,
      performance: 0,
      batteryUsage: 0,
      memoryUsage: '0MB',
      appSize: '0MB',
      supportedDevices: ['iPhone', 'iPad'],
      minIOSVersion: '16.0',
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
      accessibility: 0,
      localization: ['English'],
      security: 0,
      deployment: 'Development',
      cicd: 'GitHub Actions',
      testing: 'XCTest',
      analytics: 'TBD',
      crashReporting: 'TBD',
      maintenance: 'Active',
      lastUpdate: '2024-12-23',
      priority: 'Medium'
    },
    {
      id: 'iOS008',
      appName: 'CryptoWallet Secure',
      client: 'BlockChain Innovations',
      category: 'Finance',
      technology: ['Swift', 'SwiftUI', 'CryptoKit', 'Keychain'],
      status: 'On Hold',
      progress: 45,
      startDate: '2024-06-01',
      endDate: '2025-03-31',
      budget: 250000,
      spent: 98000,
      teamSize: 8,
      lead: 'Alex Thompson',
      complexity: 'Critical',
      appStoreRating: 0,
      downloads: '0',
      crashes: 0,
      performance: 76,
      batteryUsage: 81,
      memoryUsage: '58MB',
      appSize: '18.9MB',
      supportedDevices: ['iPhone'],
      minIOSVersion: '16.0',
      features: 18,
      screens: 15,
      testCoverage: 78,
      bugs: 15,
      codeQuality: 82,
      userRetention: 0,
      loadTime: 1.1,
      apiCalls: 22,
      pushNotifications: true,
      inAppPurchases: false,
      accessibility: 87,
      localization: ['English', 'Chinese', 'Korean'],
      security: 99,
      deployment: 'TestFlight',
      cicd: 'Bitrise',
      testing: 'XCTest + Security Testing',
      analytics: 'Custom Analytics',
      crashReporting: 'Sentry',
      maintenance: 'Minimal',
      lastUpdate: '2024-10-15',
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
      case 'App Store Review': return 'secondary';
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
  const avgRating = Math.round((projectsData.reduce((sum, p) => sum + p.appStoreRating, 0) / completedProjects) * 10) / 10;

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom fontWeight="bold">
          iOS Development Report
        </Typography>
        <Typography variant="h6" color="text.secondary" gutterBottom>
          Comprehensive analysis of iOS mobile application development projects and App Store performance
        </Typography>
      </Box>

      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <PhoneIphone sx={{ color: 'primary.main', mr: 1 }} />
                <Typography variant="h6">Total Apps</Typography>
              </Box>
              <Typography variant="h4" fontWeight="bold">{totalProjects}</Typography>
              <Typography variant="body2" color="text.secondary">
                iOS applications
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
                App Store live
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
                App Store rating
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
                <MenuItem value="App Store Review">App Store Review</MenuItem>
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
                <TableCell sx={{ fontWeight: 'bold', minWidth: 120 }}>App Store Rating</TableCell>
                <TableCell sx={{ fontWeight: 'bold', minWidth: 100 }}>Downloads</TableCell>
                <TableCell sx={{ fontWeight: 'bold', minWidth: 120 }}>Performance</TableCell>
                <TableCell sx={{ fontWeight: 'bold', minWidth: 100 }}>App Size</TableCell>
                <TableCell sx={{ fontWeight: 'bold', minWidth: 120 }}>Memory Usage</TableCell>
                <TableCell sx={{ fontWeight: 'bold', minWidth: 150 }}>Supported Devices</TableCell>
                <TableCell sx={{ fontWeight: 'bold', minWidth: 120 }}>Min iOS Version</TableCell>
                <TableCell sx={{ fontWeight: 'bold', minWidth: 100 }}>Features</TableCell>
                <TableCell sx={{ fontWeight: 'bold', minWidth: 100 }}>Screens</TableCell>
                <TableCell sx={{ fontWeight: 'bold', minWidth: 120 }}>Test Coverage</TableCell>
                <TableCell sx={{ fontWeight: 'bold', minWidth: 80 }}>Bugs</TableCell>
                <TableCell sx={{ fontWeight: 'bold', minWidth: 120 }}>User Retention</TableCell>
                <TableCell sx={{ fontWeight: 'bold', minWidth: 120 }}>Load Time</TableCell>
                <TableCell sx={{ fontWeight: 'bold', minWidth: 120 }}>Push Notifications</TableCell>
                <TableCell sx={{ fontWeight: 'bold', minWidth: 120 }}>In-App Purchases</TableCell>
                <TableCell sx={{ fontWeight: 'bold', minWidth: 120 }}>Accessibility</TableCell>
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
                      <Apple sx={{ fontSize: 16, color: 'text.secondary' }} />
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
                        {project.appStoreRating || 'N/A'}
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
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                      {project.supportedDevices.map((device, index) => (
                        <Chip
                          key={index}
                          label={device}
                          size="small"
                          variant="outlined"
                          sx={{ fontSize: '0.7rem' }}
                        />
                      ))}
                    </Box>
                  </TableCell>
                  
                  <TableCell>
                    <Typography variant="body2">
                      iOS {project.minIOSVersion}
                    </Typography>
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
                      label={project.inAppPurchases ? 'Yes' : 'No'}
                      color={project.inAppPurchases ? 'success' : 'default'}
                      size="small"
                      variant="outlined"
                    />
                  </TableCell>
                  
                  <TableCell>
                    <Typography variant="body2">
                      {project.accessibility}%
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

export default IOSDevelopmentReport;