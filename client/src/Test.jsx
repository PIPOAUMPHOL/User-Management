import React, { useState } from "react";

function ImageUpload() {
  const [image, setImage] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];

    if (selectedFile) {
      const reader = new FileReader();

      reader.onloadend = () => {
        // เมื่ออ่านข้อมูลเสร็จสิ้น
        const base64Data = reader.result.split(",")[1];
        setImage(base64Data);
      };

      reader.readAsDataURL(selectedFile);
    }
  };

  console.log(image);

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      {image && (
        <div>
          <p>รูปภาพตัวอย่าง:</p>
          <img src={`data:image/jpeg;base64,${image}`} alt="Uploaded" />
        </div>
      )}
    </div>
  );
}

export default ImageUpload;
