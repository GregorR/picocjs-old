#!/usr/bin/env node
const PicoC = require("./dist/picoc.asm.js");

PicoC.FS.init(
    function() { return null; },
    function(cc) { process.stdout.write(String.fromCharCode(cc)); },
    function(cc) { process.stderr.write(String.fromCharCode(cc)); }
);

PicoC.picoc(`
    #include <stdio.h>

    int main() {
        fprintf(stderr, "Hello, world!\nUnbroken line");
        return 0;
    }
`);

PicoC.picoc(`
    #include <stdio.h>
    void main() { fflush(stdout); }
`);
