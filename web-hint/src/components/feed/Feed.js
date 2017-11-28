import React, { Component } from 'react';
import './Feed.css';
import Hint from '../hint/Hint'
import FeedConsumer from './FeedConsumer'
import { Feed as SemFeed, Icon } from 'semantic-ui-react'

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
            <SemFeed>
                 {this.state.hints.map((item, index) =>
                     <Hint title = {item.title} subtitle={item.subtitle} />
                 )}
            </SemFeed>
        );
    }
}

export default Feed;
