/*
    The TrendingListing contains the list of posts from /r/trendingsubreddits
*/

import styled from '@emotion/styled';
import React from 'react';

import {connect} from 'react-redux';
import {saveData, setPost} from '../../actions';

// Containers
import Header from '../../containers/Header';
import PostCard from '../../containers/PostCard';
import Loader from '../../containers/Loader';
import Pagination from '../../containers/Pagination';

let ListingContainer = styled.div`
    max-width: 800px;
    min-height: 582px;
    margin: 20px auto;
    border-radius: 3px;
    background: #ffffff;
    border: 1px solid #0000000a;
`;

const PER_PAGE = 5;

export class TrendingListing extends React.Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             isLoading: false
        }

        this.nextPage = this.nextPage.bind(this)
        this.prevPage = this.prevPage.bind(this)
    }

    componentDidMount() {
        this.fetchListings(0, 'after');
    }

    render() {
        return <div>
            <Header title='Trending Subreddits' />

            <ListingContainer>

                {this.state.isLoading ? <Loader /> : ''}
                
                {this.state.isLoading ? '' : this.props.listings.map((post, index) => {
                    let p = post.data;
                    return <PostCard
                    key={index}
                    title={p.title}
                    author={p.subreddit_name_prefixed}
                    selftext={p.selftext} 
                    onClick={()=>{
                        this.props.dispatch(setPost(p))
                        this.props.history.push('/post')
                    }}
                    />
                })}
                
            </ListingContainer>

            <Pagination page={this.props.page} nextPage={this.nextPage} prevPage={this.prevPage} />
        </div>
        
    }

    fetchListings(page, direction) {
        if(!this.state.isLoading) {

            this.setState({isLoading: true}, () => {

                let pagination = ``

                switch(direction) {
                    case 'before':
                        pagination = this.props.before !== null ? `&before=${this.props.before}` : `&${direction}`
                        break;
                    case 'after':
                        pagination = this.props.after !== null ? `&after=${this.props.after}` : `&${direction}`
                        break;
                    default:
                        pagination = ``
                }

                fetch(`https://www.reddit.com/r/trendingsubreddits.json?limit=${PER_PAGE}&count=${page+1}${pagination}`)
                .then(response => response.json())
                .then(data => {
                    if(data.data.children.length > 0) {
                        this.props.dispatch(saveData(data.data.children, page, data.data.after, data.data.before))
                        this.setState({ isLoading: false });
                    } else {
                        this.setState({ isLoading: false }, () => {
                            // SHOW ERROR HERE
                            this.props.dispatch(saveData([], 0, null, null))
                            this.fetchListings(0, 'after');
                        });
                    }
                    
                });
            })
            
        }
    }

    nextPage() {
        this.fetchListings(this.props.page+1, 'after');
    }

    prevPage() {
        if(this.props.page > 0) {
            this.fetchListings(this.props.page-1, 'before');
        }
    }
}

function mapStateToProps(state) {
    const { listings, page, after, before } = state.dataReducer
    return { 
        listings: listings,
        page: page,
        after: after,
        before: before
    }
}

export default connect(mapStateToProps)(TrendingListing)