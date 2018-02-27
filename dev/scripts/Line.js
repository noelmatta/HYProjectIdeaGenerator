import React from 'react';

const Line = (props) => {
    console.log(props.speechType)
    return (
      <select onChange={props.buildIdea} label={props.speechType}>
      {
        props.data.map((key) => {
          return (
            <option value={key} id={key} key={key} name='test'>{key}</option>
          )
        })
      }
    </select>
  );
}

export default Line;