import { NotImplementedError } from '../extensions/index.js';

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
export default function renameFiles(names) {
  let arr=[];
  let arr1=[];

  for (let i=0;i<names.length; i++){
    
   if (arr.indexOf(names[i])>=0){
    let count=0;
     for (let j=0;j<arr1.length;j++){
       if (arr1[j]==names[i]) {count++}
     }
     if (count==0) {count=1}
     arr[i]=names[i]+"("+count+")";
   }
    else {arr[i]=names[i];
    }
    arr1[i]=names[i];
  }
  return arr
}
