import { Storage } from "aws-amplify";
import { useState, useEffect } from "react";

// ------------------------------AWS TESTING---------------------------------
// --------------------------------------------------------------------------

export default function UploadImg() {
  // AWS Imgs
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

  // console.log(images);

  async function onChange(e) {
    const file = e.target.files[0];

    images.map(async (image) => {
      if (!image.includes(file.name)) {
        await Storage.put(file.name, file);

        console.log("Pic", file.name);
      }
      if (image.includes(file.name)) {
        await Storage.put(file.name + `${Date.now().toString()}`, file);

        console.log("+ Pic", file.name);
      }
    });

    // const result = await Storage.put(file.name, file);

    // console.log("file: ", file);
    // console.log("result: ", result);

    fetchImages();
  }

  //   Storage.list("photos/").then((result) => console.log(result));
  // ------------------------------AWS TESTING---------------------------------
  // --------------------------------------------------------------------------

  return (
    <div>
      <input type="file" onChange={onChange} />

      {images.map((image) => (
        <img
          src={image}
          key={image}
          style={{ width: 200, height: 100 }}
          alt=""
        />
      ))}
    </div>
  );
}
