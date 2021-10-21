import React, { Component } from 'react';
import axios from 'axios';
import ParticleContainer from "../CollectionsPage/ParticleContainer";
import ResultsContainer from "../CollectionsPage/ResultsContainer";
import Message from "../../components/Massege/Massage";
import Search from "../../components/Search/Search";
import './style.css';
import Pagination from "../../components/Pagination/Pagination";

const MAIN_API_URL = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos';
const DEMO_KEY = 'DEMO_KEY';
const DEFAULT_MAX_SOL = 1000;

export default class CollectionsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchResults: [],
            maxSol: DEFAULT_MAX_SOL,
            camera: '',
            errorMessage: '',
            currentPage: 0,
            totalPages: 0
        };
        this.getYesterdaysDate = this.getYesterdaysDate.bind(this);
        this.doSearch = this.doSearch.bind(this);
        // this.onPageChanged = this.onPageChanged.bind(this);
    }

    componentDidMount () {
        this._isMounted = true;
        if (this._isMounted) {
            this.doSearch('', DEFAULT_MAX_SOL);
        }
    }

    componentWillUnmount () {
        this._isMounted = false;
    }

    getYesterdaysDate () {
        let date = new Date();
        date.setDate(date.getDate() - 1);
        return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
    }

    doSearch (cameraInput, solInput) {
        let yesterday = this.getYesterdaysDate();
        let params = {};
        params = {
            api_key: DEMO_KEY,
            earth_date: yesterday,
            page: 1
        };
        if (solInput) {
            let originalSolInput = solInput.toString();
            solInput = originalSolInput.replace(/\D/g, '');
            if (solInput !== originalSolInput) {
                this.setState({
                    searchResults: [],
                    errorMessage: 'Special characters are not allowed except (space, comma, decimal, dash, apostrophe).'
                });
                return;
            }
            if (cameraInput) {
                let originalCameraInput = cameraInput;
                cameraInput = originalCameraInput.replace('');
                params = {
                    sol: solInput,
                    camera: cameraInput,
                    api_key: DEMO_KEY,
                    page: 1
                };
            } else {
                params = {
                    sol: solInput,
                    api_key: DEMO_KEY,
                    page: 1
                };
            }
        }
        axios.get(MAIN_API_URL, { params })
            .then(res => {
                let searchResults = res.data.photos;
                if (searchResults && searchResults.length) {
                    let maxSol = searchResults[0].rover.max_sol;
                    searchResults = Array.from(searchResults);
                    this.setState({
                        searchResults,
                        maxSol,
                        errorMessage: ''
                    });
                    return;
                } else {
                    this.setState({
                        searchResults: [],
                        maxSol: DEFAULT_MAX_SOL,
                        errorMessage: 'No Results Found'
                    });
                    return;
                }
            })
            .catch(err => {
                this.setState({
                    searchResults: [],
                    maxSol: DEFAULT_MAX_SOL,
                    errorMessage: err,
                    currentPage: 0,
                    totalPages: 0
                });
                return;
            });
    }

    /* Called with data of the current pagination state only when the current page changes. */
      onPageChanged = data => {
          let { searchResults } = this.state;
          const { currentPage, totalPages, pageLimit } = data;
          const offset = (currentPage - 1) * pageLimit;
          searchResults = searchResults.slice(offset, offset + pageLimit);
          this.setState({
              currentPage,
              searchResults,
              totalPages
          });
      }

    render () {
        return (
            <React.StrictMode>
                <div className="content">
                    {this.state.errorMessage ?
                        <>
                            <Message message={this.state.errorMessage} />
                            <Search doSearch={this.doSearch} maxSol={this.state.searchResults} />
                        </> :
                        <>
                            <Search doSearch={this.doSearch} maxSol={this.state.maxSol} />
                            <ResultsContainer searchResults={this.state.searchResults} />
                        </>
                    }
                {/*     <Pagination totalRecords={1000} pageLimit={10}*/}
                {/*pageNeighbours={2} onPageChanged={this.onPageChanged} />*/}
                </div>
                <ParticleContainer />
            </React.StrictMode>
        );
    }
}
