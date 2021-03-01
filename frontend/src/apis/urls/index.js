const API_SERVER = 'http://localhost:3001/api/v1';

export const tasksIndexUrl = `${API_SERVER}/tasks`;
export const taskUrl = (taskId) => `${API_SERVER}/tasks/${taskId}`;
export const signUpUrl = `${API_SERVER}/signup`;
export const getUserUrl = (userId) => `${API_SERVER}/users/${userId}`