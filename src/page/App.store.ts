interface Params {
  defaultValue: number;
  setValueHandler?: any;
}

export class ControlStore {
  state = {
    value: 0,
  } as { value: number };

  constructor(params: Params) {
    this.state.value = params.defaultValue;

    this.setValue = new Proxy(this._setValue, params?.setValueHandler ?? {});
  }

  _setValue = (value: number) => {
    this.state.value = value;
    console.log("setValue", this.state.value);
  };

  setValue = this._setValue;
}

export class AppStore extends ControlStore {
  constructor(params: Params) {
    super(params);
  }
}
