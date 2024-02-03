import React, { useState } from 'react';

const CheckboxGroup = () => {
  const [excellent, setExcellent] = useState(false);
  const [good, setGood] = useState(false);
  const [poor, setPoor] = useState(false);

  const handleCheckboxChange = (checkboxName) => {
    switch (checkboxName) {
      case 'excellent':
        setExcellent(!excellent);
        setGood(false);
        setPoor(false);
        break;
      case 'good':
        setExcellent(false);
        setGood(!good);
        setPoor(false);
        break;
      case 'poor':
        setExcellent(false);
        setGood(false);
        setPoor(!poor);
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <label>
        Rate Your Programming Concepts:
      </label>

      <div>
        <label>
          <input
            type="checkbox"
            checked={excellent}
            onChange={() => handleCheckboxChange('excellent')}
          />
          Excellent
        </label>
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            checked={good}
            onChange={() => handleCheckboxChange('good')}
          />
          Good
        </label>
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            checked={poor}
            onChange={() => handleCheckboxChange('poor')}
          />
          Poor
        </label>
      </div>
    </div>
  );
};

export default CheckboxGroup;
