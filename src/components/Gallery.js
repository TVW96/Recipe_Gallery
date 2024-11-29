import { React, useState } from 'react';
import { images } from "./imageList";

export default function Gallery() {
    const [index, setIndex] = useState(0)
    let image = images[index];
    const prevButton = () => {
        setIndex(prevIndex => {
            if (prevIndex > 0) {
                return prevIndex - 1;
            }
            return prevIndex;
        });
    };

    const nextButton = () => {
        setIndex(prevIndex => {
            if (prevIndex < images.length - 1) {
                return prevIndex + 1;
            }
            return prevIndex;
        });
    };
    return (
        <div style={{ width: "100%", height: "100%", margin: "0", padding: "0", display: "flex", alignItems: "center", flexDirection: "column" }}>
            <h1>An Interactive Recipe Gallery with React</h1>
            <nav style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
            }}>
                <button onClick={prevButton} style={{
                    height: "40px",
                    width: "100px",
                    fontSize: "24px",
                    margin: "20px"
                }}>
                    Prev
                </button>
                <button onClick={nextButton} style={{
                    height: "40px",
                    width: "100px",
                    fontSize: "24px",
                    margin: "20px"
                }}>
                    Next
                </button>
            </nav>
            <div className='Gallery' style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <h2>{image.description}</h2>
                <h3>( {index + 1} of {images.length})</h3>
                <img src={image.url} className='image' style={{
                    width: "90%",
                    height: "70vh",
                    objectFit: "contain",
                    alignItems: "center",
                }} />
            </div>
        </div>
    )
}
