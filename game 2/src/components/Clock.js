import React, { Component } from 'react';

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
        this.updateDate = this.updateDate.bind(this);
    }

    updateDate(){
        this.setState({ date: new Date() })
    }

    shouldComponentUpdate(props, state){
        return true
        const newState = state.date !== this.state.date;
        return props.updateInterval !== this.props.updateInterval && newState;
    }

    componentDidMount(){
        if(!this.interval){
            this.interval = setInterval(this.updateDate, this.props.updateInterval * 1000);
        }
    }
    componentDidUpdate(){
        clearInterval(this.interval);
        this.interval = setInterval(this.updateDate, this.props.updateInterval * 1000);
    }

 render() { 
        const {cityName, local, timeZone, updateInterval, reset, double} = this.props
        const time = this.state.date.toLocaleString(local, {timeZone})
        return (
            <>
                <div>{`${cityName} ==> update interval = ${updateInterval}`}</div>
                <div>the time is {time}</div>
                <button name={cityName} onClick={reset}>reset my interval</button>
                <button name={cityName} onClick={double}>double my interval</button>
                <button onClick={() => this.setState({date: new Date()})}>update me now</button>
            </>
        );
    }
}
 
export default Clock;

