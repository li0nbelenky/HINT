import React, { Component } from 'react';
import './Feed.css';
import Hint from '../hint/Hint'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FeedConsumer from './FeedConsumer'

// const myArray = [{title: 'Arie Belenky', subtitle: 'Software Developer'},
//     {title: 'Zigi Bigule', subtitle: 'Software Engineer'}];


class Feed extends Component {
    constructor() {
        super();
        this.state = {
            hints: []
        }
    }
    componentDidMount(){
        FeedConsumer.getFeedItems().then((feedItems)=>{
            this.setState({hints: feedItems.payload});
        })
    }

    render() {
        return (
            <MuiThemeProvider>
                <div className="Feed">
                    <ul>
                        {this.state.hints.map((item, index) =>
                            <li> <Hint title = {item.title} subtitle={item.subtitle} /></li>
                        )}
                    </ul>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default Feed;
