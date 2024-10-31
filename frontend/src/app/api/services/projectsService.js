import axios from "axios";

const getProjects = async (setError) => {
    try {
        const response = await axios.get('/api/projects');
        return response.data;
        
    } catch (error) {
        const errorMessage = 'Error al cargar los proyectos'; 
        setError(errorMessage);
    }
};

const getProjectById = async (id) => {
    try {
        const response = await axios.get(`/api/project-detail/${id}`);
        return response.data;
        
    } catch (error) {
        const errorMessage = 'Error al cargar los proyectos'; 
    }
}

const updatedProject = async (id, data) => {
    try {
        const response = await axios.put(`/api/update-project/${id}`, data);
        return response.data;
        
    } catch (error) {
        const errorMessage = 'Error al cargar los proyectos'; 
    }
}

const projectsService = {
    getProjects,
    getProjectById,
    updatedProject,
};

export default projectsService;
