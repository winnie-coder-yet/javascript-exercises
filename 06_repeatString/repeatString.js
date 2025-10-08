const repeatString = function(string, num){
    if(num<0) return 'ERROR';
    let output = '';
    for (p=0; p<num; p++){
        output+= string;
    }
    return output;
}

// Do not edit below this line
module.exports = repeatString;
