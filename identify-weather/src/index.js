import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './seasonDisplay';
import Loader from './loader';
import './css/main.css';

class App extends React.Component {
   state = { lat: null, errorMessage: '' };
    componentDidMount(){
        //console.log('Compoennt Did Mount');
        window.navigator.geolocation.getCurrentPosition(
            position => {
                this.setState({
                    lat: position.coords.latitude
                })
            },
            err => {
                this.setState({
                    errorMessage: err.message
                })
            }
        )
    }
    componentDidUpdate(){
        //console.log('Compoennt Did Update');
    }
    renderContent() {
        if (this.state.errorMessage) {
            return (
                <h3> Couldn't get Geo location </h3>
            )
        }
        if(this.state.lat) {
            return (
                <SeasonDisplay lat={this.state.lat} />
            )
        }
        return (
             <Loader message ="Please Accept Location Request" />
        )
    }
    render() {
        return (
            <div className="border-red">
                {this.renderContent()}
            </div>
        )
    }
}
 ReactDOM.render(<App />, document.querySelector("#root"));