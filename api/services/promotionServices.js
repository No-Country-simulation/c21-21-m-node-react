import promotionModel from "../models/promotionModel.js";

// Crea una nueva promoción
const createPromotion = async (data) => {
    const { projectId, title, description, img, post_date, userId } = data;

    try {
        // Verificación si ya existe una promoción con el mismo ID
        const existingUpdate = await promotionModel.findById(id);
        if (!existingUpdate) {
            throw new Error("No promotions with this id");
        }

        // Creación de la nueva promoción
        const newUpdate = new promotionModel({
            title,
            description,
            post_date,
            img,
            project: projectId,
            user: userId || null,
        });

        // Guardar la promoción en la base de datos
        const savePromotion = await newUpdate.save();
        console.log('Promotion created successfully:', savePromotion);
        return savePromotion;
    } catch (error) {
        console.error('Something is wrong: ' + error);
        throw error;
    }
};

// Obtiene todas las promociones
const getAllPromotions = async () => {
    try {
        // Obtiene todas las promociones de la base de datos
        const allPromotion = await promotionModel.find();
        if (!allPromotion) {
            throw new Error("No promotions with this id");
        }
        return allPromotion;
    } catch (error) {
        throw new Error('Error fetching Promotions: ' + error.message);
    }
};

// Busca una promoción específica por su ID
const getPromotion = async (id) => {
    try {
        // Busca la promoción por su ID
        const promotion = await promotionModel.findById(id);
        if (!promotion) {
            throw new Error("Don't exist promotion with this id");
        }
        return promotion;
    } catch (error) {
        console.error('Error to obtain this promotion:' + error.message);
        throw error;
    }
};

// Actualiza una promoción bajo su ID
const updatePromotion = async (id, promotionData) => {
    try {
        // Actualiza la promoción con los nuevos datos
        const updatedPromotion = await promotionModel.findByIdAndUpdate(id, promotionData, { new: true, runValidators: true });
        if (!updatedPromotion) {
            throw new Error('Promotion not found');
        }
        return updatedPromotion;
    } catch (error) {
        throw new Error('Error updating promotion: ' + error.message);
    }
};

export default {
    createPromotion,
    getAllPromotions,
    getPromotion,
    updatePromotion
};
