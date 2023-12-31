import { Container } from "./style";
import { MovieList } from "./style";
import { Movie } from "./style";
import { APIKEY } from "../config/key";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


function Home() {

    const img_path = 'https://image.tmdb.org/t/p/w500/'

    const [movies, setMovies] = useState([])



    useEffect(() => {


        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${APIKEY}&language=pt-BR&page=1`)
            .then(response => response.json())
            .then(data => {
                console.log(data.results)
                setMovies(data.results)
            })
    }, [])


    /*const movies = [
        {
            title: "Os Mercenários 4",
            Image_url: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/7D56cpIldaRRZzOnvXoe1spDiqD.jpg"
        },

        {
            title: "jogos mortais",
            Image_url: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ch1BGjadaiPU59zYbb6zPUTZtyO.jpg"
        },

        {
            title: "Destinos à Deriva (2023)",
            Image_url: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/lJonRBSvmX3TEGhxSHooGmJa4GG.jpg"
        }
    ]
    */

    return (
        <Container>
            <h2>catálago</h2>

            <MovieList>
                {
                    movies.map(movie => {
                        return (
                            <Movie key={movie.id}>
                                <Link to={`/details/${movie.id}`}>
                                    <img src={`${img_path}${movie.poster_path}`} alt={movie.title} />
                                </Link>
                                <span>{movie.title}</span>



                            </Movie>

                        )
                    })
                }

            </MovieList>
        </Container>
    )
}


export default Home;