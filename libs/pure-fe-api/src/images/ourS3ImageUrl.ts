import { s3Bucket, s3ImageFolder, s3Region } from '../constants';

const ourS3ImageUrl = ({
  s3Key = '',
  folder = s3ImageFolder.public,
}: {
  s3Key: string;
  folder?: string;
}) => (s3Key ? `https://${s3Bucket}.s3.${s3Region}.amazonaws.com/${folder}/${s3Key}` : '');

export default ourS3ImageUrl;
