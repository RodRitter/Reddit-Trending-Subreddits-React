import React, { Component } from 'react'
import styled from '@emotion/styled';

const Card = styled.div`
    margin: 15px;
    padding: 10px;
    cursor: pointer;
    border-radius: 3px;
    transition: linear all 0.1s;
    &:hover {
        transition: linear all 0.1s;
        background: #ffeae2;
    }
`;

const Title = styled.h2`
    font-size: 18px;
    margin: 0;
    color: #4c4c4c;
    overflow: hidden;
    height: 55px;
`;

const Author = styled.span`
    font-size: 14px;
    color: #ff9066;
`;

export default class PostCard extends Component {
    render() {
        return (
            <Card onClick={this.props.onClick}>
                <Title>{this.props.title}</Title>
                <Author>posted by {this.props.author}</Author>
            </Card>
        )
    }
}
