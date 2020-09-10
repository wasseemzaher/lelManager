import React from "react";

const previewStyle = {
  maxHeight: "100px",
  maxWidth: "100px",
};

const PreviewMedia = (props) => {
  return props.arrSource.map((url, index) => {
    return <img key={index} src={url} style={previewStyle} alt="" />;
  });
};

export default PreviewMedia;
