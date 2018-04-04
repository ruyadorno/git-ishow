# git-ishow

[![NPM version](https://badge.fury.io/js/git-ishow.svg)](https://npmjs.org/package/git-ishow)
[![License](http://img.shields.io/badge/license-MIT-blue.svg?style=flat)](https://raw.githubusercontent.com/ruyadorno/git-ishow/master/LICENSE)
[![Join the chat at https://gitter.im/ipipeto/Lobby](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/ipipeto/Lobby)

Git plugin that lets you interactively select a stashed item to show

> An [iPipeTo](https://github.com/ruyadorno/ipt) workflow

<br />
<br />

<p align="center">
<a href="https://asciinema.org/a/174389">
<img alt="demo animation" width="600" src="https://cdn.rawgit.com/ruyadorno/git-ishow/master/demo.svg" />
</a>
</p>

<br />

## Install

Get it with **npm**:

```sh
npm install -g git-ishow
```

### Run

In any git repo folder:

```
git ishow
```

**OR**

bypass **npm install** and run it at once using **npx**:

```sh
npx git-ishow
```

## Bash alias equivalent

If you're already an **ipt** user that has it globally installed, you can get this same functionality by just adding this alias to your **bash** (or equivalent) file:

### Requirements

- Unix-like system (needs `cut`, `xargs` cmds)
- [git](https://git-scm.com/) globally installed
- [ipt](https://www.npmjs.com/package/ipt) globally installed

```sh
alias git-ishow="git stash list | ipt -M 'Select stashed item to show:' --unquoted | cut -d ':' -f 1 | xargs git stash show -u"
```

## License

[MIT](LICENSE) © 2018 [Ruy Adorno](http://ruyadorno.com)

