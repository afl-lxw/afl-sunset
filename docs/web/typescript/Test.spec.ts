class Person<T>{
  private _value: T;
  constructor(val: T) {
    this._value = val;
  }

  get getValue() :T {
    return this._value    
  }
}
let p = new Person<number>(12)



function generic<T>(a: T): T {
  return a;
}


function generic2<T, K>(a: T, b: K, flag: boolean) {
  if (flag) {
    return a;
  } else {
    return b
  }
}

interface InListInfo<T> {
  data: T
  title: string
  label: string
  width: number
  children: InListInfo<T>
}