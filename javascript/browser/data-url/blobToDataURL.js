/** @type { import('./blobToDataURL')['default'] } */
function blobToDataURL(blob) {
  return new Promise((resolve, reject) => {
    try {

      if (!(blob instanceof Blob)) {
        return reject(new TypeError('参数错误'));
      }

      let reader = new FileReader();

      reader.onerror = function () {
        reject(reader.error);
      };

      reader.onload = function () {
        resolve(reader.result);
      };

      reader.readAsDataURL(blob);

    } catch (error) {
      reject(error);
    }
  });
}

export default blobToDataURL;
