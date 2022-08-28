import React from "react"

import styles from "./index.module.scss"

const splitIntoChunk = (arr, chunk) => {
    let chunks = [];
    for (let i = 0; i < arr.length; i += chunk) {
        chunks.push([...arr.slice(i, i + chunk)]);
    }
    return chunks;
};

const youtubeVideos = [
    "https://www.youtube.com/embed/dDTJEY6ObP4",
    "https://www.youtube.com/embed/jyu_DrapQws",  // vertical
    "https://www.youtube.com/embed/1dUnaJOpggM",
    "https://www.youtube.com/embed/5vraZCswYuM",  // vertical
    "https://www.youtube.com/embed/bKPwwjRJoGI",
    "https://www.youtube.com/embed/MLn7IhgKqpk"   // vertical
];

const VideoList = () => {
    let videoChunks = splitIntoChunk(youtubeVideos, 2);
    return (
        <div className={styles.Videos}>
            {
                videoChunks.map((chunk, chunkID) => {
                    return (
                        <div className={styles.Chunk}>
                            {
                                chunk.map((url, i) => {
                                    return (
                                        <div className={(i % 2 === 1 ? styles.Vertical : "")} key={`${chunkID}_${i}`}>
                                            <iframe width="100%" height="100%" src={url} frameBorder="10"
                                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                                    allowFullScreen/>
                                        </div>
                                    );
                                })
                            }
                        </div>
                    );
                })
    
            }
        </div>
    );
};

export default VideoList