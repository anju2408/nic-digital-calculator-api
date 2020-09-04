const aws = require('aws-sdk');

/**
 *To save pdf files on s3 bucket
 * @param pdf - request data
 * @returns Pdf file  public url
 */
module.exports.uploadPdfBuffer = async (pdfBuffer) => {
  const s3 = new aws.S3({
    accessKeyId: process.env.BUCKETEER_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.BUCKETEER_AWS_SECRET_ACCESS_KEY,
    region: process.env.BUCKETEER_AWS_REGION,
  });

  const fileName = `public/NICE-InContact-Recommendation-Report-${Date.now()}.pdf`;
  const filePath = `${process.env.BUCKETEER_URL}/${fileName}`;

  const uploadParams = {
    Bucket: process.env.BUCKETEER_BUCKET_NAME,
    Key: fileName,
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
