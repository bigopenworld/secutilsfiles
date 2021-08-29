import { files, utils } from "./index.js"

/** DecryptFile function 
* @param {string} path take the path of the input dir
* @param {string} dest take the path of the destination dir
* @param {string} key take the secret key
* @return {string} Return the key
*/
export async function CryptDir(path : string, dest : string, key : string) : Promise<string> {
  let files_list = utils.readDir(path)
  ;(await files_list).map((e)=> {
    files.CryptFile(`${path}/${e}`,`${dest}/${e}`, key)
  })
  return key
}

/** DecryptFile function 
* @param {string} path take the path of the input dir
* @param {string} dest take the path of the destination dir
* @param {string} key take the secret key
* @return {string} Return the key
*/
export async function DecryptDir(path : string, dest : string, key : string) : Promise<string> {
  let files_list = utils.readDir(path)
  ;(await files_list).map((e)=> {
    files.DecryptFile(`${path}/${e}`,`${dest}/${e}`, key)
  })
  return key
}