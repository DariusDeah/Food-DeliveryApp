import fs from 'fs';
import util from 'util';
import path from 'path';
const deleteFileAsync = util.promisify(fs.unlink)
// const readFileAsync = util.promisify(fs.)
// deleteFileAsync()
export const deleteLocalMulterImages = async (filePath: string) => {
   await deleteFileAsync(filePath)
}