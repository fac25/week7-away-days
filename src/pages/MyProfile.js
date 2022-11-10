// REACT STATES -
import { useState, useEffect } from "react";

// IMPORT ImgStorage -
import { Storage } from "aws-amplify";

// IMPORT Components -
import DisplayProfile from "../components/profile/DisplayProfile";
import CurrentEvent from "../components/event/CurrentEvent";
import DisplayReviews from "../components/reviews/DisplayReviews";

// ------------------------------------

export default function MyProfile({ User }) {
  const [images, setImages] = useState([]);
  const imgKey = images + User.username;

  // Fetchs Image Array
  async function fetchImages() {
    let imageKeys = await Storage.list("");

    imageKeys = await Promise.all(
      imageKeys.map(async (k) => {
        const signedUrl = await Storage.get(k.key);
        return signedUrl;
      })
    );

    imageKeys.unshift();
    setImages(imageKeys);
    console.log(imageKeys);
  }

  const profileImg = images.find((img) => img.includes(`Pot`));

  return (
    <>
      {/* Profile Picture */}
      {images.map((image) => (
        <img
          src={profileImg}
          key={image}
          style={{ width: 200, height: 100 }}
          alt=""
        />
      ))}
      <h1>{`User's Name`}</h1>
      <section>
        <h2>Profile</h2>
        <DisplayProfile />
      </section>

      <section>
        <CurrentEvent />
      </section>

      <section>
        <h2>Reviews</h2>
        <DisplayReviews />
      </section>
    </>
  );
}
