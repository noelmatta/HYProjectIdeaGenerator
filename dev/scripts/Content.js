import React from 'react';

const Line = (props) => {
  return (
    <select>
      {
        props.data.map((key) => {
          return (
            <option key={key} name={key}>{key}</option>
          )
        })
      }
    </select>
  );
}

export default Line;