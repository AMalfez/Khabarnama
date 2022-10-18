import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        const {ImageUrl, title, description, url} = this.props;
        return (
            <>
                <div class="card" style={{ margin: '5vh', boxShadow: '3px 6px 6px grey'}}>
                    <img src={ImageUrl} class="card-img-top" alt="Alfez" style={{height: '24vh'}} />
                    <div class="card-body" style={{position: 'relative'}}>
                        <h5 class="card-title">{title}</h5>
                        <p class="card-text" style={{paddingBottom: '5vh'}}>{description}</p>
                        <a href={url} target='_blank' rel="noreferrer" class="btn btn-primary" style={{position: 'absolute', bottom: '2vh'}}>Read more</a>
                    </div>
                </div>
            </>
        )
    }
}

export default NewsItem
