import React, { Component } from 'react'
import ImagesLink from '../images/imagesLink'

export class Carousel extends Component {
    render() {
        return (
            <>
            <div className='container' style={{marginTop: '3rem'}}>
                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        {ImagesLink.map((element)=>{
                            return  <div className="carousel-item active" style={{height: '70%'}}>
                            <img key={element.id} src={element.url} className="d-block w-100" alt="..." style={{width:"95%", height: "25rem"}}/>
                        </div>
                        })}
                        
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
                </div>
            </>
        )
    }
}

export default Carousel
