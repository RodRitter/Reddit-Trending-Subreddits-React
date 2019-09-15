import React, { Component } from 'react'
import styled from '@emotion/styled'

const InnerContainer = styled.div`
    max-width: 1200px;
    min-height: 200px;
    margin: 0 auto;
    position: relative; 
`;

const HeaderContainer = styled.div`
    width: 100%;
    background: url('https://styles.redditmedia.com/t5_311a2/styles/bannerBackgroundImage_u8so9u5qb9821.png');
    background-size: cover;
    background-position: center top;
`;

const HeaderTitle = styled.h1`
    margin: 0;
    position: absolute;
    background: url('https://styles.redditmedia.com/t5_311a2/styles/communityIcon_otxfj4hsc9821.png');
    background-position: left center;
    background-size: 50px;
    background-repeat: no-repeat;
    top: 50%;
    transform: translateY(-50%);
    left: 20px;
    height: 50px;    
    line-height: 50px;
    vertical-align: middle;
    padding-left: 65px;
    cursor: pointer;
    font-size: 40px;
`;

export default class Header extends Component {
    render() {
        return (
            <HeaderContainer>
                <InnerContainer>
                    <HeaderTitle>{this.props.title}</HeaderTitle>
                </InnerContainer>
            </HeaderContainer>
        )
    }
}
