import React from 'react';
import caro1 from "../images/food1.jpg";
import caro2 from "../images/food2.jpg";
import caro3 from "../images/food3.jpg";
import caro4 from "../images/food4.jpg";
import "../styles/MainScreen.css";
import allProductsData from "../Data/allProductsData";
import Card from "../components/Card";


function mainScreen() {
    return (
        <div>
            <div className="container text-center ">
                <h1 className="mt-3 "> Food Hub </h1>
                <hr className="w-50 mx-auto" />
            </div>

            <div className="container mt-4" >
                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={caro2} className="img-fluid d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={caro1} className="img-fluid d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={caro3} className="img-fluid d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={caro4} className="img-fluid d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
                        data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
                        data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>

            <div className="homescreen" style={{marginTop:"50px"}}>
                <div className="container text-center ">
                    <h1 className="mt-3 ">Category By</h1>
                    <hr className="w-50 mx-auto" />
                </div>

                <div className="homescreen__products">
                    {allProductsData.map((val, index) => {
                        return (
                            <Card
                                key={index}
                                imgsrc={val.imgsrc}
                                title={val.title}
                                info={val.info}
                                link={val.link}
                                id={val.id}

                            />
                        )

                    })}

                </div>
            </div>

        </div>
    )
}

export default mainScreen
