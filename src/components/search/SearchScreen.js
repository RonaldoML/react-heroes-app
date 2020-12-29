
import React, { useMemo } from 'react';
import queryString from 'query-string';

import { useLocation } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { HeroeCard } from '../heroe/HeroeCard';
import { getHeroesByName } from '../../selectors/getHeroesByName';

export const SearchScreen = ({ history }) => {

    const location = useLocation();

    const { q = '' } = queryString.parse(location.search);


    const [formValues, handleInputChange] = useForm({
        busqueda: q
    });

    const { busqueda } = formValues;

    const handleSearch = (e) => {

        e.preventDefault();

        history.push(`?q=${busqueda}`);

    }



    let heroesFiltered = useMemo(() => getHeroesByName(q), [q]);

    return (
        <div>
            <h1>Search Screen</h1>
            <hr />

            <div className="row">

                <div className="col-5">

                    <h4>Search Form</h4>

                    <form onSubmit={handleSearch}>
                        <input
                            type="text"
                            name="busqueda"
                            className="form-control"
                            placeholder="Find your hero"
                            value={busqueda}
                            onChange={handleInputChange}
                        />
                        <button
                            type="submit"
                            className="btn btn-block btn-outline-primary mt-1"
                        >
                            Search...
                        </button>
                    </form>

                </div>

                <div className="col-7">
                    <h4>Results</h4>
                    <hr />

                    {
                        (q === '') && < div className="alert alert-info">
                            Search a Hero
                        </div>
                    }
                    {
                        (q  !== '' && heroesFiltered.length === 0) 
                        && < div className="alert alert-danger">
                            There is no hero with {q}
                        </div>
                    }
                    {
                        heroesFiltered.map(hero => (
                            <HeroeCard
                                key={hero.id}
                                {...hero}
                            />
                        ))
                    }
                </div>

            </div>
        </div >
    )
}
