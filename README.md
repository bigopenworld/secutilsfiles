# secutilsfiles

simple utils to crypt / decrypt files with AES

# Usage

`await secutils.files.CryptFile("./text.text", "./text.text.enc", "one")`

`await secutils.files.DecryptFile("./text.text.enc", "./text.text.dec", "one")`

`await secutils.dir.CryptDir("./dir","./dir.enc", "one")`

`await secutils.dir.DecryptDir("./dir.enc","./dir.dec", "one")`
