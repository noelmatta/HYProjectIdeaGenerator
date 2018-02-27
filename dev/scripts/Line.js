import React from 'react';

const Line = (props) => {
    return (
        <select onChange={props.buildIdea} data-name={props.speechType}>
        <option>select</option>
      {
        props.data.map((key) => {
          return (
            <option value={key} id={key} key={key} >{key}</option>
          )
        })
      }
    </select>
  );
}

export default Line;