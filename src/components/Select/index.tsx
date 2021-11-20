import React from 'react';
import './index.scss';

const Select: React.FC<{
  readonly labelName?: string;
  readonly options?: Array<number>;
  readonly handleChange?: (e:React.SyntheticEvent<HTMLSelectElement>) => void;
}>  = ({
  labelName,
  options=[],
  handleChange
}) => {
  return (
    <div className='select-wrapper' data-test='select'>
      {{labelName} && <label>{labelName}</label>}
    <select 
      required 
      defaultValue={'DEFAULT'}
      onChange={handleChange}
    >
      {options.map((option) => 
        <option key={option} value={option}>
          #Progress{option}
        </option>
      )}
    </select>
    </div>
  )
}

export default Select;