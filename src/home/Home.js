import { Container } from "./style";
import { MovieList } from "./style";
import { Movie } from "./style";
import { APIKEY } from "../config/key";
import { useState } from "react";
import { useState,useEffect } from "react";

function Home() {

    const [movies, setMovies] = useState([])



    useEffect(() => {

        
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=7c2360c02683262b3105631c3c27fd2f&language=en-US&page=1`)

    },[])

 /*   const movies = [
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
                            <Movie>
                                <a href="https:www.google.com">
                                    <img src={movie.Image_url} alt={movie.title} />
                                </a>
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