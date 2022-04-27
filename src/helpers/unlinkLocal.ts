import fs from 'fs';
import util from 'util';
const deleteFileAsync = util.promisify(fs.unlink)

export const deleteLocalMulterImages = async (filePath: string) => {
   await deleteFileAsync(filePath)
}