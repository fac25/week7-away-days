import { Storage } from "aws-amplify";
import React, { useEffect, useState } from "react";

function Image({ src, alt = "" }) {
  const [fileURL, setFileURL] = useState();
  useEffect(() => {
    (async function () {
      const fileAccessURL = await Storage.get(src, {
        expires: 60
      });
      setFileURL(fileAccessURL);
    })();
  }, [src]);

  return <img src={fileURL} alt={alt} />;
}

export default Image;
