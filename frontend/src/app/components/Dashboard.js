"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "./Button";
import Card from "./Card";
import Entrepreneur from "./cards/Entrepreneur";
import Investor from "./cards/Investor";
import Modal from "./Modal";
import ProjectForm from "./ProjectForm";
import PorAhora from "../../../public/banner.webp";

const Dashboard = () => {
  const [projects, setProjects] = useState([]);
  const [totalProjects, setTotalProjects] = useState(0);
  const [totalAmount, setTotalAmount] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalContent, setModalContent] = useState(null);
  const [modalSize, setModalSize] = useState("");
  const [role, setRole] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://run.mocky.io/v3/175491e7-0ddf-4d09-9138-cf6c68d68f77"
        );
        setRole("inversor");
        setProjects(response.data.projects);
        setTotalProjects(response.data.totalProjects);
        setTotalAmount(response.data.totalAmount);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, []);

  const openModal = (title, content, size) => {
    setModalTitle(title);
    setModalContent(content);
    setModalSize(size);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent(null);
  };

  const title =
    role === "emprendedor"
      ? "Tus proyectos"
      : "Proyectos en los que has invertido";
  const buttonTitle =
    role === "emprendedor" ? "Crear campaña" : "Ver proyectos para invertir";

  const labelTotalProjects =
    role === "emprendedor" ? "Total proyectos" : "Total proyectos invertidos";
  const labelTotalAmount =
    role === "emprendedor" ? "Total recaudado" : "Total inversión";

  return (
    <>
      <div
        className="flex flex-col md:flex-row justify-between items-start lg:items-center 
                mb-4 space-y-4 md:space-y-0"
      >
        <h1 className="text-customH1 pb-2 lg:pb-0 font-bold">{title}</h1>
        <div className="w-full md:w-auto">
          <Button
            onClick={() => {
              role === "emprendedor"
                ? openModal(
                    "Crear campaña",
                    <ProjectForm />,
                    "max-w-4xl max-h-[80vh]"
                  )
                : (window.location.href = "/"); // cambiarlo por el enrutamiento de next
            }}
            className="w-full bg-customGreen text-white font-bold px-6 py-3 rounded-full"
          >
            {buttonTitle}
          </Button>
        </div>
      </div>
      <div className="flex flex-col pt-2 pb-5 sm:flex-row sm:space-x-6 space-y-2 sm:space-y-0 mb-6">
        <p className="font-bold">
          {labelTotalProjects}: {totalProjects}
        </p>
        <p className="font-bold">
          {labelTotalAmount}: ${totalAmount}
        </p>
      </div>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 
                gap-y-8 w-full gap-x-6"
      >
        {projects.map((project, index) => (
          <Card
            key={project.id || index}
            imgSrc={project.imgSrc || PorAhora}
            title={project.title}
            percentage={project.percentage}
          >
            {role === "emprendedor" ? (
              <Entrepreneur projectDetails={project} openModal={openModal} />
            ) : (
              <Investor projectDetails={project} openModal={openModal} />
            )}
          </Card>
        ))}
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title={modalTitle}
        size={modalSize}
      >
        {modalContent}
      </Modal>
    </>
  );
};

export default Dashboard;
