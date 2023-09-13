import React, { useState } from 'react'
import ResultCart from './ResultCart';

const Add = () => {

    
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);
    function onChange(e) {
        setQuery(e.target.value)

        fetch(`https://api.themoviedb.org/3/search/movie?api_key=7944ab21cebd7c5d44301c1389af3636&query=string&include_adult=false&language=en-US&page=1&query=${e.target.value}`)
            .then((res) => res.json())
            .then((data) => {
                if (!data.errors) {
                    setResults(data.results)
                } else {
                    setResults([]);
                }
            });
    }
    return (
        <div className='add-page'>
            <div className="container">
                <div className="add-content">
                    <img src="https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,032541,01b4e4)/9ZyAUZrfccsjtDwYgc7yvOBnqM9.jpg" />
                    <div className="titles">
                        <h1>Hoş Geldiniz</h1>
                        <h2>Milyonlarca Film, TV şovu ve keşfedilecek kişi. Şimdi keşfedin.</h2>
                    </div>
                    <div className="input-wrapper">
                        <input type="text" value={query} onChange={onChange} placeholder='film, dizi, kişi ara...' />
                    </div>
                    {results.length > 0 && (
                        <ul className="results">
                            {results.map((movie) => (
                                <li key={movie.id}>
                                    <ResultCart movie={movie}/>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Add