import "./styles.css";

export default function App() {
  return (
    <section>
      <h2>Regular Css Class</h2>
      <div>
        <input
          id="focus_input"
          data-testid="focus_input"
          type="text"
          defaultValue="Focus me"
        />{" "}
        <label id="focus_label" data-testid="focus_label">
          Focus input to hide
        </label>
      </div>
      <div>
        <input id="check_input" data-testid="check_input" type="checkbox" />{" "}
        <label id="check_label" data-testid="check_label">
          Check checkbox to hide
        </label>
      </div>
    </section>
  );
}
