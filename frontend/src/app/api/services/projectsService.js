import axios from "axios";

const getProjects = async () => {
    try {
        const response = await axios.get('https://run.mocky.io/v3/8ab007b8-214b-458d-99b8-61cb42810e38');
        return response.data.projects;
    } catch (error) {
        throw new Error("Error al cargar los proyectos.");
    }
};

const projectsService = {
    getProjects,
};

export default projectsService;
