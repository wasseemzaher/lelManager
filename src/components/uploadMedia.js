import React from "react";
import firebase from "../db/firebase";

class UploadMedia extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productId: this.props.productId,
      file: null,
      url: null,
      images: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.storePhoto = this.storePhoto.bind(this);
    this.deletePhoto = this.deletePhoto.bind(this);
  }
  handleChange(e) {
    this.setState({
      file: e.target.files[0],
      url: URL.createObjectURL(e.target.files[0]),
    });
  }
  storePhoto() {
    const key = firebase.database().ref().push().key;
    const img = firebase.storage().ref().child(key);
    img.put(this.state.file).then((snap) => {
       const storageURL = snap.ref.getDownloadURL();
      firebase.database().ref().child(key).set({
        url: storageURL,
      });
      console.log("Success: uploaded file ",img.name, " to db.");
    });

    this.setState({
      file: null,
      url: null,
    });

    return img.fullPath;
  }
  deletePhoto(event) {
    // let uid = this.state.user.uid
    let img = event.target.name;
    firebase.storage().ref().child(img).delete();
    firebase.database().ref().child(img).remove();
  }
  componentDidMount() {
    const ref = firebase.database().ref();
    ref.on("child_added", (child) => {
      let images = this.state.images.slice();
      images.push({
        key: child.key,
        url: child.val().url,
      });
      this.setState({ images });
    });
    ref.on("child_removed", (child) => {
      let images = this.state.images.filter((image) => {
        return image.url != child.val().url;
      });
      this.setState({ images });
    });
  }
  render() {
    const previewStyle = {
      maxHeight: "100px",
      maxWidth: "100px",
    };
    const imgStyle = {
      maxHeight: "400px",
      maxWidth: "400px",
    };
    return (
      <div>
        <input id="input" type="file" onChange={this.handleChange} />
        <img src={this.state.url} style={previewStyle} />
        <button onClick={this.storePhoto}>upload</button>
        {this.state.images.map((image) => (
          <div key={image.key}>
            <img src={image.url} style={imgStyle} />
            <button onClick={this.deletePhoto} name={image.key}>
              remove
            </button>
          </div>
        ))}
      </div>
    );
  }
}
export default UploadMedia;
