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
  Storage,
  Security,
  Speed,
  BugReport,
  CheckCircle,
  CloudQueue,
  Api
} from '@mui/icons-material';

interface BackendProjectData {
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
  apis: number;
  codeQuality: number;
  testCoverage: number;
  deployments: number;
  uptime: number;
  responseTime: number;
  throughput: string;
  database: string;
  server: string;
  architecture: string;
  monitoring: string;
  logging: string;
  caching: string;
  authentication: string;
  authorization: string;
  documentation: number;
  maintenance: 'Active' | 'Minimal' | 'Legacy';
  lastUpdate: string;
  priority: 'Low' | 'Medium' | 'High' | 'Critical';
  scalability: number;
  reliability: number;
}

const BackendDevelopmentReport: React.FC = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [complexityFilter, setComplexityFilter] = useState('All');

  const projectsData: BackendProjectData[] = [
    {
      id: 'BE001',
      projectName: 'E-commerce API Gateway',
      client: 'TechMart Solutions',
      technology: ['Node.js', 'Express', 'MongoDB', 'Redis'],
      status: 'Completed',
      progress: 100,
      startDate: '2024-01-15',
      endDate: '2024-06-30',
      budget: 150000,
      spent: 142000,
      teamSize: 6,
      lead: 'John Smith',
      complexity: 'High',
      performance: 94,
      security: 96,
      bugs: 2,
      apis: 45,
      codeQuality: 92,
      testCoverage: 89,
      deployments: 28,
      uptime: 99.9,
      responseTime: 120,
      throughput: '10K req/min',
      database: 'MongoDB Atlas',
      server: 'AWS EC2',
      architecture: 'Microservices',
      monitoring: 'New Relic',
      logging: 'ELK Stack',
      caching: 'Redis',
      authentication: 'JWT',
      authorization: 'RBAC',
      documentation: 94,
      maintenance: 'Active',
      lastUpdate: '2024-12-20',
      priority: 'High',
      scalability: 95,
      reliability: 98
    },
    {
      id: 'BE002',
      projectName: 'Banking Core System',
      client: 'SecureBank Corp',
      technology: ['Java', 'Spring Boot', 'PostgreSQL', 'Kafka'],
      status: 'In Progress',
      progress: 78,
      startDate: '2024-02-01',
      endDate: '2024-12-31',
      budget: 280000,
      spent: 195000,
      teamSize: 12,
      lead: 'Sarah Johnson',
      complexity: 'Critical',
      performance: 91,
      security: 99,
      bugs: 8,
      apis: 67,
      codeQuality: 96,
      testCoverage: 94,
      deployments: 22,
      uptime: 99.95,
      responseTime: 85,
      throughput: '25K req/min',
      database: 'PostgreSQL',
      server: 'AWS EKS',
      architecture: 'Event-Driven',
      monitoring: 'Prometheus',
      logging: 'Fluentd',
      caching: 'Hazelcast',
      authentication: 'OAuth 2.0',
      authorization: 'ABAC',
      documentation: 97,
      maintenance: 'Active',
      lastUpdate: '2024-12-22',
      priority: 'Critical',
      scalability: 97,
      reliability: 99
    },
    {
      id: 'BE003',
      projectName: 'Healthcare Data Platform',
      client: 'MedTech Innovations',
      technology: ['Python', 'Django', 'MySQL', 'Celery'],
      status: 'Testing',
      progress: 92,
      startDate: '2024-03-10',
      endDate: '2024-11-15',
      budget: 200000,
      spent: 178000,
      teamSize: 8,
      lead: 'Michael Chen',
      complexity: 'High',
      performance: 88,
      security: 97,
      bugs: 12,
      apis: 38,
      codeQuality: 90,
      testCoverage: 91,
      deployments: 18,
      uptime: 99.8,
      responseTime: 150,
      throughput: '8K req/min',
      database: 'MySQL',
      server: 'Google Cloud',
      architecture: 'Monolithic',
      monitoring: 'Datadog',
      logging: 'Logstash',
      caching: 'Memcached',
      authentication: 'SAML',
      authorization: 'RBAC',
      documentation: 88,
      maintenance: 'Active',
      lastUpdate: '2024-12-18',
      priority: 'High',
      scalability: 85,
      reliability: 94
    },
    {
      id: 'BE004',
      projectName: 'Social Media Backend',
      client: 'ConnectNow Inc',
      technology: ['Go', 'Gin', 'CockroachDB', 'NATS'],
      status: 'In Progress',
      progress: 65,
      startDate: '2024-04-01',
      endDate: '2025-02-28',
      budget: 180000,
      spent: 98000,
      teamSize: 7,
      lead: 'Emily Rodriguez',
      complexity: 'Medium',
      performance: 82,
      security: 86,
      bugs: 15,
      apis: 28,
      codeQuality: 87,
      testCoverage: 81,
      deployments: 14,
      uptime: 99.5,
      responseTime: 95,
      throughput: '15K req/min',
      database: 'CockroachDB',
      server: 'DigitalOcean',
      architecture: 'Microservices',
      monitoring: 'Grafana',
      logging: 'Loki',
      caching: 'Redis',
      authentication: 'Firebase Auth',
      authorization: 'Custom',
      documentation: 79,
      maintenance: 'Active',
      lastUpdate: '2024-12-21',
      priority: 'Medium',
      scalability: 88,
      reliability: 92
    },
    {
      id: 'BE005',
      projectName: 'Real Estate API',
      client: 'PropertyPro Ltd',
      technology: ['C#', '.NET Core', 'SQL Server', 'SignalR'],
      status: 'Completed',
      progress: 100,
      startDate: '2023-09-01',
      endDate: '2024-03-15',
      budget: 120000,
      spent: 115000,
      teamSize: 5,
      lead: 'David Kim',
      complexity: 'Medium',
      performance: 89,
      security: 91,
      bugs: 3,
      apis: 32,
      codeQuality: 93,
      testCoverage: 87,
      deployments: 25,
      uptime: 99.7,
      responseTime: 110,
      throughput: '12K req/min',
      database: 'SQL Server',
      server: 'Azure',
      architecture: 'Layered',
      monitoring: 'Application Insights',
      logging: 'Serilog',
      caching: 'In-Memory',
      authentication: 'Identity Server',
      authorization: 'Claims-based',
      documentation: 91,
      maintenance: 'Minimal',
      lastUpdate: '2024-11-30',
      priority: 'Low',
      scalability: 86,
      reliability: 95
    },
    {
      id: 'BE006',
      projectName: 'IoT Data Processing',
      client: 'SmartHome Technologies',
      technology: ['Rust', 'Actix', 'InfluxDB', 'RabbitMQ'],
      status: 'Planning',
      progress: 20,
      startDate: '2024-12-01',
      endDate: '2025-08-31',
      budget: 250000,
      spent: 35000,
      teamSize: 9,
      lead: 'Lisa Wang',
      complexity: 'Critical',
      performance: 0,
      security: 0,
      bugs: 0,
      apis: 5,
      codeQuality: 0,
      testCoverage: 0,
      deployments: 0,
      uptime: 0,
      responseTime: 0,
      throughput: '0 req/min',
      database: 'InfluxDB',
      server: 'AWS IoT',
      architecture: 'Event-Driven',
      monitoring: 'CloudWatch',
      logging: 'CloudTrail',
      caching: 'ElastiCache',
      authentication: 'Certificate-based',
      authorization: 'Device Identity',
      documentation: 45,
      maintenance: 'Active',
      lastUpdate: '2024-12-23',
      priority: 'High',
      scalability: 0,
      reliability: 0
    },
    {
      id: 'BE007',
      projectName: 'Logistics Management API',
      client: 'ShipFast Logistics',
      technology: ['PHP', 'Laravel', 'MariaDB', 'Horizon'],
      status: 'On Hold',
      progress: 45,
      startDate: '2024-05-15',
      endDate: '2025-01-31',
      budget: 160000,
      spent: 65000,
      teamSize: 6,
      lead: 'Robert Taylor',
      complexity: 'Medium',
      performance: 75,
      security: 82,
      bugs: 18,
      apis: 22,
      codeQuality: 83,
      testCoverage: 72,
      deployments: 9,
      uptime: 98.5,
      responseTime: 180,
      throughput: '6K req/min',
      database: 'MariaDB',
      server: 'Linode',
      architecture: 'MVC',
      monitoring: 'Bugsnag',
      logging: 'Monolog',
      caching: 'Redis',
      authentication: 'Passport',
      authorization: 'Gates & Policies',
      documentation: 74,
      maintenance: 'Minimal',
      lastUpdate: '2024-10-15',
      priority: 'Low',
      scalability: 78,
      reliability: 85
    },
    {
      id: 'BE008',
      projectName: 'Trading Platform Engine',
      client: 'TradePro Financial',
      technology: ['Scala', 'Akka', 'Cassandra', 'Kafka'],
      status: 'In Progress',
      progress: 88,
      startDate: '2024-01-20',
      endDate: '2024-12-30',
      budget: 350000,
      spent: 285000,
      teamSize: 15,
      lead: 'Jennifer Martinez',
      complexity: 'Critical',
      performance: 98,
      security: 99,
      bugs: 4,
      apis: 78,
      codeQuality: 97,
      testCoverage: 96,
      deployments: 35,
      uptime: 99.99,
      responseTime: 45,
      throughput: '50K req/min',
      database: 'Cassandra',
      server: 'Bare Metal',
      architecture: 'Actor Model',
      monitoring: 'Kamon',
      logging: 'Logback',
      caching: 'Hazelcast',
      authentication: 'mTLS',
      authorization: 'Custom RBAC',
      documentation: 98,
      maintenance: 'Active',
      lastUpdate: '2024-12-23',
      priority: 'Critical',
      scalability: 99,
      reliability: 99
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
  const avgUptime = Math.round(projectsData.reduce((sum, p) => sum + p.uptime, 0) / totalProjects * 100) / 100;

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom fontWeight="bold">
          Backend Development Report
        </Typography>
        <Typography variant="h6" color="text.secondary" gutterBottom>
          Comprehensive analysis of backend development projects and server performance metrics
        </Typography>
      </Box>

      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Storage sx={{ color: 'primary.main', mr: 1 }} />
                <Typography variant="h6">Total Projects</Typography>
              </Box>
              <Typography variant="h4" fontWeight="bold">{totalProjects}</Typography>
              <Typography variant="body2" color="text.secondary">
                Backend systems
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
                Production ready
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
                <CloudQueue sx={{ color: 'info.main', mr: 1 }} />
                <Typography variant="h6">Avg Uptime</Typography>
              </Box>
              <Typography variant="h4" fontWeight="bold">{avgUptime}%</Typography>
              <Typography variant="body2" color="text.secondary">
                System reliability
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
                <TableCell sx={{ fontWeight: 'bold', minWidth: 200 }}>Project Name</TableCell>
                <TableCell sx={{ fontWeight: 'bold', minWidth: 150 }}>Client</TableCell>
                <TableCell sx={{ fontWeight: 'bold', minWidth: 200 }}>Technologies</TableCell>
                <TableCell sx={{ fontWeight: 'bold', minWidth: 120 }}>Status</TableCell>
                <TableCell sx={{ fontWeight: 'bold', minWidth: 100 }}>Progress</TableCell>
                <TableCell sx={{ fontWeight: 'bold', minWidth: 120 }}>Budget</TableCell>
                <TableCell sx={{ fontWeight: 'bold', minWidth: 100 }}>Team Size</TableCell>
                <TableCell sx={{ fontWeight: 'bold', minWidth: 150 }}>Project Lead</TableCell>
                <TableCell sx={{ fontWeight: 'bold', minWidth: 120 }}>Complexity</TableCell>
                <TableCell sx={{ fontWeight: 'bold', minWidth: 120 }}>Performance</TableCell>
                <TableCell sx={{ fontWeight: 'bold', minWidth: 100 }}>Security</TableCell>
                <TableCell sx={{ fontWeight: 'bold', minWidth: 80 }}>APIs</TableCell>
                <TableCell sx={{ fontWeight: 'bold', minWidth: 100 }}>Uptime</TableCell>
                <TableCell sx={{ fontWeight: 'bold', minWidth: 120 }}>Response Time</TableCell>
                <TableCell sx={{ fontWeight: 'bold', minWidth: 120 }}>Throughput</TableCell>
                <TableCell sx={{ fontWeight: 'bold', minWidth: 120 }}>Database</TableCell>
                <TableCell sx={{ fontWeight: 'bold', minWidth: 120 }}>Server</TableCell>
                <TableCell sx={{ fontWeight: 'bold', minWidth: 120 }}>Architecture</TableCell>
                <TableCell sx={{ fontWeight: 'bold', minWidth: 120 }}>Scalability</TableCell>
                <TableCell sx={{ fontWeight: 'bold', minWidth: 120 }}>Reliability</TableCell>
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
                          color: project.security >= 95 ? 'success.main' : project.security >= 85 ? 'warning.main' : 'error.main' 
                        }} 
                      />
                      <Typography variant="body2">
                        {project.security}%
                      </Typography>
                    </Box>
                  </TableCell>
                  
                  <TableCell>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Api sx={{ fontSize: 16, color: 'primary.main' }} />
                      <Typography variant="body2" fontWeight="medium">
                        {project.apis}
                      </Typography>
                    </Box>
                  </TableCell>
                  
                  <TableCell>
                    <Typography 
                      variant="body2" 
                      fontWeight="medium"
                      color={project.uptime >= 99.5 ? 'success.main' : project.uptime >= 99 ? 'warning.main' : 'error.main'}
                    >
                      {project.uptime}%
                    </Typography>
                  </TableCell>
                  
                  <TableCell>
                    <Typography 
                      variant="body2"
                      color={project.responseTime <= 100 ? 'success.main' : project.responseTime <= 200 ? 'warning.main' : 'error.main'}
                    >
                      {project.responseTime}ms
                    </Typography>
                  </TableCell>
                  
                  <TableCell>
                    <Typography variant="body2" fontWeight="medium">
                      {project.throughput}
                    </Typography>
                  </TableCell>
                  
                  <TableCell>
                    <Typography variant="body2">
                      {project.database}
                    </Typography>
                  </TableCell>
                  
                  <TableCell>
                    <Typography variant="body2">
                      {project.server}
                    </Typography>
                  </TableCell>
                  
                  <TableCell>
                    <Typography variant="body2">
                      {project.architecture}
                    </Typography>
                  </TableCell>
                  
                  <TableCell>
                    <LinearProgress
                      variant="determinate"
                      value={project.scalability}
                      color={project.scalability >= 90 ? 'success' : project.scalability >= 80 ? 'warning' : 'error'}
                      sx={{ width: 60, height: 4, borderRadius: 2 }}
                    />
                  </TableCell>
                  
                  <TableCell>
                    <LinearProgress
                      variant="determinate"
                      value={project.reliability}
                      color={project.reliability >= 95 ? 'success' : project.reliability >= 90 ? 'warning' : 'error'}
                      sx={{ width: 60, height: 4, borderRadius: 2 }}
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

export default BackendDevelopmentReport;