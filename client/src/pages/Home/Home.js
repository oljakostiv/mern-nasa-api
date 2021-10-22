import './Home.css';
import Collections from "../../components/Collection/Collections";
import React from "react";

export default function Home() {
    return (
        <div>
            <div className="backend">
                <div className="container">
                    {/*<div className="create-coll">*/}
                    {/*    <h5>Create my collection:</h5>*/}
                    {/*    <CreateCollectionForm/>*/}
                    {/*</div>*/}
                    <div className="position">
                        <div className="col s12 p5r">
                            <div className="card blue-grey darken-1">
                                <div className="card-content white-text">
                                    <span className="card-title">Welcome!</span>
                                    <p>Mars is the fourth planet from the Sun – a dusty, cold, desert world with a very
                                        thin
                                        atmosphere. Mars is also a dynamic planet with seasons, polar ice caps, canyons,
                                        extinct
                                        volcanoes, and evidence that it was even more active in the past.</p>
                                </div>
                                <div className="card-action tc">
                                    <a href="/collections"><span className="text-color">Open Mars!</span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="my-coll-backend">
                <div className="my-coll">
                    <div id="my-collections" className="tc title-my-coll"><h2>My personal collections:</h2></div>
                    <div className="container card-action tc">
                        <Collections />
                    </div>
                </div>
            </div>
        </div>
    )
}
