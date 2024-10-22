import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchBar = ({ search, setSearch }) => {
    return (
        <div className="flex items-center rounded-full overflow-hidden shadow-md mb-4 w-full 
            mx-auto max-w-md lg:max-w-2xl">
            <input
                type="text"
                placeholder="Buscar por proyecto..."
                className="w-full px-6 py-3 text-gray-600 focus:outline-none bg-gray-200"
                value={search}
                onChange={(e) => setSearch(e.target.value)} 
            />
            <div className="bg-gray-200 text-gray-400 px-4 py-4 flex items-center">
                <FontAwesomeIcon icon={faSearch} className="h-4 w-4 mr-2" />
            </div>
        </div>
    );
};

export default SearchBar;
