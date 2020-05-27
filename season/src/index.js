import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

//FUNCTIONAL BASED COMPONANT
// const App = () => {

//     window.navigator.geolocation.getCurrentPosition(
//         position => console.log(position),
//         err => console.log(err)
//     )

//     return(
//         <div>Hi there</div>
//     );
// }
 
//CLASS BASED COMPONANT
class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = { lat: null, errorMessage: '' };

        // window.navigator.geolocation.getCurrentPosition(
        //     position => {
        //         this.setState({
        //             lat: position.coords.latitude
        //         });
        //     },
        //     err => {
        //         this.setState({
        //             errorMessage: err.message
        //         });
        //     }
        // );
    }

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => {
                this.setState({
                    lat: position.coords.latitude
                });
            },
            err => {
                this.setState({
                    errorMessage: err.message
                });
            }
        );
    }

    componentDidUpdate() {
        console.log('My component was just updated - it rendered!');
    }

    renderContent() {
        if(this.state.errorMessage && !this.state.lat) {
            return (
                <div>Error: {this.state.errorMessage}</div>
            )
        }
        if(!this.state.errorMessage && this.state.lat) {
            return (
                /* <div>Latitude: {this.state.lat}</div> */
                <SeasonDisplay lat={this.state.lat} />
            );
        }
        
        return(
            /* <div>Loading..</div> */
            <Spinner message="Please accept location request"/>
        )
    }

    render() { 
        return(
            <div className="border red">
                { this.renderContent() }
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));