import { Storage } from "aws-amplify";
import { useState, useEffect } from "react";

export default function UploadImg({ setProfileImg }) {
  // AWS IMG Array
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchImages();
  }, []);

  async function fetchImages() {
    let imageKeys = await Storage.list("");

    // Default imageKeys
    // console.log("imageKeys 1: ", imageKeys);

    imageKeys = await Promise.all(
      imageKeys.map(async (k) => {
        const signedUrl = await Storage.get(k.key);
        return signedUrl;
      })
    );

    // Updated imageKeys
    // console.log("imageKeys 2: ", imageKeys);

    imageKeys.shift();
    setImages(imageKeys);
  }

  // Upload Imgs
  async function onChange(e) {
    const file = e.target.files[0];

    setProfileImg(file.name + `${Date.now().toString()}`, file);
    console.log(
      await Storage.get(file.name + `${Date.now().toString()}`, file)
    );
    await Storage.put(file.name + `${Date.now().toString()}`, file);

    // fetchImages();
  }

  return (
    <div>
      <label htmlFor="upload image">Upload image:</label>
      <input type="file" onChange={onChange} />

      {/* {images.map((image) => (
        <img
          src={image}
          key={image}
          style={{ width: 200, height: 100 }}
          alt=""
        />
      ))} */}
    </div>
  );
}
