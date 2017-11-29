import React, { Component } from 'react';
import axios from 'axios';
import { Feed as SemFeed, Card, Icon, Image, Item } from 'semantic-ui-react';

class NewActivity extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    async handleClick() {
        console.log(this.props.title);
        const { title, id, subtitle } = this.props;
        let res = axios.post('http://localhost:8000/follow', {
            title,
            id,
            subtitle
        });

        console.log('clicked a like');
    }
    render() {
        return (
            <div className="NewActivity">
                <SemFeed.Event>
                    {/*<SemFeed.Label>*/}
                    {/*<img src='/assets/images/avatar/small/elliot.jpg' />*/}
                    {/*</SemFeed.Label>*/}
                    <SemFeed.Content>
                        <SemFeed.Summary>
                            <SemFeed.User>{this.props.user_full_name}</SemFeed.User> Created a new HINT
                            <SemFeed.Date>{this.props.created_ts}</SemFeed.Date>
                        </SemFeed.Summary>
                        <SemFeed.Extra text>
                            {this.props.description}
                        </SemFeed.Extra>
                        <SemFeed.Meta onClick={this.handleClick}>
                            <SemFeed.Like>
                                <Icon name="Follow" />
                                {this.props.followers.length} Followers
                            </SemFeed.Like>
                        </SemFeed.Meta>
                    </SemFeed.Content>
                </SemFeed.Event>
            </div>
        );
    }
}

export default NewActivity;