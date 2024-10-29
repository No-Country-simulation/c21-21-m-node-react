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

const projectsService = {
    getProjects,
};

export default projectsService;
