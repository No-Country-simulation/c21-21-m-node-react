import promotionServices from "../services/promotionServices.js";
import promotionModel from "../models/promotionModel.js";

// Crea una nueva promoción 
const createPromotion = async (req, res) => {

    const { projectId, title, description, img, post_date, userId } = req.body;

    try {
        // Verifica que se envíen los campos requeridos
        if (!title || !description || !projectId || !userId) {
            return res.status(400).json({
                message: "Title, description, projectId, and userId are required",
            });
        }

        // Crea una nueva promoción
        const newPromotion = new promotionModel({
            title,
            description,
            post_date,
            img,
            project: projectId,
            user: userId,
        });

        // Guarda la nueva promoción en la base de datos
        const savedPromotion = await newPromotion.save();
        console.log(savedPromotion);

        return res.status(201).json(savedPromotion);
    } catch (error) {
        console.error('Algo salió mal:', error);
        return res.status(500).json({ message: "Error creating promotion", error: error.message });
    }
};

// Obtiene todas las promociones
const getAllPromotions = async (req, res) => {
    try {
        // Llama al servicio para obtener todas las promociones
        const promotions = await promotionServices.getAllPromotions();
        res.status(200).json(promotions);
    } catch (error) {
        res.status(500).json({
            message: "Error fetching promotions",
            error: error.message,
        });
    }
};

// Obtiene una promoción específica por su ID
const getPromotionById = async (req, res) => {
    try {
        const { id } = req.params;
        // Llama al servicio para obtener la promoción por ID
        const promotion = await promotionServices.getPromotion(id);

        if (!promotion) {
            return res.status(404).json({
                message: "Promotion not found"
            });
        }
        return res.status(200).json(promotion);
    } catch (error) {
        res.status(500).json({
            message: "Error found promotion",
            error: error.message
        });
    }
};

// Actualiza una promoción por su ID
const updatePromotionById = async (req, res) => {
    const { id } = req.params;
    const promotionData = req.body;

    try {
        // Verifica que al menos un campo esté presente para actualizar
        if (!promotionData.title && !promotionData.description && !promotionData.img && !promotionData.post_date) {
            return res.status(400).json({ message: "At least one field is required to update" });
        }

        // Llama al servicio para actualizar la promoción
        const updatedPromotion = await promotionServices.updatePromotion(id, promotionData);
        return res.status(200).json(updatedPromotion);
    } catch (error) {
        console.error('Error:', error.message);
        return res.status(500).json({ message: "Error updating promotion", error: error.message });
    }
};

export default {
    createPromotion,
    getAllPromotions,
    getPromotionById,
    updatePromotionById
};
