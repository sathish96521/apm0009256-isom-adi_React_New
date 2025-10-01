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
  Layers,
  Api,
  Speed,
  CheckCircle,
  Code,
  Storage
} from '@mui/icons-material';

interface FullStackProjectData {
  id: string;
  projectName: string;
  client: string;
  frontendTech: string[];
  backendTech: string[];
  database: string[];
  status: 'Completed' | 'In Progress' | 'Planning' | 'On Hold' | 'Testing';
  progress: number;
  startDate: string;
  endDate: string;
  budget: number;
  spent: number;
  teamSize: number;
  lead: string;
  complexity: 'Low' | 'Medium' | 'High' | 'Critical';
  frontendScore: number;
  backendScore: number;
  integrationScore: number;
  overallScore: number;
  bugs: number;
  features: number;
  testCoverage: number;
  deployments: number;
  userSatisfaction: number;
  performance: number;
  security: number;
  scalability: number;
  maintainability: number;
  documentation: number;
  codeQuality: number;
  apiEndpoints: number;
  uiComponents: number;
  deployment: string;
  hosting: string;
  cicd: string;
  monitoring: string;
  maintenance: 'Active' | 'Minimal' | 'Legacy';
  lastUpdate: string;
  priority: 'Low' | 'Medium' | 'High' | 'Critical';
}

const FullStackReport: React.FC = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [complexityFilter, setComplexityFilter] = useState('All');

  const projectsData: FullStackProjectData[] = [
    {
      id: 'FS001',
      projectName: 'Enterprise Resource Planning System',
      client: 'GlobalCorp Industries',
      frontendTech: ['React', 'TypeScript', 'Material-UI', 'Redux Toolkit'],
      backendTech: ['Node.js', 'Express', 'GraphQL', 'Prisma'],
      database: ['PostgreSQL', 'Redis', 'Elasticsearch'],
      status: 'Completed',
      progress: 100,
      startDate: '2023-08-01',
      endDate: '2024-07-31',
      budget: 450000,
      spent: 425000,
      teamSize: 18,
      lead: 'Alexandra Thompson',
      complexity: 'Critical',
      frontendScore: 94,
      backendScore: 92,
      integrationScore: 96,
      overallScore: 94,
      bugs: 8,
      features: 127,
      testCoverage: 91,
      deployments: 45,
      userSatisfaction: 4.7,
      performance: 89,
      security: 96,
      scalability: 93,
      maintainability: 88,
      documentation: 92,
      codeQuality: 94,
      apiEndpoints: 89,
      uiComponents: 156,
      deployment: 'Docker + Kubernetes',
      hosting: 'AWS EKS',
      cicd: 'GitHub Actions',
      monitoring: 'Datadog + Sentry',
      maintenance: 'Active',
      lastUpdate: '2024-12-20',
      priority: 'Critical'
    },
    {
      id: 'FS002',
      projectName: 'E-Learning Management Platform',
      client: 'EduTech Solutions',
      frontendTech: ['Vue.js', 'Nuxt.js', 'Vuetify', 'Pinia'],
      backendTech: ['Python', 'Django', 'DRF', 'Celery'],
      database: ['PostgreSQL', 'MongoDB', 'Redis'],
      status: 'In Progress',
      progress: 82,
      startDate: '2024-02-15',
      endDate: '2024-12-31',
      budget: 320000,
      spent: 245000,
      teamSize: 14,
      lead: 'Marcus Rodriguez',
      complexity: 'High',
      frontendScore: 87,
      backendScore: 89,
      integrationScore: 85,
      overallScore: 87,
      bugs: 15,
      features: 98,
      testCoverage: 84,
      deployments: 28,
      userSatisfaction: 4.4,
      performance: 86,
      security: 91,
      scalability: 88,
      maintainability: 85,
      documentation: 87,
      codeQuality: 89,
      apiEndpoints: 67,
      uiComponents: 124,
      deployment: 'Docker Compose',
      hosting: 'DigitalOcean',
      cicd: 'GitLab CI/CD',
      monitoring: 'Prometheus + Grafana',
      maintenance: 'Active',
      lastUpdate: '2024-12-22',
      priority: 'High'
    },
    {
      id: 'FS003',
      projectName: 'Healthcare Management System',
      client: 'MedCare Hospital Group',
      frontendTech: ['Angular', 'Angular Material', 'NgRx', 'RxJS'],
      backendTech: ['Java', 'Spring Boot', 'Spring Security', 'JPA'],
      database: ['MySQL', 'MongoDB', 'Elasticsearch'],
      status: 'Testing',
      progress: 95,
      startDate: '2024-01-10',
      endDate: '2024-11-30',
      budget: 380000,
      spent: 352000,
      teamSize: 16,
      lead: 'Dr. Sarah Kim',
      complexity: 'Critical',
      frontendScore: 91,
      backendScore: 94,
      integrationScore: 92,
      overallScore: 92,
      bugs: 12,
      features: 145,
      testCoverage: 93,
      deployments: 32,
      userSatisfaction: 4.6,
      performance: 88,
      security: 98,
      scalability: 90,
      maintainability: 89,
      documentation: 94,
      codeQuality: 92,
      apiEndpoints: 112,
      uiComponents: 189,
      deployment: 'Kubernetes',
      hosting: 'Google Cloud',
      cicd: 'Jenkins',
      monitoring: 'New Relic + LogRocket',
      maintenance: 'Active',
      lastUpdate: '2024-12-21',
      priority: 'Critical'
    },
    {
      id: 'FS004',
      projectName: 'Financial Trading Dashboard',
      client: 'InvestPro Capital',
      frontendTech: ['React', 'Next.js', 'Chart.js', 'Tailwind CSS'],
      backendTech: ['C#', '.NET Core', 'SignalR', 'Entity Framework'],
      database: ['SQL Server', 'InfluxDB', 'Redis'],
      status: 'In Progress',
      progress: 73,
      startDate: '2024-03-01',
      endDate: '2025-01-31',
      budget: 280000,
      spent: 185000,
      teamSize: 12,
      lead: 'James Wilson',
      complexity: 'High',
      frontendScore: 85,
      backendScore: 88,
      integrationScore: 87,
      overallScore: 87,
      bugs: 18,
      features: 76,
      testCoverage: 81,
      deployments: 22,
      userSatisfaction: 4.3,
      performance: 92,
      security: 94,
      scalability: 89,
      maintainability: 83,
      documentation: 85,
      codeQuality: 87,
      apiEndpoints: 54,
      uiComponents: 98,
      deployment: 'Azure DevOps',
      hosting: 'Azure App Service',
      cicd: 'Azure Pipelines',
      monitoring: 'Application Insights',
      maintenance: 'Active',
      lastUpdate: '2024-12-19',
      priority: 'High'
    },
    {
      id: 'FS005',
      projectName: 'Social Commerce Platform',
      client: 'SocialBuy Inc',
      frontendTech: ['Svelte', 'SvelteKit', 'Tailwind CSS', 'Three.js'],
      backendTech: ['Go', 'Gin', 'GORM', 'WebSocket'],
      database: ['PostgreSQL', 'Redis', 'MinIO'],
      status: 'Completed',
      progress: 100,
      startDate: '2023-10-01',
      endDate: '2024-05-31',
      budget: 220000,
      spent: 208000,
      teamSize: 10,
      lead: 'Emma Chen',
      complexity: 'Medium',
      frontendScore: 89,
      backendScore: 86,
      integrationScore: 88,
      overallScore: 88,
      bugs: 6,
      features: 82,
      testCoverage: 87,
      deployments: 38,
      userSatisfaction: 4.5,
      performance: 91,
      security: 87,
      scalability: 85,
      maintainability: 90,
      documentation: 88,
      codeQuality: 90,
      apiEndpoints: 45,
      uiComponents: 112,
      deployment: 'Docker',
      hosting: 'Vercel + Railway',
      cicd: 'GitHub Actions',
      monitoring: 'Vercel Analytics',
      maintenance: 'Minimal',
      lastUpdate: '2024-10-15',
      priority: 'Medium'
    },
    {
      id: 'FS006',
      projectName: 'IoT Device Management Portal',
      client: 'SmartTech Industries',
      frontendTech: ['React', 'TypeScript', 'D3.js', 'Ant Design'],
      backendTech: ['Rust', 'Actix-web', 'Diesel', 'MQTT'],
      database: ['TimescaleDB', 'InfluxDB', 'Redis'],
      status: 'Planning',
      progress: 25,
      startDate: '2024-11-01',
      endDate: '2025-09-30',
      budget: 350000,
      spent: 65000,
      teamSize: 15,
      lead: 'David Park',
      complexity: 'Critical',
      frontendScore: 0,
      backendScore: 0,
      integrationScore: 0,
      overallScore: 0,
      bugs: 0,
      features: 12,
      testCoverage: 0,
      deployments: 0,
      userSatisfaction: 0,
      performance: 0,
      security: 0,
      scalability: 0,
      maintainability: 0,
      documentation: 35,
      codeQuality: 0,
      apiEndpoints: 0,
      uiComponents: 0,
      deployment: 'Kubernetes',
      hosting: 'AWS EKS',
      cicd: 'GitLab CI/CD',
      monitoring: 'Prometheus + Grafana',
      maintenance: 'Active',
      lastUpdate: '2024-12-23',
      priority: 'High'
    },
    {
      id: 'FS007',
      projectName: 'Real Estate CRM System',
      client: 'PropertyMax Realty',
      frontendTech: ['Vue.js', 'Quasar', 'Pinia', 'Leaflet'],
      backendTech: ['PHP', 'Laravel', 'Sanctum', 'Horizon'],
      database: ['MySQL', 'Redis', 'Elasticsearch'],
      status: 'On Hold',
      progress: 58,
      startDate: '2024-04-15',
      endDate: '2025-02-28',
      budget: 195000,
      spent: 98000,
      teamSize: 8,
      lead: 'Lisa Martinez',
      complexity: 'Medium',
      frontendScore: 78,
      backendScore: 81,
      integrationScore: 76,
      overallScore: 78,
      bugs: 22,
      features: 48,
      testCoverage: 72,
      deployments: 15,
      userSatisfaction: 3.9,
      performance: 79,
      security: 83,
      scalability: 77,
      maintainability: 75,
      documentation: 74,
      codeQuality: 79,
      apiEndpoints: 38,
      uiComponents: 67,
      deployment: 'Docker Compose',
      hosting: 'Linode',
      cicd: 'GitHub Actions',
      monitoring: 'Bugsnag',
      maintenance: 'Minimal',
      lastUpdate: '2024-09-30',
      priority: 'Low'
    },
    {
      id: 'FS008',
      projectName: 'Logistics Optimization Platform',
      client: 'GlobalShip Logistics',
      frontendTech: ['React', 'Next.js', 'Mapbox', 'Recharts'],
      backendTech: ['Python', 'FastAPI', 'SQLAlchemy', 'Celery'],
      database: ['PostgreSQL', 'Redis', 'PostGIS'],
      status: 'In Progress',
      progress: 67,
      startDate: '2024-05-01',
      endDate: '2025-03-31',
      budget: 290000,
      spent: 175000,
      teamSize: 13,
      lead: 'Robert Johnson',
      complexity: 'High',
      frontendScore: 83,
      backendScore: 85,
      integrationScore: 82,
      overallScore: 83,
      bugs: 19,
      features: 63,
      testCoverage: 79,
      deployments: 18,
      userSatisfaction: 4.1,
      performance: 84,
      security: 88,
      scalability: 86,
      maintainability: 81,
      documentation: 82,
      codeQuality: 84,
      apiEndpoints: 52,
      uiComponents: 89,
      deployment: 'Docker + Kubernetes',
      hosting: 'Google Cloud',
      cicd: 'Cloud Build',
      monitoring: 'Stackdriver',
      maintenance: 'Active',
      lastUpdate: '2024-12-18',
      priority: 'High'
    }
  ];

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

  const totalProjects = projectsData.length;
  const completedProjects = projectsData.filter(p => p.status === 'Completed').length;
  const inProgressProjects = projectsData.filter(p => p.status === 'In Progress').length;
  const avgOverallScore = Math.round(projectsData.reduce((sum, p) => sum + p.overallScore, 0) / totalProjects);

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom fontWeight="bold">
          Full Stack Development Report
        </Typography>
        <Typography variant="h6" color="text.secondary" gutterBottom>
          Comprehensive analysis of full-stack development projects with frontend and backend integration metrics
        </Typography>
      </Box>

      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Layers sx={{ color: 'primary.main', mr: 1 }} />
                <Typography variant="h6">Total Projects</Typography>
              </Box>
              <Typography variant="h4" fontWeight="bold">{totalProjects}</Typography>
              <Typography variant="body2" color="text.secondary">
                Full-stack solutions
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
                Production deployed
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
                Active development
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Api sx={{ color: 'info.main', mr: 1 }} />
                <Typography variant="h6">Avg Score</Typography>
              </Box>
              <Typography variant="h4" fontWeight="bold">{avgOverallScore}%</Typography>
              <Typography variant="body2" color="text.secondary">
                Overall quality score
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

      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer sx={{ maxHeight: 800 }}>
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: 'bold', minWidth: 100 }}>Project ID</TableCell>
                <TableCell sx={{ fontWeight: 'bold', minWidth: 250 }}>Project Name</TableCell>
                <TableCell sx={{ fontWeight: 'bold', minWidth: 150 }}>Client</TableCell>
                <TableCell sx={{ fontWeight: 'bold', minWidth: 200 }}>Frontend Tech</TableCell>
                <TableCell sx={{ fontWeight: 'bold', minWidth: 200 }}>Backend Tech</TableCell>
                <TableCell sx={{ fontWeight: 'bold', minWidth: 150 }}>Database</TableCell>
                <TableCell sx={{ fontWeight: 'bold', minWidth: 120 }}>Status</TableCell>
                <TableCell sx={{ fontWeight: 'bold', minWidth: 100 }}>Progress</TableCell>
                <TableCell sx={{ fontWeight: 'bold', minWidth: 120 }}>Budget</TableCell>
                <TableCell sx={{ fontWeight: 'bold', minWidth: 100 }}>Team Size</TableCell>
                <TableCell sx={{ fontWeight: 'bold', minWidth: 150 }}>Project Lead</TableCell>
                <TableCell sx={{ fontWeight: 'bold', minWidth: 120 }}>Complexity</TableCell>
                <TableCell sx={{ fontWeight: 'bold', minWidth: 120 }}>Frontend Score</TableCell>
                <TableCell sx={{ fontWeight: 'bold', minWidth: 120 }}>Backend Score</TableCell>
                <TableCell sx={{ fontWeight: 'bold', minWidth: 120 }}>Integration</TableCell>
                <TableCell sx={{ fontWeight: 'bold', minWidth: 120 }}>Overall Score</TableCell>
                <TableCell sx={{ fontWeight: 'bold', minWidth: 100 }}>Features</TableCell>
                <TableCell sx={{ fontWeight: 'bold', minWidth: 120 }}>Test Coverage</TableCell>
                <TableCell sx={{ fontWeight: 'bold', minWidth: 120 }}>User Rating</TableCell>
                <TableCell sx={{ fontWeight: 'bold', minWidth: 120 }}>Performance</TableCell>
                <TableCell sx={{ fontWeight: 'bold', minWidth: 100 }}>Security</TableCell>
                <TableCell sx={{ fontWeight: 'bold', minWidth: 120 }}>API Endpoints</TableCell>
                <TableCell sx={{ fontWeight: 'bold', minWidth: 120 }}>UI Components</TableCell>
                <TableCell sx={{ fontWeight: 'bold', minWidth: 120 }}>Deployment</TableCell>
                <TableCell sx={{ fontWeight: 'bold', minWidth: 120 }}>Hosting</TableCell>
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
                      {project.frontendTech.map((tech, index) => (
                        <Chip
                          key={index}
                          label={tech}
                          size="small"
                          variant="outlined"
                          color="primary"
                          sx={{ fontSize: '0.75rem' }}
                        />
                      ))}
                    </Box>
                  </TableCell>
                  
                  <TableCell>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                      {project.backendTech.map((tech, index) => (
                        <Chip
                          key={index}
                          label={tech}
                          size="small"
                          variant="outlined"
                          color="secondary"
                          sx={{ fontSize: '0.75rem' }}
                        />
                      ))}
                    </Box>
                  </TableCell>
                  
                  <TableCell>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                      {project.database.map((db, index) => (
                        <Chip
                          key={index}
                          label={db}
                          size="small"
                          variant="outlined"
                          color="info"
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
                      <Code sx={{ fontSize: 16, color: 'primary.main' }} />
                      <Typography variant="body2">
                        {project.frontendScore}%
                      </Typography>
                    </Box>
                  </TableCell>
                  
                  <TableCell>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Storage sx={{ fontSize: 16, color: 'secondary.main' }} />
                      <Typography variant="body2">
                        {project.backendScore}%
                      </Typography>
                    </Box>
                  </TableCell>
                  
                  <TableCell>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Api sx={{ fontSize: 16, color: 'info.main' }} />
                      <Typography variant="body2">
                        {project.integrationScore}%
                      </Typography>
                    </Box>
                  </TableCell>
                  
                  <TableCell>
                    <LinearProgress
                      variant="determinate"
                      value={project.overallScore}
                      color={project.overallScore >= 90 ? 'success' : project.overallScore >= 80 ? 'warning' : 'error'}
                      sx={{ width: 60, height: 6, borderRadius: 3 }}
                    />
                  </TableCell>
                  
                  <TableCell>
                    <Typography variant="body2" fontWeight="medium">
                      {project.features}
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
                    <Typography variant="body2" fontWeight="medium">
                      ⭐ {project.userSatisfaction}
                    </Typography>
                  </TableCell>
                  
                  <TableCell>
                    <LinearProgress
                      variant="determinate"
                      value={project.performance}
                      color={project.performance >= 90 ? 'success' : project.performance >= 80 ? 'warning' : 'error'}
                      sx={{ width: 50, height: 4, borderRadius: 2 }}
                    />
                  </TableCell>
                  
                  <TableCell>
                    <Typography variant="body2">
                      {project.security}%
                    </Typography>
                  </TableCell>
                  
                  <TableCell>
                    <Typography variant="body2" fontWeight="medium">
                      {project.apiEndpoints}
                    </Typography>
                  </TableCell>
                  
                  <TableCell>
                    <Typography variant="body2" fontWeight="medium">
                      {project.uiComponents}
                    </Typography>
                  </TableCell>
                  
                  <TableCell>
                    <Typography variant="body2">
                      {project.deployment}
                    </Typography>
                  </TableCell>
                  
                  <TableCell>
                    <Typography variant="body2">
                      {project.hosting}
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

export default FullStackReport;