import React from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import Gallery from "react-image-gallery";
import "./styles/imageGallery.css";

export default function ImageGallery(props) {
  const imageList = props?.images?.map((image) => {
    return {
      original: image,
      thumbnail: image,
    };
  });
  return <Gallery items={imageList} showBullets showThumbnails={false} />;
}
