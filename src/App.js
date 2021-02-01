import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import Player from './components/player';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [songs, setSongs] = useState([]);
  let audioRef = useRef(null);

  const apiUrl = "https://assets.breatheco.de/apis/sound/"
  /*   const setSong = (url,index) =>{
      audioRef.src = `https://assets.breatheco.de/apis/sound/${url}`
  
    } */

  

  const getSongs = ()=>{
    fetch("https://assets.breatheco.de/apis/sound/songs")
    .then((response) => {
      return response.json();
    })
    .then((data)=>{
      setSongs(data)
    })
    .catch((error)=>{
      console.error(error)
    })

  }

  useEffect (()=>{
    getSongs()},[]
  )

  const [songActive, setSongActive] = useState(null);


  const pause = () => {
    audioRef.pause();
  }
  const play = () => {
    audioRef.play();
}



  const nextSong = () => {
    if (songActive !== songs.length -1){
      audioRef.src = apiUrl + songs[songActive + 1].url;
      setSongActive(songActive +1);
    } else {
      setSongActive(0)
      audioRef.src = apiUrl + songs[0].url
    }
      
  }

  const prevSong = () => {
    if (songActive !== 0){
      audioRef.src = apiUrl + songs[songActive - 1].url;
      setSongActive(songActive -1);
    } else if (songActive === 0){
        audioRef.src = apiUrl + songs[songs.length - 1].url;
        setSongActive(songs.length - 1);
    }

    
  }





  /*   const getSongs = async () => {
      try {
        const response = await fetch("https://assets.breatheco.de/apis/sound/all", {
          method: 'GET',
          headers: {
            'content-type': 'application/json'
          }
        })
        const data = await response.json();
  
        setState({
          ...state,
          song: data
        })
      } catch (error) {
        console.warn(error.message)
      }
    }
  
    useEffect(() => {
      // componentDidMount
      console.log("hola");
      getSongs();
  
  
      return () => {
        // componentWillUnmount
        console.log("adios");
  
      }
    }, []) */

  return (
    <>


      <div className="container">
        <div className="card text-center">
          <div className="card-header text-danger">
            THE BEST MUSIC PLAYER EVER!!
          </div>
          <div className="card-body bg-dark text-primary">
            <ol>
              {
                !!songs.length > 0 &&
                songs.map((song,i) => {
                  return <li key={song.id} onClick={() => { audioRef.src = apiUrl + song.url;
                  setSongActive(i); }} className="list-group-item list-group-item-action">{song.name}</li>
                })
              }
              <audio ref={r => audioRef = r} autoPlay />

            </ol>

          </div>
          <div className="container card-footer bg-dark justify-content-center">

            <button onClick={prevSong} className="botones mr-2"><i className="far fa-caret-square-left"></i></button>
            <button onClick={pause} className="botones mr-2"><i className="far fa-pause-circle"></i></button>
            <button onClick={play} className="botones mr-2"><i className="fas fa-play-circle"></i></button>
            <button onClick={nextSong} className="botones mr-2"><i className="far fa-caret-square-right"></i></button>
          </div>
        </div>


      </div>



    </>
  );
}

export default App;
