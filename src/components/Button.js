import React from 'react';
import Title from './Title/Title';
import Time from './Time';



class Button extends React.Component{
  constructor(props){
    super(props);
    this.state = {clicked: false, hasError: false};
  }

  /* static getDerivedStateFromError(error){
    return {
      hasError : true
    }
  }

  /* componentDidCatch(error, errorInfo){
    console.log('Error', error);
    console.log('ErrorInfo', errorInfo);
    this.setState({hasError: true});
  } */
 
  render() {
    const { clicked, hasError } = this.state;

    if (clicked) {
        return 'Clicked'
    }

    if (hasError){
      return <h1>We have an ERROR!</h1>
    }

    return (
        <div>
            <Title /* title={'Привет, React в действии'} *//>
            <Time/>
            <button onClick={() => this.setState( {clicked: true} )}>Click, Me!!!</button>
        </div>
    )
  }
}

export default Button;