var fullJustify = function(words, maxWidth) {
    const [result] = [[], []];
    let word = []
    let sum = 0;

    for(let i = 0; i < words.length; i++){
        if((sum + words[i].length + word.length  ) > maxWidth) addInResult();
        word.push(words[i]);
        sum += words[i].length;

        if(i === (words.length -1)){
            let str = "";
            if(word.length === 1) str +=  word[0];
            else{
                for(let j = 0; j < word.length; j++){
                    str +=  word[j];
                    if(str.length < maxWidth) str +=' ';
                }
            }
            while(str.length < maxWidth){
                str += ' ';
            }
            result.push(str)
            
        }
    }

    function addInResult(){
        const spacePerWord = Math.floor(((maxWidth - sum) / (word.length-1)));
        let extraSpace = (maxWidth - sum) % (word.length-1);
        let str = "";

        if( word.length === 1){
            str += word[0]
            for(let index=0; index<(maxWidth - word[0].length) ; index++) str += ' ';
        } 
        else{
            for(let j = 0; j < word.length; j++){
                str +=  word[j];
                // if(j === 0)for(let index=0; index<extraSpace; index++) str += ' ';
                if(j !== (word.length-1)) for(let index=0; index<spacePerWord; index++){
                    str += ' '
                    if(extraSpace){
                        str += ' ';
                        extraSpace --;
                    }
                } ;
            }
        }

        result.push(str);
        str = '';
        sum = 0;
        word = [];
    }

    return result;



};

console.log(fullJustify(["What","must","be","acknowledgment","shall","be"], 16));
// ["What","must","be","acknowledgment","shall","be"]
// ["This", "is", "an", "example", "of", "text","justification.", "justification."]
// ["Science","is","what","we","understand","well","enough","to","explain","to","a","computer.","Art","is","everything","else","we","do"]