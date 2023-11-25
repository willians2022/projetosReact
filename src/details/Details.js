
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { APIKEY } from "../config/key";

function Details(){
    
    const img_path = 'https://image.tmdb.org/t/p/w500/'
   
    const {id} = useParams();
    console.log(id);

    const [movie, setMovie] = useState([]);

    useEffect(() => {

        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${APIKEY}&language=pt-BR&page=1`)
            .then(response => response.json())
            .then(data => {
                console.log(data)

                const movie = {
                    id,
                    title: data.title,
                    overview: data.overview,
                    releaseDate: data.release_date,
                    poster_path:`${img_path}${data.poster_path}`
                }

                setMovie(movie)
            })
    }, [id])


    return (
        <div >
            <img src={movie.poster_path} alt={movie.title}/>
            <h1>{movie.title}</h1>
            <span>sinopse:{movie.overview}</span>
            <span>Data de laçamento: {movie.releaseDate}</span>
            <button>Retornar ao catálogo</button>
        </div>
       
    )
}

export default Details;