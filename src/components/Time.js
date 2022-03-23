import React from "react";

class Time extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            date: new Date(),
        };
    }

    componentDidMount(){
        //вызвать когда в DOM
        this.timerId = setInterval(
            () => this.tick(), 1000
        );
        /* throw new Error('Timer failed '); */
    }

    
    tick(){
        this.setState({
            date: new Date()
        });
    }
    componentWillUnmount(){
        //вызвать когда удален из DOM
        clearInterval(this.timerId);
    }
    render(){
        const {date} = this.state;  
        return  <div>{date.toLocaleTimeString()}</div>;
        
    }
}
export default Time;