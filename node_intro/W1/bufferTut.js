// let b = Buffer.from([0x41, 0x42, 0x43]);
// let b = Buffer.from('س');
// console.log(b.length);
// console.log(b);

const user = 'Ashkan';
//// روش های ساخت بافر
// 1.

const buff = Buffer.from([3, 4, 513], 'hex');
const buffChar = Buffer.from('سلام', 'utf8');
console.log(buffChar.length);
// console.log(buff[0].toString(2));
// console.log(buff);
// console.log(Number(513).toString(2));
console.log(buffChar);
console.log(buffChar.toString());

/// 2.  alloc
const myBuff = Buffer.alloc(1024, 10);

console.log(myBuff);
