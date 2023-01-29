import axios from 'axios';
import React, { useState } from 'react';
import { uploadFiles } from '../../app/api/FTP/index.js';
import { api } from '../../app/api/index.js';

const UploadFilesForm = ({}) => {
  const [files, setFiles] = useState([]);

  const onInputChange = (e) => {
    setFiles(e.target.files);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const data = new FormData();

    for (let i = 0; i < files.length; i++) {
      data.append('file', files[i]);
    }

    uploadFiles(data);
  };

  return (
    <div>
      <form method="post" action="#" id="#" onSubmit={onSubmit}>
        <div className="form-group files">
          <label>Upload Your File </label>
          <input
            type="file"
            onChange={onInputChange}
            className="form-control"
            multiple
          />
        </div>

        <button>Submit</button>
      </form>
    </div>
  );
};

export default UploadFilesForm;
