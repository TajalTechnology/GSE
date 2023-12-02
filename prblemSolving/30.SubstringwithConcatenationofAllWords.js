var findSubstring = function(s, words) {
    const [result, hash, len] = [[], {}, words.length * words[0].length]

    for (let index = 0; index < words.length; index++) {
        if(hash[words[index]]) hash[words[index]] +=1;
        else hash[words[index]] = 1;
    }

    let compareWords = {...hash};
    let str = '';

    for (let index = 0; index < (s.length - words[0].length+1); index++) {
        str = s[index];

        for (let i = index + 1; i < index + words[0].length; i++) str += s[i];

        if(compareWords[str]){

            compareWords[str] -= 1;
            let strOthers = ""
            for (let i = index + words[0].length;  i < index + len; i++) {
                strOthers += s[i];
                if(strOthers.length === words[0].length){
                    if(compareWords[strOthers]) compareWords[strOthers] -=1
                    strOthers = '';
                }
            }

            let count = true;
            for (const key in compareWords) {
                if(compareWords[key] !== 0) count = false
            }
            if(count){ result.push(index) } 
            compareWords = {...hash}
        } 
    }

    return result;
};


// let s = "barfoothefoobarman", words = ["foo","bar"]
// let s = "wordgoodgoodgoodbestword", words = ["word","good","best","word"]
// let s = "barfoofoobarthefoobarman", words = ["bar","foo","the"] // 6,9,12 foobarthe
// let s = "wordgoodgoodgoodbestword", words =  ["word","good","best","good"]
// let s = "wordgoodgoodgoodbestword", words = ["word","good","best","word"]
// let s = "lingmindraboofooowingdingbarrwingmonkeypoundcake", words = ["fooo","barr","wing","ding","wing"] // 13
let s = "pjzkrkevzztxductzzxmxsvwjkxpvukmfjywwetvfnujhweiybwvvsrfequzkhossmootkmyxgjgfordrpapjuunmqnxxdrqrfgkrsjqbszgiqlcfnrpjlcwdrvbumtotzylshdvccdmsqoadfrpsvnwpizlwszrtyclhgilklydbmfhuywotjmktnwrfvizvnmfvvqfiokkdprznnnjycttprkxpuykhmpchiksyucbmtabiqkisgbhxngmhezrrqvayfsxauampdpxtafniiwfvdufhtwajrbkxtjzqjnfocdhekumttuqwovfjrgulhekcpjszyynadxhnttgmnxkduqmmyhzfnjhducesctufqbumxbamalqudeibljgbspeotkgvddcwgxidaiqcvgwykhbysjzlzfbupkqunuqtraxrlptivshhbihtsigtpipguhbhctcvubnhqipncyxfjebdnjyetnlnvmuxhzsdahkrscewabejifmxombiamxvauuitoltyymsarqcuuoezcbqpdaprxmsrickwpgwpsoplhugbikbkotzrtqkscekkgwjycfnvwfgdzogjzjvpcvixnsqsxacfwndzvrwrycwxrcismdhqapoojegggkocyrdtkzmiekhxoppctytvphjynrhtcvxcobxbcjjivtfjiwmduhzjokkbctweqtigwfhzorjlkpuuliaipbtfldinyetoybvugevwvhhhweejogrghllsouipabfafcxnhukcbtmxzshoyyufjhzadhrelweszbfgwpkzlwxkogyogutscvuhcllphshivnoteztpxsaoaacgxyaztuixhunrowzljqfqrahosheukhahhbiaxqzfmmwcjxountkevsvpbzjnilwpoermxrtlfroqoclexxisrdhvfsindffslyekrzwzqkpeocilatftymodgztjgybtyheqgcpwogdcjlnlesefgvimwbxcbzvaibspdjnrpqtyeilkcspknyylbwndvkffmzuriilxagyerjptbgeqgebiaqnvdubrtxibhvakcyotkfonmseszhczapxdlauexehhaireihxsplgdgmxfvaevrbadbwjbdrkfbbjjkgcztkcbwagtcnrtqryuqixtzhaakjlurnumzyovawrcjiwabuwretmdamfkxrgqgcdgbrdbnugzecbgyxxdqmisaqcyjkqrntxqmdrczxbebemcblftxplafnyoxqimkhcykwamvdsxjezkpgdpvopddptdfbprjustquhlazkjfluxrzopqdstulybnqvyknrchbphcarknnhhovweaqawdyxsqsqahkepluypwrzjegqtdoxfgzdkydeoxvrfhxusrujnmjzqrrlxglcmkiykldbiasnhrjbjekystzilrwkzhontwmehrfsrzfaqrbbxncphbzuuxeteshyrveamjsfiaharkcqxefghgceeixkdgkuboupxnwhnfigpkwnqdvzlydpidcljmflbccarbiegsmweklwngvygbqpescpeichmfidgsjmkvkofvkuehsmkkbocgejoiqcnafvuokelwuqsgkyoekaroptuvekfvmtxtqshcwsztkrzwrpabqrrhnlerxjojemcxel", words = ["dhvf","sind","ffsl","yekr","zwzq","kpeo","cila","tfty","modg","ztjg","ybty","heqg","cpwo","gdcj","lnle","sefg","vimw","bxcb"]
// let s="a" , words = ["a"]
console.log(findSubstring(s, words));