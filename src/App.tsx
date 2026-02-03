import "./App.css";
import Preparation from "./components/Preparation";
import FAQ from "./components/FAQ";

export default function App() {
  return (
    <div style={{ maxWidth: 980, margin: "0 auto", padding: 24 }}>
      <h1>TS Hong Shot</h1>
      <p>Ginseng Kapseln – Pilot & Feedback.</p>

      <Preparation />
      <FAQ />
    </div>
  );
}

