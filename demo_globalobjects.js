/** __filename represents the filename of the code being executed. **/
console.log("__filename = " + __filename);

/** __dirname represents the name of the directory that the currently executing script resides in. **/
console.log("__dirname = " + __dirname);

/** setTimeout(cb, ms) global function is used to run callback cb after at least ms milliseconds. **/
function printMsg(){
    console.log("This msg is fired after 2s delay");
}
setTimeout(printMsg, 2000);

/** setInterval(cb, ms) global function is used to run callback cb repeatedly after at least ms milliseconds. **/
function printMsgRepeated(){
    console.log("This msg is fired every 1s");
}
setTimeout(printMsgRepeated, 1000);