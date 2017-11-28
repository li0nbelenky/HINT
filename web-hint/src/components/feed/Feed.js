import React, { Component } from 'react';
import './Feed.css';
import Hint from '../hint/Hint'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const myArray = [{title: 'Arie Belenky', subtitle: 'Software Developer'},
    {title: 'Zigi Bigule', subtitle: 'Software Engineer'}];


class Feed extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <div className="Feed">
                    <ul>
                        {myArray.map((item, index) =>
                            <li> <Hint title = {item.title} subtitle={item.subtitle} /></li>
                        )}
                    </ul>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default Feed;
