#!/usr/bin/env node
'use strict';

/*Converted the following python argparse example gist to node equivalent.
https://gist.github.com/redja/9276216 

Test Input
./argparse-example.js --server=pyserver --port=8080,443,25,22,21 --keyword=pyisgood

Time of execution
0.0099s   Server name : [pyserver]
0.0010s   
0.0003s   Port : [8080]
0.0001s   Port : [443]
0.0000s   Port : [25]
0.0000s   Port : [22]
0.0000s   Port : [21]
0.0000s   
0.0028s   Keyword assigned : [pyisgood] 
0.0003s   

Total   0.0154s
*/

/*initialise the parser, addHelp adds a nice help menu with all the possible flags 
specified with their description. */
var ArgumentParser = require('argparse').ArgumentParser;
var parser = new ArgumentParser({
    version: '0.0.1',
    addHelp: true,
    description: 'Basic cli app to print server and ports supplied.'
});

//add arguments. 
//store is the default action, stores the passed argument value in the namespace.
parser.addArgument(['-s','--server'], 
{
    action: 'store',
    dest: 'ServerName',
    help: 'Stores the server name supplied.'
});

//nargs allow multiple arguments to be stored.
parser.addArgument(['-p' , '--port'], 
{
    action: 'store',
    dest: 'Ports',
    nargs: '+',
    help: 'Stores the ports supplied.'
});

//dest specifies the name of the attribute in the namespace.
parser.addArgument(['-k' , '--keyword'], 
{
    action: 'store',
    dest: 'KeyWord',
    help: 'Stores the keyword supplied'
});

var args;
args = parser.parseArgs();

//check if optional parameters were supplied
if (args.ServerName)console.log(`Server name : [${args.ServerName}]\n`);
if (args.Ports)args.Ports[0].split(",").forEach(item => console.log(`Port : [${item}]`));
if (args.KeyWord)console.log(`\nKeyword assigned : [${args.KeyWord}] `);