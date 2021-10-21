import React, {useEffect, useState} from "react";
import './Home.css';
import {Collection} from "mongoose";
import {getCollection} from "../../components/Servises/Api";
import CreateCollectionForm from "../../components/Collection/CreateCollectionForm";
import Collections from "../../components/Collection/Collections";
import FetchedCollections from "../../components/Collection/FetchedCollections";

export default function Home() {
    let [collection, setCollection] = useState([]);
    // let [flag, setFlag] = useState(false);

    useEffect(() => {
        getCollection().then(value => {
            setCollection([...value.data])
        })
    }, []);
    return (
        <div>
            <div className="backend">
                <div className="container">
                    <div className="create-coll">
                        <h5>Create my collection:</h5>
                        <CreateCollectionForm/>
                    </div>
                    <div className="position">
                        <div className="col s12 m6">
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
                                    {/*<button onClick={()=> {getCollection().then(value => setColection(value.data))*/}
                                    {/*setFlag(!flag)}}>Open Mars!</button>*/}

                                    {/*{flag && <Collection key={collection.id} collection={collection}/>}*/}
                                    {/*<a href="/">Open Mars!</a>*/}
                                    {/*<button onClick={()=> {collection.map(value => <h5 key={value.id}></h5>)}}>Open Mars!</button>*/}

                                    {/*{flag && <Collection key={collection.id} collection={collection}/>}*/}
                                    {/*<a href="/">Open Mars!</a>*/}
                                    <FetchedCollections collections={[]}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="my-coll-backend">
                <div className="my-coll">
                    <div id="collections" className="tc title-my-coll"><h2>My personal collections:</h2></div>
                    <div className="container card-action tc">
                        <Collections collections={[]}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
