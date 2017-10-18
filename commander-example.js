#!/usr/bin/env node
'use strict';

/*
Converted the following python argparse example gist to node equivalent.
https://gist.github.com/redja/9276216 

Test input
./commander-example.js --server=pyserver --port=8080,443,25,22,21 --keyword=pyisgood

Time of execution
0.0057s   Server name : [pyserver]
0.0006s   
0.0002s   Port : [8080]
0.0001s   Port : [443]
0.0000s   Port : [25]
0.0000s   Port : [22]
0.0000s   Port : [21]
0.0000s   
0.0017s   Keyword assigned : [pyisgood] 
0.0002s   

Total   0.0092s
*/

const program = require('commander');

//[type] allows us to store passed argument, equivalent to store action, no need for explicit dest.
//<items> allows us to parse multiple arguments, equivalent to nargs :  +. 
program
    .version('0.1.0')
    .description('Basic cli app to print server and ports supplied.')
    .option('-s , --server [type]', 'Stores the server name supplied.')
    .option ('-p, --port <items>', 'Stores the ports supplied.')
    .option('-k, --keyword [type]', 'Stores the keyword supplied')
    .parse(process.argv);

if (program.server)console.log(`Server name : [${program.server}]\n`);
if (program.port)program.port.split(",").forEach(item => console.log(`Port : [${item}]`));
if (program.keyword)console.log(`\nKeyword assigned : [${program.keyword}] `);  