#!/usr/bin/env node

const { join } = require('path');
const { exec, spawn } = require('child_process');

const env = {
    ...process.env,
    PATH: process.env.PATH + ':' + join(__dirname, 'node_modules', '.bin')
};

exec('git stash list | ipt -M "Select stashed item to show:" --unquoted | cut -d ":" -f 1', { env }, (err, stdout, stderr) => {
    if (err) {
        return console.error(err);
    }
    spawn('git', ['stash', 'show', '-u', stdout.trim()], { env, stdio: ['inherit', 'inherit', 'inherit']});
});
