import axios from "axios";

const getProjects = async () => {
    try {
        const response = await axios.get('/api/projects');
        return response.data;
    } catch (error) {
        throw new Error("Error al cargar los proyectos.");
    }
};

const projectsService = {
    getProjects,
};

export default projectsService;
