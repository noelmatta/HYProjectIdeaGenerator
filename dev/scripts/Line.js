import React from 'react';

const Line = (props) => {
    return (
        <select onChange={props.buildIdea} data-name={props.speechType} label={props.speechType}>
      {
        props.data.map((key) => {
          return (
            <option value={key} id={key} key={key} label={props.speechType} name='test'>{key}</option>
          )
        })
      }
    </select>
  );
}

export default Line;