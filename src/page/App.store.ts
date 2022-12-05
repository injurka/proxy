interface Params {
  defaultValue: number;
}

export class ControlStore {
  state = {
    value: 0,
  } as { value: number };

  constructor(params: Params) {
    this.state.value = params.defaultValue;
  }

  setValue = (value: number) => {
    this.state.value = value;
    console.log("setValue", this.state.value);
  };
}

export class AppStore extends ControlStore {
  constructor(params: Params) {
    super(params);
  }

  //TODO как то нужно перехватить setValue
}
