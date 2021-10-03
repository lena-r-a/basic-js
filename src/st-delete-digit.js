import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
  let strn=""+n
  let max = +((strn).slice(1));
if (+((strn).slice(0,strn.length-1))>max) {max=+((strn).slice(0,strn.length-1))}
  for (let i=1;i<strn.length-1;i++){
    if (+(strn.slice(0,i)+strn.slice(i+1))>max){
      max=+(strn.slice(0,i)+strn.slice(i+1))
    }
  }
  return max;
}
