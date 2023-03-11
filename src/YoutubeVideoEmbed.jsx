import React from "react";
import "./YoutubeVideoEmbed.css";

export default function YoutubeVideoEmbed({ videoID }) {
  return (
    <div className="embed-container mb-3">
      <iframe
        src={`https://www.youtube.com/embed/${videoID}`}
        allowFullScreen
      ></iframe>
    </div>
  );
}
