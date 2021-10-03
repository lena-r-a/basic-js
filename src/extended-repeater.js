import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
  let arr1=[];
  let arr2=[];
  let s;
  if (!options.addition && !(String(options.addition)==="false")
  && !(String(options.addition)==="null")) {arr1[0]=String(str);}
  else {arr1[0]=String(str)+String(options.addition);
    if (options.additionRepeatTimes)
    {for (let i=1;i<options.additionRepeatTimes;i++) {
      arr1[i]=String(options.addition)
    }}}
  if (options.additionSeparator){s=arr1.join(options.additionSeparator)}
 else  {s=arr1.join('|')}
  if (options.repeatTimes)
  {for (let j=0;j<options.repeatTimes;j++) {
    arr2[j]=s;}}
    else {arr2[0]=s}
  return options.separator?arr2.join(options.separator):arr2.join('+')
}
