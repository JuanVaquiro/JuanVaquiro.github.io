
import ControlLeftSwitch from "./components/ControlLeftSwitch";
import ControlRihgtSwicth from "./components/ControlRihgtSwicth";
import ScreenConte from "./components/ScreenSwitch";

function App() {
  return (
    <section className="main-container flex justify-center items-center">
      <div className="flex flex-row items-center justify-center p-2 mt-5">
      <ControlLeftSwitch />
      <ScreenConte />
      <ControlRihgtSwicth />
      </div>
    </section>
  );
}

export default App;
