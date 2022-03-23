import React from 'react';
import Button from './Button';
import Container from './container';
import RenderPropComponent from './simple';
import SimpleHOC from './simplHOC';
import HistoryAPIRoute from './HistoryAPIRoute';
//import FilterLi from './FilterLi';
import ReactRouterRoute from './react-router-route';

import {InputWithNameValidation, InputWithAllInputValidation} from './withRequired';
import {InputWithNameAndEmailValidationRenderProp, InputWithNameValidationRenderProp} from './wrapper'


const Greeting = ({children}) => <div>{children}</div>
const Goodbye = ({children}) => <div>{children}</div>

function App() {
  const showHi = true;

  const showInfo = showHi ? <Greeting>Hi</Greeting> : <Goodbye>Bye</Goodbye>

  return (
    <>
      {showInfo}
      <Button />
      <RenderPropComponent/>
      <Container/>
      <SimpleHOC/>
      <br/>
      <InputWithNameValidation/>
      {/* <br/>
      <InputWithNameAndEmailValidation/> */}
      <br/>
      <InputWithAllInputValidation/>
      <br/>
      <InputWithNameValidationRenderProp/>
      <br/>
      <InputWithNameAndEmailValidationRenderProp/>
      <br/>
      <HistoryAPIRoute/>
      <br/>
      <ReactRouterRoute/>
      <br/>
      {/* <FilterLi/> */} 

    </>
  );
}

export default App;
