const str = "split";
const withCond = "split,with,condition";

function split(str,cmd){
    const result = [];
    if (cmd == "undefined"){
        for (let i = 0; i < str.length; i++){
            result.push(str[i]);
        }
    } else{
        for(let s of str){
                if(s != cmd){
                        result.push(s);
                    }
                }
        }
    console.log(result);
    return result
}

split(str);
split(withCond, ',')