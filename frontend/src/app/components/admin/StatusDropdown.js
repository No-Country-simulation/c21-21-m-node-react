import { useState } from "react";
import Button from "../Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

const StatusDropdown = ({ statuses, selectedStatus, handleStatus }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen((prev) => !prev);
    };

    const handleStatusSelect = (status) => {
        handleStatus(status);
        setDropdownOpen(false); 
    };
    
    return (
        <div className="md:hidden mb-4">
            <Button
                onClick={toggleDropdown}
                className="flex justify-between items-center w-full px-4 py-2 border 
                border-gray-300 rounded-full bg-white shadow-md text-gray-600 focus:outline-none">
                <span>{selectedStatus}</span>
                <FontAwesomeIcon icon={dropdownOpen ? faChevronUp : faChevronDown} />
            </Button>
            {
                dropdownOpen && (
                    <div className="absolute left-0 right-0 mt-2 bg-white border border-gray-300 
                        rounded-lg shadow-lg z-10 max-w-sm mx-auto">
                        {
                            statuses.map((status) => (
                                <Button
                                    key={status}
                                    className={`block w-full text-left px-4 py-2 hover:bg-gray-100 
                                        ${selectedStatus === status ? "font-bold text-black" 
                                        : "text-gray-500"}`}
                                    onClick={() => handleStatusSelect(status)}>
                                    {status}
                                </Button>
                            ))
                        }
                    </div>
                )
            }
        </div>
    );
};

export default StatusDropdown;
