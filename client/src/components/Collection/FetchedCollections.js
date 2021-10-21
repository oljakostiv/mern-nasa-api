import React, {useEffect, useState} from "react";
import FetchedCollectionCard from "./FetchedCollectionCard";
import {useDispatch} from "react-redux";
import {getCollections} from "../redux/Slice";
import {getCollection} from "../redux/Actions";

// export default () => {
    // const dispatch = useDispatch();
    // const collections = useSelector(() => {
    //     return this.state.collection.fetchedCollections
    // });
    //
    // const collections = useSelector(({fetchCollections}) => fetchCollections);

    // if (!collections.length) {
    //     return <button className="btn btn-flat" onChange={() => dispatch(fetchCollections())}>Open Mars!</button>
    // }
    // collections.map(collection => <FetchedCollectionCard collection={collection} key={collection.id}/>)
// }

export default function FetchedCollections(props) {
    const [collections, setCollections] = useState([]);

    useEffect(() => {
        getCollection().then(value =>
            setCollections(value.data.data))
    }, []);


    // useEffect(() => {
    //    fetchCollections();
    //
    //        async function fetchCollections() {
    //            const  response = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY`);
    //            const data = await response.json();
    //            console.log(data);
    //            setCollections(data);
    //        }
    // }, []);


    // if (!collections) return <button className="btn btn-flat" onChange={() => dispatch(fetchCollections())}>Open Mars!</button>
    if (!collections) return <h3>Open Mars!</h3>

        return (
            <div>
            {collections.map(value => <FetchedCollectionCard key={value.id} item={value} {...props} />)}
        </div>
    )
}

