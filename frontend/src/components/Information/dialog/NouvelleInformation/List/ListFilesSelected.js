import React, { useEffect, useRef } from "react";

const ListFilesSelected = (props) => {
  const lisOfFiles = useRef();
  //   console.log(props?.informationFiles?.files);

  lisOfFiles.current = props?.informationFiles?.files.map((el, index) => {
    return (
      <div key={index}>
        <div>{el?.name.length < 17 ? el?.name : `${el?.name.substring(0, 17)}...`}</div>
        <i
          className="fa-solid fa-xmark"
          onClick={() => {
            props?.informationFiles?.setFiles(
              props?.informationFiles?.files.filter((item) => {
                return props?.informationFiles?.files.indexOf(item) !== index;
              })
            );
          }}
        ></i>
      </div>
    );
  });

  return <>{lisOfFiles.current}</>;
};
export default ListFilesSelected;
