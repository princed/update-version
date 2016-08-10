# update-version

Update any part of version in `package.json` from command line.

## Installation 
 
`npm i -g update-version`

## Usage 

Run `update-version --<flag> <version-part>` in folder with `package.json` to set minor version.
Example: `update-version --minor 1` updates `2.0.3` to `2.1.3`.   
 Several flags could be used in one command.
 
### Possible flags
 
 * major
 * minor
 * patch
 * release
 * build
 
which correspond to following version parts: `major.minor.patch-release+build`

Provide no value to flag to reset it (remove for `release` and `build`, and set to 0 for others).
Example: `update-version --patch 4 --release` updates `2.0.3-alpha.1` to `2.0.4`.
