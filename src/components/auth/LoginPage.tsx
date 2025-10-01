import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Container,
  Paper,
  TextField,
  Button,
  Typography,
  Box,
  InputAdornment,
  IconButton,
  Checkbox,
  FormControlLabel,
  Divider,
  Alert
} from '@mui/material';
import { Visibility, VisibilityOff, Email, Lock, ArrowBack } from '@mui/icons-material';
import { useAuth } from '../../context/AuthContext';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const { login, isLoading } = useAuth();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [loginError, setLoginError] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
    // Clear login error when user starts typing
    if (loginError) {
      setLoginError('');
    }
  };

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    const result = await login(formData.email, formData.password);
    
    if (result.success) {
      navigate('/dashboard');
    } else {
      setLoginError(result.error || 'Login failed');
    }
  };

  return (
    <Container maxWidth="sm" sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', py: 4 }}>
      <Box sx={{ width: '100%' }}>
        {/* Back to Home */}
        <Box sx={{ mb: 4 }}>
          <Button
            component={Link}
            to="/"
            startIcon={<ArrowBack />}
            sx={{ color: 'primary.main', textTransform: 'none' }}
          >
            Back to Home
          </Button>
        </Box>

        {/* Header */}
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
            <Box
              sx={{
                width: 64,
                height: 64,
                bgcolor: 'primary.main',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Box
                sx={{
                  width: 32,
                  height: 32,
                  bgcolor: 'white',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Box
                  sx={{
                    width: 16,
                    height: 16,
                    bgcolor: 'primary.main',
                    borderRadius: '50%'
                  }}
                />
              </Box>
            </Box>
          </Box>
          <Typography variant="h3" component="h1" gutterBottom fontWeight="bold">
            Welcome Back
          </Typography>
          <Typography variant="body1" color="text.secondary" align="center">
            Sign in to your account to continue
          </Typography>
          
          {/* Demo Credentials Info */}
          <Paper 
            elevation={0} 
            sx={{ 
              bgcolor: 'info.light', 
              color: 'info.contrastText', 
              p: 2, 
              mt: 2, 
              borderRadius: 2 
            }}
          >
            <Typography variant="subtitle2" gutterBottom>
              🔐 Demo Login Credentials:
            </Typography>
            <Typography variant="body2" component="div">
              <strong>Admin:</strong> admin@techcorp.com / admin123<br />
              <strong>User:</strong> user@techcorp.com / user123<br />
              <strong>Demo:</strong> demo@techcorp.com / demo123<br />
              <strong>Test:</strong> test@techcorp.com / test123
            </Typography>
          </Paper>
        </Box>

        {/* Login Form */}
        <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
          {loginError && (
            <Alert severity="error" sx={{ mb: 3 }}>
              {loginError}
            </Alert>
          )}
          
          <form onSubmit={handleSubmit}>
            <Box sx={{ mb: 3 }}>
              <TextField
                fullWidth
                id="email"
                name="email"
                label="Email Address"
                type="email"
                autoComplete="email"
                value={formData.email}
                onChange={handleInputChange}
                error={!!errors.email}
                helperText={errors.email}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Email color="action" />
                    </InputAdornment>
                  ),
                }}
                sx={{ mb: 2 }}
              />
            </Box>

            <Box sx={{ mb: 3 }}>
              <TextField
                fullWidth
                id="password"
                name="password"
                label="Password"
                type={showPassword ? 'text' : 'password'}
                autoComplete="current-password"
                value={formData.password}
                onChange={handleInputChange}
                error={!!errors.password}
                helperText={errors.password}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Lock color="action" />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => setShowPassword(!showPassword)}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Box>

            {/* Remember Me & Forgot Password */}
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
              <FormControlLabel
                control={<Checkbox name="remember" color="primary" />}
                label="Remember me"
              />
              <Button variant="text" size="small" sx={{ textTransform: 'none' }}>
                Forgot password?
              </Button>
            </Box>

            {/* Submit Button */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              size="large"
              disabled={isLoading}
              sx={{ 
                py: 1.5, 
                mb: 3,
                textTransform: 'none',
                fontSize: '1rem'
              }}
            >
              {isLoading ? 'Signing in...' : 'Sign In'}
            </Button>
          </form>

          {/* Divider */}
          <Divider sx={{ my: 3 }}>
            <Typography variant="body2" color="text.secondary">
              Don't have an account?
            </Typography>
          </Divider>

          {/* Sign Up Link */}
          <Box sx={{ textAlign: 'center' }}>
            <Button
              component={Link}
              to="/signup"
              variant="text"
              sx={{ textTransform: 'none' }}
            >
              Create a new account
            </Button>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};

export default LoginPage;