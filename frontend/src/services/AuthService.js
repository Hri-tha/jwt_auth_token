class AuthService {
    static async login(email, password) {
      try {
        // Make API call to your backend to authenticate user
        const response = await fetch('http://your-api-url/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        });
  
        if (!response.ok) {
          throw new Error('Login failed');
        }
  
        const data = await response.json();
        // Store token in local storage
        localStorage.setItem('token', data.token);
  
        return data;
      } catch (error) {
        throw error;
      }
    }
  
    static async register(email, password) {
      try {
        // Make API call to your backend to register user
        const response = await fetch('http://your-api-url/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        });
  
        if (!response.ok) {
          throw new Error('Registration failed');
        }
  
        const data = await response.json();
        // Store token in local storage
        localStorage.setItem('token', data.token);
  
        return data;
      } catch (error) {
        throw error;
      }
    }
  
    static logout() {
      // Clear token from local storage
      localStorage.removeItem('token');
      // Perform any other logout-related actions (e.g., redirect)
    }
  }
  
  export default AuthService;
  