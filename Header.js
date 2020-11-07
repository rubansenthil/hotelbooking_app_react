import React, { Component } from 'react';
import './header.css';
import logo from './hh-full-dark.svg';
import frontimage from './72582.jpg';
import carimg1 from './4925577.jpg';
import carimg2 from './3360279.jpg';
import carimg3 from './3437795.jpg';
import carimg4 from './3935761.jpg';
import carimg5 from './4090244.jpg';
import carimg6 from './4800810.jpg';
import carimg7 from './4809241.jpg';
import carimg8 from './4841427.jpg';
import carimg9 from './4853801.jpg';
import carimg10 from './4854153.jpg';
import carimg11 from './4855215.jpg';
import carimg12 from './4875871.jpg';
import carimg13 from './4889222.jpg';
import carimg14 from './4898828.jpg';
import carimg15 from './4925577.jpg';


class Header extends Component {
    render() {
        return (
            <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <img src={logo} className='img-fluid imghome' />
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse justify-content-end navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a class="nav-item nav-link active" href="#">list my house<span class="sr-only">(current)</span></a>
                        <a class="nav-item nav-link" href="#">help</a>
                        <a class="nav-item nav-link" href="#">login</a>
                    </div>
                </div>
            </nav>
            <div className="frontimage img-fluid">
            <h1 className='frontimagetext'> For better places to stay </h1> 
            </div> 
            <div className='cardimage img-fluid container'>
            <h1> Suggestions </h1> 
            <div className='row'> 
            <div className='col-sm-3 img1'> </div> 
            <div className='col-sm-3 img2'> </div> 
            <div className='col-sm-3 img3' > </div> 
            <div className='col-sm-3 img4' > </div> 
            </div>
            </div>
             
             
            <div id="carouselExampleControls" className="carousel slide carouselpadding"   data-ride = "carousel" ></div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="card-deck">
                            <div className="card addheight w-75">
                                <img className="card-img imgdimension" src={carimg1} alt="Card image cap" />
                            </div> 
                            <div className="card addheight w-75">
                                <img className="card-img imgdimension" src={carimg2} alt="Card image cap" />
                            </div> 
                            <div className="card addheight w-75">
                                <img className="card-img imgdimension" src={carimg3} alt="Card image cap" />
                            </div> 
                            <div className="card addheight w-75"> 
                                <img className="card-img imgdimension" src={carimg4} alt="Card image cap" />
                            </div> 
                            <div className="card addheight w-75">
                                <img className="card-img imgdimension" src={carimg5} alt="Card image cap" />
                            </div> 
                        </div> 
                    </div> 
            </div> 
        </div>
        );
    }
}
export default Header;