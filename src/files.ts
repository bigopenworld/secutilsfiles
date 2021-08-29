// dependency import
import Cryptr from "cryptr"
import fs from "fs"
import { promisify } from "util"
import * as utils from "./utils.js"
// define const
const readfile = promisify(fs.readFile) // promisify the fs.readFile
const writefile = promisify(fs.writeFile) // promisify the fs.writeFile

/** Read file function
* @param {string} path take the path
* @return {Promise<string>} return promise of data
*/
export async function readFile(path : string) : Promise<string> {
  let files : Buffer = await readfile(path)
  return files.toString()
}

/** CryptFile function 
* @param {string} path take the path of the input file
* @param {string} dest take the path of the destination file
* @param {string | undefined} key take the key if none specified one will be generated 
* @return {string} Return the key
*/
export async function CryptFile(path : string, dest : string, key? : string) : Promise<string> {
  let enckey = key
  if (!enckey) {
    enckey = utils.RandomString(20)
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
export async function DecryptFile(path : string, dest : string, key : string) : Promise<string> {
  let enckey = key
  let crypt = new Cryptr(enckey)
  const data = await readFile(path)
  const dataenc = crypt.decrypt(data)
  await writefile(dest, dataenc)
  return enckey
}
