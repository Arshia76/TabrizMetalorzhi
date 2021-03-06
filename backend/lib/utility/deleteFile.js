import fs from 'fs';

const deleteFile = (path) => {
  fs.unlink(path, (err) => {
    if (err) {
      console.error(err);
      return;
    }

    console.log('file removed');
  });
};

export default deleteFile;
