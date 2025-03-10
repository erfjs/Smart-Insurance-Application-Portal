import { api } from './axios';

export const fetchSubmissions = async () => {
	const response = await api.get('/api/insurance/forms/submissions');
	return response.data;
};              
