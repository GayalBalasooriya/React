import React, { Component } from 'react'

class GoogleAuth extends Component {

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '683239846250-ud5kg7nvgaepgd0lq5fhj1hapvphqq48.apps.googleusercontent.com', 
                scope: 'email'
            })
        });
    }

    render() {
        return (
            <div>
                Google Auth
            </div>
        )
    }
}

export default GoogleAuth;
