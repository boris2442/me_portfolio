import { useState } from "react";
import "../styles/css/ImageWithSkeleton.css"

export default function ImageWithSkeleton({ src, alt, width, height }) {
    const [loaded, setLoaded] = useState(false);

    return (
        <div className="image-wrapper" style={{ width, height }}>
            {!loaded && <div className="skeleton"></div>}
            <img
                src={src}
                alt={alt}
                className={`image ${loaded ? "visible" : "hidden"}`}
                onLoad={() => setLoaded(true)}
            />
        </div>
    );
}
