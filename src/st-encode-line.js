import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str) {
  let newStr='';
  let obj={};
  let result='';
  for (let i=0;i<str.length;i++){
    if (newStr.indexOf(str[i])<0){
      newStr=newStr+str[i];
      obj[str[i]]=1;
    }
    else {
      obj[str[i]]++;
    }
  }
 for (let key in obj) {
   if (obj[key]==1){result=result+key}
   else{
    result=result+obj[key]+key
   }
  
 }
 return result;
}
