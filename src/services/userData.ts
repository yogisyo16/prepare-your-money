// import axios from 'axios'

// // Create axios instance with default config
// const api = axios.create({
//     baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3000/api',
//     headers: {
//         'Content-Type': 'application/json'
//     }
// })

// // Add authentication interceptor
// api.interceptors.request.use((config) => {
//     const token = localStorage.getItem('token')
//     if (token) {
//         config.headers.Authorization = `Bearer ${token}`
//     }
//     return config
// })

interface UserData {
    id: number;
    name: string;
    email: string;
    role: string;
}

export const userData = {
    getUserProfile(): UserData {
        // Your logic here to get user data
        return {
            id: 1,
            name: 'John Doe',
            email: 'john@example.com',
            role: 'user'
        }
    },
    
    updateUserProfile(data: Partial<UserData>): void {
        // Your logic here to update user data
    }
}