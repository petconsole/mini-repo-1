const ourBlobToDataUrl = ({ blob, log }: { blob: Blob; log: (...args: unknown[]) => void }) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.readAsDataURL(blob); // converts the blob to base64 and calls onload

    reader.onload = function () {
      resolve(reader.result); // data url
    };

    reader.onerror = function () {
      log('ourBlobToDataUrl error:', reader.error);
      reject(reader.error);
    };
  });

export default ourBlobToDataUrl;
