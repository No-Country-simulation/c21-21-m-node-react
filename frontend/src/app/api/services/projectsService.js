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
        const errorMessage = 'Error al cargar detalle del proyecto'; 
    }
};

const updatedProject = async (id, data) => {
    try {
        const response = await axios.put(`/api/update-project/${id}`, data);
        return response.data;
        
    } catch (error) {
        const errorMessage = 'Error al actualizar el proyecto'; 
    }
};

const deleteProject = async (id) => {
    try {
        const response = await axios.patch(`/api/delete-project/${id}`);
        return response.data;
        
    } catch (error) {
        const errorMessage = 'Error al eliminar el proyecto'; 
    }
};

const createProject = async (id) => {
    try {
        const response = await axios.patch(`/api/delete-project/${id}`);
        return response.data;
        
    } catch (error) {
        const errorMessage = 'Error al eliminar el proyecto'; 
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
