import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';


class App extends React.Component {

    state = {
        images: []
    }

    onSearchSubmit = async (term) => {
        // const response = await axios
        // .get('http://api.unsplash.com/search/photos', {
        const response = await unsplash
        .get('/search/photos', {
            params: { query: term },
            // headers: {
            //     Authorization: 'Client-ID ihmVxjyLDGnYxPj4ionNo6wDJVKXOEhBtImJE1uOSqI'
            // }
        });

        //console.log(response.data.results);
        this.setState({
            images: response.data.results
        });
    }

    render() {
        return(
            <div className="ui container" style={{ marginTop:'10px' }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                {/* Found: {this.state.images.length} images */}
                <ImageList images={this.state.images}/>
            </div>
        );
    }
}

export default App;