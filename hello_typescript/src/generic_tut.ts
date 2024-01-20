function pringData<T>(data: T[]) {
  for (const item of data) {
    console.log(`data: ${item}`);
  }
}

interface GenericNumber<NumType> {
  zeroValue: NumType;
  add: (x: NumType, y: NumType) => NumType;
}

class AddNumber implements GenericNumber<number> {
  zeroValue: number = 0;
  add(x: number, y: number): number {
    return x + y;
  }
}

interface Shalgham {
  username: string;
}

pringData<number | string>([3, 4, 6, 7, "a"]);
pringData<string>(["s", "a"]);
pringData<Shalgham>([{ username: "yeki" }]);
