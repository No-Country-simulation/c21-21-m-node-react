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

const projectsService = {
    getProjects,
    getProjectById,
};

export default projectsService;
