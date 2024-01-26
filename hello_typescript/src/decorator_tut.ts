// @classDecorator
// class Person {
//   @propertyDecorator
//   public name: string;

//   @accessorDecorator
//   get fullName() {
//     // ...
//   }

//   @methodDecorator
//   printName(@parameterDecorator prefix: string) {
//     // ...
//   }
// }

// @f
// @g
// class Harchi{}

// fog()

////////////////////// Class Decorators

function simpleClassDecorator(constructor: Function) {
  console.log("class Decorator");
  Object.seal(constructor);
  Object.seal(constructor.prototype);
}

@simpleClassDecorator
class A {
  num: number;
  id: number;
}
// console.log(Object.isSealed(A));

//// factory decorator

// function logger(testArg: boolean): ClassDecorator {
//   return (constructor: Function) => {
//     console.log("testArg", testArg);
//   };
// }

// @logger(true)
// class B {
//   num: number;
//   id: number;
// }

//////////////////////////////// Method Decorator

function deprecated(target: any, key: string, descriptor: PropertyDescriptor) {
  console.log("target", target);
  console.log("key", key);
  console.log("descriptor", descriptor);
  console.log(target[key] === descriptor.value);

  const originalDef = descriptor.value;

  descriptor.value = function (...args: any[]) {
    console.log(`Warning: ${key}() is deprecated. Use other methods instead.`);
    return originalDef.apply(this, args);
  };
  return descriptor;
}

class B {
  @deprecated
  sayHi() {
    console.log("sayhello call shod");
  }
}

// const b = new B();
// b.sayHi();

//////////////////////////////// Property Decorator

function validate(allowdedValueList: string[]): PropertyDecorator {
  return (target: any, propertyKey: PropertyKey) => {
    let originalVal = target[propertyKey];

    Object.defineProperty(target, propertyKey, {
      set: (newValue: any) => {
        if (!allowdedValueList.includes(newValue)) {
          console.log("not allowded");
          return;
        }
        originalVal = newValue;
      },
      get: () => originalVal,
    });
  };
}

class C {
  @validate(["John", "Gholi"])
  definition: string = "Alireza";
}

const cObj = new C();
console.log(cObj.definition);
