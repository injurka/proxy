import { AppStore } from "./App.store";

const App = () => {
  const store = new AppStore({ defaultValue: 1 });
  const { setValue, state } = store;

  return (
    <main>
      <button onClick={() => setValue(1 + state.value)}>CLICK</button>
    </main>
  );
};

export default App;
