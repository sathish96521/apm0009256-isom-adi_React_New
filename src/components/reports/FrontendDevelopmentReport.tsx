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
  FilterList,
  GetApp,
  Visibility,
  Edit,
  TrendingUp,
  Code,
  Speed,
  Security,
  BugReport,
  CheckCircle,
  Warning,
  Error as ErrorIcon
} from '@mui/icons-material';

interface ProjectData {
  id: string;
  projectName: string;
  client: string;
  technology: string[];
  status: 'Completed' | 'In Progress' | 'Planning' | 'On Hold' | 'Testing';
  progress: number;
  startDate: string;
  endDate: string;
  budget: number;
  spent: number;
  teamSize: number;
  lead: string;
  complexity: 'Low' | 'Medium' | 'High' | 'Critical';
  performance: number;
  security: number;
  bugs: number;
  features: number;
  codeQuality: number;
  testCoverage: number;
  deployments: number;
  userSatisfaction: number;
  responsive: boolean;
  accessibility: number;
  seoScore: number;
  loadTime: number;
  bundleSize: string;
  framework: string;
  buildTool: string;
  testing: string;
  deployment: string;
  repository: string;
  documentation: number;
  maintenance: 'Active' | 'Minimal' | 'Legacy';
  lastUpdate: string;
  priority: 'Low' | 'Medium' | 'High' | 'Critical';
}

const FrontendDevelopmentReport: React.FC = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [complexityFilter, setComplexityFilter] = useState('All');

  // Extensive dummy data
  const projectsData: ProjectData[] = [
    {
      id: 'FE001',
      projectName: 'E-commerce Platform Redesign',
      client: 'TechMart Solutions',
      technology: ['React', 'TypeScript', 'Material-UI', 'Redux'],
      status: 'Completed',
      progress: 100,
      startDate: '2024-01-15',
      endDate: '2024-06-30',
      budget: 125000,
      spent: 118500,
      teamSize: 8,
      lead: 'Sarah Johnson',
      complexity: 'High',
      performance: 92,
      security: 88,
      bugs: 3,
      features: 45,
      codeQuality: 94,
      testCoverage: 87,
      deployments: 23,
      userSatisfaction: 4.8,
      responsive: true,
      accessibility: 95,
      seoScore: 89,
      loadTime: 1.2,
      bundleSize: '2.1MB',
      framework: 'React 18',
      buildTool: 'Vite',
      testing: 'Jest + RTL',
      deployment: 'Vercel',
      repository: 'GitHub',
      documentation: 92,
      maintenance: 'Active',
      lastUpdate: '2024-12-15',
      priority: 'High'
    },
    {
      id: 'FE002',
      projectName: 'Banking Dashboard',
      client: 'SecureBank Corp',
      technology: ['Vue.js', 'Nuxt.js', 'Vuetify', 'Pinia'],
      status: 'In Progress',
      progress: 75,
      startDate: '2024-03-01',
      endDate: '2024-12-31',
      budget: 200000,
      spent: 145000,
      teamSize: 12,
      lead: 'Michael Chen',
      complexity: 'Critical',
      performance: 89,
      security: 96,
      bugs: 8,
      features: 67,
      codeQuality: 91,
      testCoverage: 93,
      deployments: 18,
      userSatisfaction: 4.6,
      responsive: true,
      accessibility: 98,
      seoScore: 85,
      loadTime: 0.9,
      bundleSize: '1.8MB',
      framework: 'Vue 3',
      buildTool: 'Vite',
      testing: 'Vitest + Vue Test Utils',
      deployment: 'AWS',
      repository: 'GitLab',
      documentation: 88,
      maintenance: 'Active',
      lastUpdate: '2024-12-20',
      priority: 'Critical'
    },
    {
      id: 'FE003',
      projectName: 'Healthcare Portal',
      client: 'MedTech Innovations',
      technology: ['Angular', 'Angular Material', 'RxJS', 'NgRx'],
      status: 'Testing',
      progress: 95,
      startDate: '2024-02-10',
      endDate: '2024-11-15',
      budget: 180000,
      spent: 165000,
      teamSize: 10,
      lead: 'Emily Rodriguez',
      complexity: 'High',
      performance: 85,
      security: 94,
      bugs: 12,
      features: 52,
      codeQuality: 89,
      testCoverage: 91,
      deployments: 15,
      userSatisfaction: 4.4,
      responsive: true,
      accessibility: 96,
      seoScore: 82,
      loadTime: 1.5,
      bundleSize: '2.5MB',
      framework: 'Angular 17',
      buildTool: 'Angular CLI',
      testing: 'Jasmine + Karma',
      deployment: 'Azure',
      repository: 'GitHub',
      documentation: 85,
      maintenance: 'Active',
      lastUpdate: '2024-12-18',
      priority: 'High'
    },
    {
      id: 'FE004',
      projectName: 'Social Media App',
      client: 'ConnectNow Inc',
      technology: ['React Native', 'Expo', 'Redux Toolkit', 'React Query'],
      status: 'In Progress',
      progress: 60,
      startDate: '2024-04-01',
      endDate: '2025-02-28',
      budget: 150000,
      spent: 85000,
      teamSize: 6,
      lead: 'David Kim',
      complexity: 'Medium',
      performance: 78,
      security: 82,
      bugs: 15,
      features: 38,
      codeQuality: 86,
      testCoverage: 79,
      deployments: 12,
      userSatisfaction: 4.2,
      responsive: true,
      accessibility: 88,
      seoScore: 75,
      loadTime: 2.1,
      bundleSize: '3.2MB',
      framework: 'React Native',
      buildTool: 'Metro',
      testing: 'Jest + Detox',
      deployment: 'App Store/Play Store',
      repository: 'GitHub',
      documentation: 78,
      maintenance: 'Active',
      lastUpdate: '2024-12-22',
      priority: 'Medium'
    },
    {
      id: 'FE005',
      projectName: 'Real Estate Platform',
      client: 'PropertyPro Ltd',
      technology: ['Next.js', 'Tailwind CSS', 'Prisma', 'NextAuth'],
      status: 'Completed',
      progress: 100,
      startDate: '2023-09-01',
      endDate: '2024-03-15',
      budget: 95000,
      spent: 92000,
      teamSize: 5,
      lead: 'Lisa Wang',
      complexity: 'Medium',
      performance: 94,
      security: 87,
      bugs: 2,
      features: 32,
      codeQuality: 92,
      testCoverage: 85,
      deployments: 28,
      userSatisfaction: 4.7,
      responsive: true,
      accessibility: 91,
      seoScore: 96,
      loadTime: 0.8,
      bundleSize: '1.5MB',
      framework: 'Next.js 14',
      buildTool: 'Turbopack',
      testing: 'Jest + Playwright',
      deployment: 'Vercel',
      repository: 'GitHub',
      documentation: 89,
      maintenance: 'Minimal',
      lastUpdate: '2024-11-30',
      priority: 'Low'
    },
    {
      id: 'FE006',
      projectName: 'Educational Learning System',
      client: 'EduTech Solutions',
      technology: ['Svelte', 'SvelteKit', 'Tailwind CSS', 'Supabase'],
      status: 'Planning',
      progress: 15,
      startDate: '2024-12-01',
      endDate: '2025-08-31',
      budget: 220000,
      spent: 25000,
      teamSize: 9,
      lead: 'Robert Taylor',
      complexity: 'High',
      performance: 0,
      security: 0,
      bugs: 0,
      features: 8,
      codeQuality: 0,
      testCoverage: 0,
      deployments: 0,
      userSatisfaction: 0,
      responsive: false,
      accessibility: 0,
      seoScore: 0,
      loadTime: 0,
      bundleSize: '0MB',
      framework: 'SvelteKit',
      buildTool: 'Vite',
      testing: 'Vitest + Playwright',
      deployment: 'Netlify',
      repository: 'GitHub',
      documentation: 45,
      maintenance: 'Active',
      lastUpdate: '2024-12-23',
      priority: 'Medium'
    },
    {
      id: 'FE007',
      projectName: 'Logistics Management Portal',
      client: 'ShipFast Logistics',
      technology: ['React', 'Ant Design', 'Redux Toolkit', 'React Router'],
      status: 'On Hold',
      progress: 40,
      startDate: '2024-05-15',
      endDate: '2025-01-31',
      budget: 135000,
      spent: 48000,
      teamSize: 7,
      lead: 'Jennifer Martinez',
      complexity: 'Medium',
      performance: 72,
      security: 78,
      bugs: 18,
      features: 25,
      codeQuality: 81,
      testCoverage: 68,
      deployments: 8,
      userSatisfaction: 3.9,
      responsive: true,
      accessibility: 84,
      seoScore: 79,
      loadTime: 1.8,
      bundleSize: '2.8MB',
      framework: 'React 18',
      buildTool: 'Webpack',
      testing: 'Jest + Enzyme',
      deployment: 'AWS',
      repository: 'BitBucket',
      documentation: 72,
      maintenance: 'Minimal',
      lastUpdate: '2024-10-15',
      priority: 'Low'
    },
    {
      id: 'FE008',
      projectName: 'Fintech Trading Platform',
      client: 'TradePro Financial',
      technology: ['React', 'TypeScript', 'Chart.js', 'Socket.io'],
      status: 'In Progress',
      progress: 85,
      startDate: '2024-01-20',
      endDate: '2024-12-30',
      budget: 300000,
      spent: 245000,
      teamSize: 15,
      lead: 'Alex Thompson',
      complexity: 'Critical',
      performance: 96,
      security: 98,
      bugs: 5,
      features: 78,
      codeQuality: 95,
      testCoverage: 94,
      deployments: 32,
      userSatisfaction: 4.9,
      responsive: true,
      accessibility: 93,
      seoScore: 87,
      loadTime: 0.7,
      bundleSize: '1.9MB',
      framework: 'React 18',
      buildTool: 'Vite',
      testing: 'Jest + Cypress',
      deployment: 'AWS',
      repository: 'GitHub',
      documentation: 96,
      maintenance: 'Active',
      lastUpdate: '2024-12-23',
      priority: 'Critical'
    },
    {
      id: 'FE009',
      projectName: 'Travel Booking Website',
      client: 'WanderLust Travel',
      technology: ['Gatsby', 'GraphQL', 'Styled Components', 'Contentful'],
      status: 'Completed',
      progress: 100,
      startDate: '2023-11-01',
      endDate: '2024-05-30',
      budget: 85000,
      spent: 81000,
      teamSize: 4,
      lead: 'Maria Garcia',
      complexity: 'Low',
      performance: 91,
      security: 85,
      bugs: 1,
      features: 28,
      codeQuality: 88,
      testCoverage: 82,
      deployments: 19,
      userSatisfaction: 4.5,
      responsive: true,
      accessibility: 89,
      seoScore: 94,
      loadTime: 1.1,
      bundleSize: '1.7MB',
      framework: 'Gatsby',
      buildTool: 'Webpack',
      testing: 'Jest + Testing Library',
      deployment: 'Netlify',
      repository: 'GitHub',
      documentation: 86,
      maintenance: 'Minimal',
      lastUpdate: '2024-09-15',
      priority: 'Low'
    },
    {
      id: 'FE010',
      projectName: 'IoT Dashboard',
      client: 'SmartHome Technologies',
      technology: ['Vue.js', 'D3.js', 'WebSocket', 'Chart.js'],
      status: 'Testing',
      progress: 90,
      startDate: '2024-06-01',
      endDate: '2024-12-31',
      budget: 165000,
      spent: 142000,
      teamSize: 8,
      lead: 'Kevin Lee',
      complexity: 'High',
      performance: 88,
      security: 91,
      bugs: 7,
      features: 41,
      codeQuality: 90,
      testCoverage: 88,
      deployments: 16,
      userSatisfaction: 4.3,
      responsive: true,
      accessibility: 87,
      seoScore: 81,
      loadTime: 1.3,
      bundleSize: '2.3MB',
      framework: 'Vue 3',
      buildTool: 'Vite',
      testing: 'Vitest + Cypress',
      deployment: 'Docker + AWS',
      repository: 'GitLab',
      documentation: 84,
      maintenance: 'Active',
      lastUpdate: '2024-12-21',
      priority: 'High'
    }
  ];

  // Filter and search logic
  const filteredData = useMemo(() => {
    return projectsData.filter(project => {
      const matchesSearch = project.projectName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           project.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           project.lead.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesStatus = statusFilter === 'All' || project.status === statusFilter;
      const matchesComplexity = complexityFilter === 'All' || project.complexity === complexityFilter;
      
      return matchesSearch && matchesStatus && matchesComplexity;
    });
  }, [searchTerm, statusFilter, complexityFilter]);

  // Pagination
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

  // Summary statistics
  const totalProjects = projectsData.length;
  const completedProjects = projectsData.filter(p => p.status === 'Completed').length;
  const inProgressProjects = projectsData.filter(p => p.status === 'In Progress').length;
  const totalBudget = projectsData.reduce((sum, p) => sum + p.budget, 0);
  const totalSpent = projectsData.reduce((sum, p) => sum + p.spent, 0);
  const avgPerformance = Math.round(projectsData.reduce((sum, p) => sum + p.performance, 0) / totalProjects);

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      {/* Header */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom fontWeight="bold">
          Frontend Development Report
        </Typography>
        <Typography variant="h6" color="text.secondary" gutterBottom>
          Comprehensive analysis of frontend development projects and performance metrics
        </Typography>
      </Box>

      {/* Summary Cards */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Code sx={{ color: 'primary.main', mr: 1 }} />
                <Typography variant="h6">Total Projects</Typography>
              </Box>
              <Typography variant="h4" fontWeight="bold">{totalProjects}</Typography>
              <Typography variant="body2" color="text.secondary">
                Active development projects
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <CheckCircle sx={{ color: 'success.main', mr: 1 }} />
                <Typography variant="h6">Completed</Typography>
              </Box>
              <Typography variant="h4" fontWeight="bold">{completedProjects}</Typography>
              <Typography variant="body2" color="text.secondary">
                Successfully delivered
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <TrendingUp sx={{ color: 'warning.main', mr: 1 }} />
                <Typography variant="h6">In Progress</Typography>
              </Box>
              <Typography variant="h4" fontWeight="bold">{inProgressProjects}</Typography>
              <Typography variant="body2" color="text.secondary">
                Currently active
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Speed sx={{ color: 'info.main', mr: 1 }} />
                <Typography variant="h6">Avg Performance</Typography>
              </Box>
              <Typography variant="h4" fontWeight="bold">{avgPerformance}%</Typography>
              <Typography variant="body2" color="text.secondary">
                Overall performance score
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Filters and Search */}
      <Paper sx={{ p: 3, mb: 3 }}>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} md={4}>
            <TextField
              fullWidth
              placeholder="Search projects, clients, or leads..."
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

      {/* Data Table */}
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer sx={{ maxHeight: 800 }}>
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: 'bold', minWidth: 100 }}>Project ID</TableCell>
                <TableCell sx={{ fontWeight: 'bold', minWidth: 200 }}>Project Name</TableCell>
                <TableCell sx={{ fontWeight: 'bold', minWidth: 150 }}>Client</TableCell>
                <TableCell sx={{ fontWeight: 'bold', minWidth: 200 }}>Technologies</TableCell>
                <TableCell sx={{ fontWeight: 'bold', minWidth: 120 }}>Status</TableCell>
                <TableCell sx={{ fontWeight: 'bold', minWidth: 100 }}>Progress</TableCell>
                <TableCell sx={{ fontWeight: 'bold', minWidth: 120 }}>Budget</TableCell>
                <TableCell sx={{ fontWeight: 'bold', minWidth: 120 }}>Spent</TableCell>
                <TableCell sx={{ fontWeight: 'bold', minWidth: 100 }}>Team Size</TableCell>
                <TableCell sx={{ fontWeight: 'bold', minWidth: 150 }}>Project Lead</TableCell>
                <TableCell sx={{ fontWeight: 'bold', minWidth: 120 }}>Complexity</TableCell>
                <TableCell sx={{ fontWeight: 'bold', minWidth: 120 }}>Performance</TableCell>
                <TableCell sx={{ fontWeight: 'bold', minWidth: 100 }}>Security</TableCell>
                <TableCell sx={{ fontWeight: 'bold', minWidth: 80 }}>Bugs</TableCell>
                <TableCell sx={{ fontWeight: 'bold', minWidth: 100 }}>Features</TableCell>
                <TableCell sx={{ fontWeight: 'bold', minWidth: 120 }}>Code Quality</TableCell>
                <TableCell sx={{ fontWeight: 'bold', minWidth: 120 }}>Test Coverage</TableCell>
                <TableCell sx={{ fontWeight: 'bold', minWidth: 120 }}>User Rating</TableCell>
                <TableCell sx={{ fontWeight: 'bold', minWidth: 120 }}>Accessibility</TableCell>
                <TableCell sx={{ fontWeight: 'bold', minWidth: 100 }}>SEO Score</TableCell>
                <TableCell sx={{ fontWeight: 'bold', minWidth: 120 }}>Load Time</TableCell>
                <TableCell sx={{ fontWeight: 'bold', minWidth: 120 }}>Bundle Size</TableCell>
                <TableCell sx={{ fontWeight: 'bold', minWidth: 120 }}>Framework</TableCell>
                <TableCell sx={{ fontWeight: 'bold', minWidth: 120 }}>Build Tool</TableCell>
                <TableCell sx={{ fontWeight: 'bold', minWidth: 120 }}>Testing</TableCell>
                <TableCell sx={{ fontWeight: 'bold', minWidth: 120 }}>Deployment</TableCell>
                <TableCell sx={{ fontWeight: 'bold', minWidth: 120 }}>Documentation</TableCell>
                <TableCell sx={{ fontWeight: 'bold', minWidth: 120 }}>Maintenance</TableCell>
                <TableCell sx={{ fontWeight: 'bold', minWidth: 120 }}>Last Update</TableCell>
                <TableCell sx={{ fontWeight: 'bold', minWidth: 100 }}>Priority</TableCell>
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
                    <Typography variant="body2" fontWeight="medium">
                      {project.projectName}
                    </Typography>
                  </TableCell>
                  
                  <TableCell>
                    <Typography variant="body2">
                      {project.client}
                    </Typography>
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
                    <Typography variant="body2" color={project.spent > project.budget ? 'error.main' : 'text.primary'}>
                      {formatCurrency(project.spent)}
                    </Typography>
                  </TableCell>
                  
                  <TableCell>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Avatar sx={{ width: 24, height: 24, fontSize: '0.75rem' }}>
                        {project.teamSize}
                      </Avatar>
                      <Typography variant="body2">
                        {project.teamSize}
                      </Typography>
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
                      <LinearProgress
                        variant="determinate"
                        value={project.performance}
                        color={project.performance >= 90 ? 'success' : project.performance >= 70 ? 'warning' : 'error'}
                        sx={{ width: 50, height: 4, borderRadius: 2 }}
                      />
                      <Typography variant="body2">
                        {project.performance}%
                      </Typography>
                    </Box>
                  </TableCell>
                  
                  <TableCell>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Security 
                        sx={{ 
                          fontSize: 16, 
                          color: project.security >= 90 ? 'success.main' : project.security >= 70 ? 'warning.main' : 'error.main' 
                        }} 
                      />
                      <Typography variant="body2">
                        {project.security}%
                      </Typography>
                    </Box>
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
                    <Typography variant="body2" fontWeight="medium">
                      {project.features}
                    </Typography>
                  </TableCell>
                  
                  <TableCell>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <LinearProgress
                        variant="determinate"
                        value={project.codeQuality}
                        color={project.codeQuality >= 90 ? 'success' : project.codeQuality >= 80 ? 'warning' : 'error'}
                        sx={{ width: 50, height: 4, borderRadius: 2 }}
                      />
                      <Typography variant="body2">
                        {project.codeQuality}%
                      </Typography>
                    </Box>
                  </TableCell>
                  
                  <TableCell>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <LinearProgress
                        variant="determinate"
                        value={project.testCoverage}
                        color={project.testCoverage >= 80 ? 'success' : project.testCoverage >= 60 ? 'warning' : 'error'}
                        sx={{ width: 50, height: 4, borderRadius: 2 }}
                      />
                      <Typography variant="body2">
                        {project.testCoverage}%
                      </Typography>
                    </Box>
                  </TableCell>
                  
                  <TableCell>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Typography variant="body2" fontWeight="medium">
                        ⭐ {project.userSatisfaction}
                      </Typography>
                    </Box>
                  </TableCell>
                  
                  <TableCell>
                    <Typography variant="body2">
                      {project.accessibility}%
                    </Typography>
                  </TableCell>
                  
                  <TableCell>
                    <Typography variant="body2">
                      {project.seoScore}%
                    </Typography>
                  </TableCell>
                  
                  <TableCell>
                    <Typography 
                      variant="body2" 
                      color={project.loadTime <= 1 ? 'success.main' : project.loadTime <= 2 ? 'warning.main' : 'error.main'}
                    >
                      {project.loadTime}s
                    </Typography>
                  </TableCell>
                  
                  <TableCell>
                    <Typography variant="body2">
                      {project.bundleSize}
                    </Typography>
                  </TableCell>
                  
                  <TableCell>
                    <Typography variant="body2">
                      {project.framework}
                    </Typography>
                  </TableCell>
                  
                  <TableCell>
                    <Typography variant="body2">
                      {project.buildTool}
                    </Typography>
                  </TableCell>
                  
                  <TableCell>
                    <Typography variant="body2">
                      {project.testing}
                    </Typography>
                  </TableCell>
                  
                  <TableCell>
                    <Typography variant="body2">
                      {project.deployment}
                    </Typography>
                  </TableCell>
                  
                  <TableCell>
                    <Typography variant="body2">
                      {project.documentation}%
                    </Typography>
                  </TableCell>
                  
                  <TableCell>
                    <Chip
                      label={project.maintenance}
                      color={project.maintenance === 'Active' ? 'success' : project.maintenance === 'Minimal' ? 'warning' : 'error'}
                      size="small"
                      variant="outlined"
                    />
                  </TableCell>
                  
                  <TableCell>
                    <Typography variant="body2">
                      {project.lastUpdate}
                    </Typography>
                  </TableCell>
                  
                  <TableCell>
                    <Chip
                      label={project.priority}
                      color={project.priority === 'Critical' ? 'error' : project.priority === 'High' ? 'warning' : project.priority === 'Medium' ? 'info' : 'success'}
                      size="small"
                    />
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

export default FrontendDevelopmentReport;