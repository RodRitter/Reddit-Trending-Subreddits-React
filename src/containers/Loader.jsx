import React, { Component } from 'react'
import { keyframes } from '@emotion/core'
import styled from '@emotion/styled';

const loaderKeyframe1 = keyframes`
    0% {transform: scale(0);}
    100% {transform: scale(1);}
`;

const loaderKeyframe2 = keyframes`
    0% {transform: translate(0, 0);}
    100% {transform: translate(19px, 0);}
`
const loaderKeyframe3 = keyframes`
    0% {transform: scale(1);}
    100% {transform: scale(0);}
`;

const LoadingAnimation = styled.div`
    display: block;
    margin: 15px auto;
    position: relative;
    width: 64px;
    height: 64px;
`;

const LoadingDot = styled.div`
    position: absolute;
    top: 27px;
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background: #ff4500;
    animation-timing-function: cubic-bezier(0, 1, 1, 0);

    &:nth-of-type(1) {
        left: 6px;
        animation: ${loaderKeyframe1} 0.4s infinite;
    }
    &:nth-of-type(2) {
        left: 6px;
        animation: ${loaderKeyframe2} 0.4s infinite;
    }
    &:nth-of-type(3) {
        left: 26px;
        animation: ${loaderKeyframe2} 0.4s infinite;
    }
    &:nth-of-type(4) {
        left: 45px;
        animation: ${loaderKeyframe3} 0.4s infinite;
    }
`;

export default class Loader extends Component {
    render() {
        return (
            <LoadingAnimation>
                <LoadingDot></LoadingDot>
                <LoadingDot></LoadingDot>
                <LoadingDot></LoadingDot>
                <LoadingDot></LoadingDot>
            </LoadingAnimation>
        )
    }
}
