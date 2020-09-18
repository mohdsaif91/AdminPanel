import React, { useMemo } from "react";
import { useDropzone } from "react-dropzone";

const baseStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "20px",
  borderWidth: 2,
  borderRadius: 2,
  borderColor: "black",
  borderStyle: "dashed",
  backgroundColor: "#fafafa",
  color: "#bdbdbd",
  outline: "none",
  transition: "border .24s ease-in-out",
  height: "150px",
  width: "100%",
  cursor: "pointer",
};

const activeStyle = {
  borderColor: "#2196f3",
};

const acceptStyle = {
  borderColor: "#00e676",
};

const rejectStyle = {
  borderColor: "#ff1744",
};

function Draginput(props) {
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
    acceptedFiles,
  } = useDropzone({ accept: "image/*" });

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isDragActive ? activeStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isDragActive, isDragReject, isDragAccept]
  );

  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {" "}
      {file.path} - {file.size} bytes
    </li>
  ));
console.log(files.length);
  return (
    
    <div className="container">
      <div {...getRootProps({ style })}>
        <input {...getInputProps()} type="file" multiple name="image[]" />
        <p>Drag 'n' drop some files here, or click to select files</p>
        <p>{props.text}</p>
      </div>
      {
        files.length === 0 ? null :
      <aside>
        <h4 className="mt-3">Selected file</h4>
        <ul>{files}</ul>
      </aside> 
      }
    </div>
  );
}

export default Draginput;
