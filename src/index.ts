// dependency import

import aes256 from "aes256"
import fs from "fs"
import  { promisify } from "util"

// Define const


const readdir = promisify(fs.readdir) // promisify the fs.readdir 
const randomChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
const randomcharlengh = randomChar.length;

/** Read dir function
* @param {string} directory take the directory
* @return {Promise<string[]>} return a promise of files path
*/
async function readDir(directory : string) : Promise<string[]> {
  let files = await readdir(directory)
  return files.map(file => `${directory}/${file}`)
}

/** RandomString function 
* @param {number} length take the number of element in your string
* @return {string} Return the random string 
*/
function RandomString(length : number) : string {
  var result : string
  for ( var i = 0; i < length; i++ ) {
    result += randomChar.charAt(Math.floor(Math.random() * randomcharlengh));
  }
  return result
}

/** CryptFile function 
* @param {number} length take the number of element in your string
* @return {string} Return the random string 
*/
function CryptFile() : string {
  var result : string
  for ( var i = 0; i < length; i++ ) {
    result += randomChar.charAt(Math.floor(Math.random() * randomcharlengh));
  }
  return result
}

