import song1 from "../songs/AC_DC-Highway-to-Hell.mp3"
import song2 from "../songs/snow-tha-product-bzrp-music-sessions-39.mp3"
import song3 from "../songs/neoni-x-besomorph-chemicals-lyric-video.mp3"
import song4 from "../songs/breaking_benjamin_i_will_not_bow.mp3"


const musicData = [
    {
        id:1,
        genre:"Rock",
        artists: {
            artist_name:"AC/DC",
            artist_card: "https://i.imgur.com/bcw6FSv.jpg",
            song: {
                song_name: "Highway to Hell",
                song_cover: "https://i.imgur.com/bcw6FSv.jpg",
                song_duration: "4:45",
                song_music: song1
            }
        }
    },
    {
        id:2,
        genre:"Trap",
        artists: {
            artist_name:"Bzrp",
            artist_card: "https://i.imgur.com/rNP1IXj.png",
            song: {
                song_name: "Snow Tha Product || BZRP Music Sessions #39",
                song_cover: "https://i.imgur.com/rNP1IXj.png",
                song_duration: "3:04",
                song_music: song2
            }
        }
    },
    {
        id:3,
        genre:"Indie",
        artists: {
            artist_name:"Neoni",
            artist_card: "https://i.imgur.com/EYKBLKp.png",
            song: {
                song_name: "NEONI x BESOMORPH - CHEMICALS",
                song_cover: "https://i.imgur.com/EYKBLKp.png",
                song_duration: "2:19",
                song_music: song3
            }
        }
    },
    {
        id:4,
        genre:"Metal",
        artists: {
            artist_name:"Breaking Benjamin",
            artist_card: "https://i.imgur.com/CFIufSj.jpg",
            song: {
                song_name: "I will not bow",
                song_cover: "https://i.ytimg.com/vi/k2vZP4nSXr4/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDDfMR_xlRN3OAqLwnCNcFTVnozHA",
                song_duration: "3:39",
                song_music: song4
            }
        }
    },
]

export default musicData