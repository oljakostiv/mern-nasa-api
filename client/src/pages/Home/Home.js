import React from "react";
import CollectionsPage from "../CollectionsPage/CollectionsPage";
import './Home.css';

export default function Home() {
    return (
        <div>
            <div className="backend">
                <div className="container my-coll">
                    <div className="position">
                        <div className="col s12 p5r">
                            <div className="card blue-grey darken-1 card-backend">
                                <div className="card-content dn white-text">
                                    <span className="card-title">Welcome!</span>
                                    <p className='pth'><b>Mars</b> is the fourth planet from the Sun – a dusty, cold, desert world with
                                        a very thin atmosphere. Mars is also a dynamic planet with seasons, polar ice
                                        caps, canyons, extinct volcanoes, and evidence that it was even more active in
                                        the past.</p>
                                </div>
                                <div className="card-backend tc mh">
                                    <a href="#collections"><span className="text-color">View the Red Planet!</span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="my-coll-backend" id="my-collections">
                <div className="my-coll">
                    <div className="tc title-my-coll op"><h2>My personal collections:</h2></div>
                    <div className="container card-action tc">
                        {/*<MyCollections />*/}
                        <h4 className="m5r">No content!</h4>
                    </div>
                </div>
            </div>

            <div className='backend' id='collections'>
                <div className='my-coll'>
                    <div className="tc title-my-coll-2 op"><h2 className="w">Mars is open to you!</h2></div>
                    <CollectionsPage/>
                </div>
            </div>
        </div>
    )
}
