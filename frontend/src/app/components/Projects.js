"use client";
import { useState } from "react";
import Card from "./Card";
import ProjectsCard from "./cards/Projects";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faChevronDown,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import PorAhora from "../../../public/images/banner.webp";

const categories = ["Todos", "Animal", "Tecnología", "Salud", "Ambiental"];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleCategory = (category) => {
    setSelectedCategory(category);
    setDropdownOpen(false);
  };

  return (
    <>
      <h1 className="text-customH1 pb-6 font-bold text-center">
        Encuentra proyectos interesantes
      </h1>
      <div
        className="flex items-center rounded-full 
                overflow-hidden shadow-md mb-4 w-full mx-auto max-w-md lg:max-w-2xl"
      >
        <input
          type="text"
          placeholder="Buscar por proyecto..."
          className="w-full px-4 py-3 text-gray-600 focus:outline-none bg-gray-200"
        />
        <button className="bg-gray-200 text-gray-400 px-4 py-4 flex items-center">
          <FontAwesomeIcon icon={faSearch} className="h-4 w-4 mr-2" />
        </button>
      </div>
      <div className="flex flex-col pb-8 md:flex-row md:justify-around">
        <div className="md:hidden mb-4">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex justify-between items-center w-full px-4 py-2 
                            border border-gray-300 rounded-full bg-white shadow-md text-gray-600 
                            focus:outline-none"
          >
            <span>{selectedCategory}</span>
            <FontAwesomeIcon
              icon={dropdownOpen ? faChevronUp : faChevronDown}
            />
          </button>
          {dropdownOpen && (
            <div
              className="absolute left-0 right-0 mt-2 bg-white border 
                                border-gray-300 rounded-lg shadow-lg z-10 max-w-sm mx-auto"
            >
              {categories.map((category) => (
                <button
                  key={category}
                  className={`block w-full text-left px-4 py-2 
                                                hover:bg-gray-100 ${
                                                  selectedCategory === category
                                                    ? "font-bold text-black"
                                                    : "text-gray-500"
                                                }`}
                  onClick={() => handleCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Desktop - categoría. Crear componente */}
        <div className="hidden md:flex w-full pt-8 space-x-1">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-5 py-2 rounded-full font-bold transition duration-300 ${
                selectedCategory === category
                  ? "bg-black text-white"
                  : "text-gray-500 hover:bg-gray-100 hover:text-black"
              }`}
              onClick={() => handleCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
                gap-y-6 gap-x-3 w-full"
      >
        <Card
          imgSrc={PorAhora}
          title="Proyecto"
          percentage="80"
          isProjectsPage={true}
        >
          <ProjectsCard />
        </Card>
      </div>
    </>
  );
};

export default Projects;
