// Provide a picoc function that writes out files in a useful way
var picocFile = Module.cwrap("picoc", "number", ["string"]);
Module.picoc = function(data) {
    FS.writeFile("/tmp.c", data);
    var ret = picocFile("tmp.c");
    FS.unlink("/tmp.c");
    return ret;
};
