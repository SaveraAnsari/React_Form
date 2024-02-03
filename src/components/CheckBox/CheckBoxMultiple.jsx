import React, { useState } from 'react';

const CheckBoxMultiple = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleCheckboxChange = (option) => {
    const updatedOptions = [...selectedOptions];

    if (updatedOptions.includes(option)) {
      // If the option is already selected, remove it
      const index = updatedOptions.indexOf(option);
      updatedOptions.splice(index, 1);
    } else {
      // If the option is not selected, add it
      updatedOptions.push(option);
    }

    setSelectedOptions(updatedOptions);
  };

  return (
    <div>
      <label>
        Select Proficiency Languages:
      </label>

      <div>
        <label>
          <input
            type="checkbox"
            checked={selectedOptions.includes('React')}
            onChange={() => handleCheckboxChange('React')}
          />
          React
        </label>
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            checked={selectedOptions.includes('Python')}
            onChange={() => handleCheckboxChange('Python')}
          />
          Python
        </label>
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            checked={selectedOptions.includes('JavaScript')}
            onChange={() => handleCheckboxChange('JavaScript')}
          />
          JavaScript
        </label>
      </div>

      <p>Selected Options: {selectedOptions.join(', ')}</p>
    </div>
  );
};

export default CheckBoxMultiple;
