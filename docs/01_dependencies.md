# Dependencies

## GIT

GIT 2.13.+

```
$ brew install git;
```

## NPM and Node

NPM 6.1.0

Node 8.9.4

```
$ brew install nvm; 
$ mkdir ~/.nvm
$ vi ~/.bash_profile
```

```
#!/bin/bash
  
# NVM
export NVM_DIR="$HOME/.nvm"
  . "/usr/local/opt/nvm/nvm.sh"
```

```
$ source ~/.bash_profile
$ nvm install 8.9.4;
```

## Yarn

Yarn 1.6

```
npm install --global yarn@1.6.0;
```
