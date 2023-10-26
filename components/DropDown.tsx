import { useState } from "react";

const GenderInputModal: React.FC<{
  onGenderSelect: (gender: string) => void;
}> = ({ onGenderSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedGender, setSelectedGender] = useState<string | undefined>(""); // Initially, no gender is selected

  const genders = ["Male", "Female"]; //I am only consiaring this 2 geners, but we can add any number of genders here.

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectGender = (gender: string) => {
    setSelectedGender(gender);
    onGenderSelect(gender);
    setIsOpen(false);
  };

  return (
    <div className="relative w-full">
      <input
        type="text"
        onClick={toggleDropdown}
        value={selectedGender}
        readOnly
        className="w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-0 focus:ring-indigo-500 focus:ring-opacity-50"
        id="gender-input-modal"
        aria-haspopup="listbox"
        required
      />

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
          <div
            role="listbox"
            aria-labelledby="gender-input-modal"
            className="py-1"
          >
            {genders.map((gender, index) => (
              <div
                key={index}
                onClick={() => selectGender(gender)}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-100 hover:text-indigo-900"
              >
                {gender}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default GenderInputModal;
