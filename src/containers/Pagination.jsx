import React, { Component } from 'react'
import styled from '@emotion/styled'


const PaginationWrapper = styled.div`
    display: flex;
    max-width: 350px;
    margin: 0 auto;
`;

const Button = styled.button`
    flex-grow: 1;
    background: #ff4500;
    border: none;
    border-radius: 5px;
    color: white;
    font-size: 14px;
    font-weight: bold;
    height: 35px;
    outline: none;
    cursor: pointer;
    &:hover {
        background: #ff682f;
    }
    &:active {
        background: #ff5819;
    }
`;

const Page = styled.h3`
    flex-grow: 0;
    width: 80px;
    text-align: center;
    margin: 0;
    color: gray;
    line-height: 35px;
`;

export default class Pagination extends Component {
    render() {
        return (
            <PaginationWrapper>
                <Button onClick={this.props.prevPage}>Previous</Button>
                <Page>{this.props.page+1}</Page>
                <Button onClick={this.props.nextPage}>Next</Button>
            </PaginationWrapper>
        )
    }
}
