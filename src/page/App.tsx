import { AppStore } from "./App.store";

const App = () => {
  const store = new AppStore({
    defaultValue: 1,
    setValueHandler: {
      apply(target: any, thisArg: any, args: any): any {
        console.log("aaaa", (args[0] = args[0] * 2));
        return target(...args);
      },
    },
  });
  const { setValue, state } = store;

  return (
    <main>
      <button onClick={() => setValue(1 + state.value)}>CLICK</button>
    </main>
  );
};

export default App;
