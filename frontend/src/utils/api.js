const API_BASE_URL = 'http://localhost:8000';


const api = {
  async post(endpoint, data) {
    try {
      const response = await fetch(`${API_BASE_URL}/${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // You might also need to include the JWT token for authentication
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Request failed');
      }

      return await response.json();
    } catch (error) {
      throw error;
    }
  },

  // You can add more methods for GET, PUT, DELETE requests as needed
};

export default api;
