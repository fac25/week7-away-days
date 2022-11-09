import { useState, useEffect } from "react";

 const DisplayProfile = ({Profile, DataStore}) => {

  const [profile, setProfile] = useState();

  useEffect(() => {
    const getProfile = async () => {
      const profile = await DataStore.query(
        Profile,
        "b665030f-d46b-4e7b-aac0-69af4fb0984c"
      );

      setProfile(profile)
    };

    getProfile();
  }, [Profile, DataStore]);
    return (
      <div>
        {profile? <p>{profile.about}</p>: <p>Loading...</p>}
      </div>
    )
  }
  
  export default DisplayProfile