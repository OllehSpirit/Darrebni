let fName: string = 'Anas'
fName = 'Attoum'
// fName = 5




let a: any = 'Anas'
a = 'Attoum'
a = 5




let b: (string | number | number[])[] = ['a']
b.push('A')
b.push(4)
b.push([9, 4])




let c: { id: number, name?: string }[] = [{ id: 1, name: 'aa' }, { id: 1, name: 'aa' }, { id: 1 }]

let d: { [index: number]: string }[] = [{ 1: 'aa' }, { 2: 'bb' }]




function showName(name: string) { }
showName('Anas')
// showName(3)




function show(fName: string = 'Anas', age: number, salary: number = 500) { }
show('A', 23, 5)
show('A', 23)




type myType = number | string
let x: myType = 'TS'




type Button = {
  up: string,
  down: string,
  test: number
}
function getAction(btn: Button) {
  console.log(btn.up)
}
getAction({ up: 'up', down: 'down', test: 1 })




type num = 1 | 0 | -1
function compar(num1: number, num2: number): num {
  if (num1 === num2) {
    return 0
  }
  else if (num1 > num2)
    return 1
  else {
    return -1
  }
}




let e: [string, number, boolean] = ['a', 1, true]
e.push(100)

let f: readonly [string, number, boolean] = ['a', 1, true]
// f.push(100)




type ArrayOfObject = {
  id: number,
  name: string
}

function returnArrayOfObject(id: number, name: string): ArrayOfObject[] {
  return [{ id: id, name: name }]
}
returnArrayOfObject(4,'TS')




let myImg = document.getElementById('a') as HTMLImageElement
console.log(myImg.src)
console.log(myImg.alt)