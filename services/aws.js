const aws = require('aws-sdk');

/**
 *To save pdf files on s3 bucket
 * @param pdf - request data
 * @returns Pdf file  public url
 */
module.exports.uploadPdfBuffer = async (pdfBuffer) => {
  const s3 = new aws.S3({
    accessKeyId: process.env.CLOUDCUBE_ACCESS_KEY_ID,
    secretAccessKey: process.env.CLOUDCUBE_SECRET_ACCESS_KEY,
  });

  const prefix = 'vztyis1bvhuk';
  const fileName = `public/NICE-InContact-Recommendation-Report-${Date.now()}.pdf`;
  const filePath = `${process.env.CLOUDCUBE_URL}/${fileName}`;

  const uploadParams = {
    Bucket: 'cloud-cube',
    Key: `${prefix}/${fileName}`,
    Body: pdfBuffer,
  };

  try {
    await s3.upload(uploadParams);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('Error', error);
  }

  return filePath;
};
