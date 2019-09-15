/*
    The TrendingPost contains the individual post from /r/trendingsubreddits
*/
import {connect} from 'react-redux';
import ReactMarkdown from 'react-markdown/with-html';

import styled from '@emotion/styled';
import React from 'react';
import Header from '../../containers/Header';
import Loader from '../../containers/Loader';

let PostContainer = styled.div`
    max-width: 800px;
    min-height: 200px;
    margin: 20px auto;
    border-radius: 3px;
    background: #ffffff;
    border: 1px solid #0000000a;
    padding: 20px;
    p {
        font-size: 14px;
        color: #353434;
    }
    h1 {
        margin: 5px 0;
        font-size: 22px;
        color: #353535;
    }
    h2 {
        margin: 5px 0;
        font-size: 18px;
        color: #353535;
    }
    a {
        color: #ff4500
    }
`;

const Button = styled.button`
    background: #ff4500cf;
    border: none;
    border-radius: 5px;
    color: white;
    font-size: 14px;
    font-weight: bold;
    height: 35px;
    outline: none;
    cursor: pointer;
    padding: 0 20px;
    margin: 10px 0;
    &:hover {
        background: #ff682f;
    }
    &:active {
        background: #ff5819;
    }
`;

let PostTitle = styled.h1`
    font-size: 28px;
    margin: 0;
    color: #4c4c4c;
`;

const Author = styled.span`
    font-size: 14px;
    color: #ff9066;
`;

function Post(props) {
    console.log(props)
    return (
        <div>
            <PostTitle>{props.post.title}</PostTitle>
            <Author>posted by {props.post.author}</Author>
            <ReactMarkdown
                source={props.post.selftext}
                escapeHtml={false}
            />
        </div>
    )
}

export class TrendingPost extends React.Component {

    constructor(props) {
        super(props)
    
        this.state = {
            isLoading: true
        }
    }

    render() {
        return <div>
            <Header title='Trending Subreddits' />
            
            <PostContainer>
                <Button onClick={() => {this.props.history.push('/')}}>Go Back</Button>
                {this.props.post === null ? <Loader /> : ''}

                {this.props.post !== null ? <Post post={this.props.post} /> : ''}
            </PostContainer>
        </div>
    }
}

function mapStateToProps(state) {
    console.log(state)
    const { currentPost } = state.postReducer
    return {
        post: currentPost
    }
}

export default connect(mapStateToProps)(TrendingPost)