// dependency import

import Cryptr from "cryptr"
import fs from "fs"
import  { promisify } from "util"

// Define const


const readdir = promisify(fs.readdir) // promisify the fs.readdir 
const readfile = promisify(fs.readFile) // promisify the fs.readFile
const writefile = promisify(fs.writeFile) // promisify the fs.writeFile
const randomChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
const randomcharlengh = randomChar.length;

/** Read dir function
* @param {string} directory take the directory
* @return {Promise<string[]>} return a promise of files path
* Will be use when encrypt dir feature will be created
*/
async function readDir(directory : string) : Promise<string[]> {
  let files = await readdir(directory)
  return files.map(file => `${directory}/${file}`)
}

/** Read file function
* @param {string} path take the path
* @return {Promise<string>} return promise of data
*/
async function readFile(path : string) : Promise<string> {
  let files : Buffer = await readfile(path)
  return files.toString()
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
* @param {string} path take the path of the input file
* @param {string} dest take the path of the destination file
* @param {string | undefined} key take the key if none specified one will be generated 
* @return {string} Return the key
*/
async function CryptFile(path : string, dest : string, key? : string) : Promise<string> {
  let enckey = key
  if (!enckey) {
    enckey = RandomString(20)
  }
  let crypt = new Cryptr(enckey)
  const data = await readFile(path)
  const dataenc = crypt.encrypt(data)
  await writefile(dest, dataenc)
  return enckey
}

/** DecryptFile function 
* @param {string} path take the path of the input file
* @param {string} dest take the path of the destination file
* @param {string} key take the secret key
* @return {string} Return the key
*/
async function DecryptFile(path : string, dest : string, key : string) : Promise<string> {
  let enckey = key
  let crypt = new Cryptr(enckey)
  const data = await readFile(path)
  const dataenc = crypt.decrypt(data)
  await writefile(dest, dataenc)
  return enckey
}

