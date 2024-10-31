import { useState } from "react";

const useModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [modalTitle, setModalTitle] = useState("");
    const [modalContent, setModalContent] = useState(null);
    const [modalWidth, setModalWidth] = useState("");
    const [modalHeight, setModalHeight] = useState("");
    const [modalMargin, setModalMargin] = useState("");
    const [isError, setIsError] = useState(false);

    const openModal = (title, content, width, height = "h-auto", margin, isError = false) => {
        setModalTitle(title);
        setModalContent(content);
        setModalWidth(width);
        setModalHeight(height);
        setModalMargin(margin);
        setIsError(isError);
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
        setModalContent(null);
    };

    return {
        isOpen,
        modalTitle,
        modalContent,
        modalWidth,
        modalHeight,
        modalMargin,
        isError,
        openModal,
        closeModal
    };
};

export default useModal;
