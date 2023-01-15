
import ControlLeftSwitch from "./components/ControlLeftSwitch";
import ControlRihgtSwicth from "./components/ControlRihgtSwicth";
import ScreenConte from "./components/ScreenSwitch";

function App() {
  return (
    <section className="flex justify-center items-center w-full h-screen">
      <div className="flex flex-row items-center justify-center p-2 mt-5">
      <ControlLeftSwitch />
      <ScreenConte />
      <ControlRihgtSwicth />
      </div>
    </section>
  );
}

export default App;
