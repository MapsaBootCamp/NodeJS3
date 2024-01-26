import "reflect-metadata";

interface UserMetaData {
  address?: string;
  shomareMeli?: number;
}

const ETELA_METADATA = "etelaAtJanebi";

function Module(initialData: UserMetaData | null): ClassDecorator {
  return (target: Function) => {
    if (!Reflect.hasMetadata(ETELA_METADATA, target)) {
      Reflect.defineMetadata(ETELA_METADATA, initialData, target.prototype);
      Reflect.
    }
  };
}

@Module({ address: "Tehran" })
class UserData {
  constructor(public id: string, public username: string) {}
}

const user = new UserData("1234", "Gholam");
console.log(user);

console.log(Reflect.getMetadata(ETELA_METADATA, user));
