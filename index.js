let fs = require('fs');

var rawText = fs.readFileSync('input.txt', 'utf8');

let input = rawText.split(',');

let preTag = "\"";
let postTag = "\", ";

function tag_formatter(input, preTag, postTag){
    
    let temp;

    for(let i = 0; i < input.length; i++)
    {
        temp = input[i];

        if(preTag === '#'){
            temp = temp.replace(/\s/g, '');
        }

        temp = `${preTag}${temp}${postTag}`;
        input[i] = temp;
    }

    return input;
}

let newOutput = tag_formatter(input, preTag, postTag);

for(let i = 0; i < newOutput.length; i++){
    console.log(newOutput[i]);
}

//output
//-------------------------------------------
// "Le Car",
// "Adam Lee Miller",
// "Ian R. Clark",
// "Auto-Biography",
// "2000",
// "US",
// "Electro",
// "Synth-pop",
// "Ersatz Audio",

//if preTag = '#'
// #LeCar
// #AdamLeeMiller
// #IanR.Clark
// #Auto-Biography
// #2000
// #US
// #Electro
// #Synth-pop
// #ErsatzAudio


