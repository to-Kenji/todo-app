const API_SERVER = 'http://localhost:3001/api/v1';

export const tasksIndexUrl = (userId) => `${API_SERVER}/users/${userId}/tasks`;
export const taskUrl = (params) => `${API_SERVER}/users/${params.userId}/tasks/${params.taskId}`;
export const signUpUrl = `${API_SERVER}/signup`;
export const getUserUrl = (userId) => `${API_SERVER}/users/${userId}`