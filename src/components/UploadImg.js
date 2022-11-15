import { Storage } from "aws-amplify";

export default function UploadImg({ updateFileName }) {
  // Upload Imgs
  async function onChange(e) {
    const file = e.target.files[0];
    const fileName = file.name + `${Date.now().toString()}`
    await Storage.put(fileName, file);

    updateFileName(fileName);
  }

  return (
    <div>
      <label htmlFor="upload image">Upload image:</label>
      <input type="file" onChange={onChange} />
    </div>
  );
}
