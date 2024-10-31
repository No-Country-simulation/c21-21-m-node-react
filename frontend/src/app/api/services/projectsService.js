import axios from "axios";

const getProjects = async () => {
    try {
        const response = await axios.get('/api/projects');
        return response.data;
        
    } catch (error) {
        return null;
    }
};

const getProjectById = async (id) => {
    try {
        const response = await axios.get(`/api/project-detail/${id}`);
        return response.data;
        
    } catch (error) {
        return null;
    }
};

const updatedProject = async (id, data) => {
    try {
        const response = await axios.put(`/api/update-project/${id}`, data);
        return response.data;
        
    } catch (error) {
        return null;
    }
};

const deleteProject = async (id) => {
    try {
        const response = await axios.patch(`/api/delete-project/${id}`);
        return response;
        
    } catch (error) {
        return null; 
    }
};

const createProject = async (formData, accessToken) => {
    try {
        const response = await axios.post('/api/create-project', formData, {
            headers: {
                "Authorization": `Bearer ${accessToken}`,
            },
        });

        return response.data;
        
    } catch (error) {
        return null; 
    }
};

const projectsService = {
    getProjects,
    getProjectById,
    updatedProject,
    deleteProject,
    createProject
};

export default projectsService;
