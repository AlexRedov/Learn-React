import React from 'react';

export const InputGroup = props => {
  return (
    <>
      <input onChange={props.onChange} name="first_name" placeholder="First name" type="text" />
      <input onChange={props.onChange} name="second_name" placeholder="Second name" type="text" />
      <input onChange={props.onChange} name="email" placeholder="e-mail" type="email" />
      <button onClick={props.onClick}>Click</button>
    </>
  );
};