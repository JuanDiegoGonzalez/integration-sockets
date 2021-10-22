import { useState, useEffect } from "react";
import Movie from "./movie";


function MoviesList(){
    
    const [movies, setMovies] = useState([]);

    function setupWs(){
        const wss = new WebSocket("ws://localhost:3001")
        wss.onopen = () =>{
            wss.onmessage = (msg) => {
                console.log("Mensaje desde el servidor", msg)
                setMovies(JSON.parse(msg.data))
            }
        }
    }

    useEffect(()=>{

        setupWs();

        fetch("/api/movies").then(res=>res.json()).then(res=>{
            setMovies(res);
        })
    }, []);

    return(
        <div>
            <h1>Movies List</h1>
            <ul>
                {movies.map(m => <Movie movie={m}/>)}
            </ul>
        </div>
    )
}

export default MoviesList;