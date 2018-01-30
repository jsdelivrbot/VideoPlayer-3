import _ from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';
import YTSearch from 'youtube-api-search';


const API_KEY = "AIzaSyCDWHKsi7twaguIJqfVvXxvPZOrmt_g_Mg";


class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.videoSearch('cars');
    }

    videoSearch(term) {
        YTSearch({ key: API_KEY, term: term },
            (videos) => {
                this.setState({
                    videos: videos,
                    selectedVideo: videos[0]
                });
            });
    }
    render() {

        const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 500);
        return (
            < div >
                <SearchBar onSearchTermChange={videoSearch} />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
                    videos={this.state.videos} />
            </div >
        );
    }
}

ReactDOM.render(<App />, document.querySelector("#app"));