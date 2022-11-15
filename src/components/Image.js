import { Storage } from "aws-amplify";
import React, { useEffect, useState } from "react";

function Image({ dbFileName, alt = "" }) {
  const [fileURL, setFileURL] = useState();
  useEffect(() => {
    (async function () {
      const fileAccessURL = await Storage.get(dbFileName, {
        expires: 60
      });
      setFileURL(fileAccessURL);
    })();
  }, [dbFileName]);

  return <img src={fileURL} alt={alt} />;
}

export default Image;
