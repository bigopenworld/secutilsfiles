# secutilsfiles

[![Node.js CI](https://github.com/bigopenworld/secutilsfiles/actions/workflows/node.yml/badge.svg)](https://github.com/bigopenworld/secutilsfiles/actions/workflows/node.yml)

simple utils to crypt / decrypt files with AES

# Usage

`await secutils.files.CryptFile("./text.text", "./text.text.enc", "one")`

`await secutils.files.DecryptFile("./text.text.enc", "./text.text.dec", "one")`

`await secutils.dir.CryptDir("./dir","./dir.enc", "one")`

`await secutils.dir.DecryptDir("./dir.enc","./dir.dec", "one")`

# Building the module :

## Requirements : 

- typescript v3.X or newer
