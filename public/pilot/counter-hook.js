cat > public/pilot/counter-hook.js <<'JS'
import { initializeApp, getApps } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getDatabase, ref, runTransaction } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-database.js";

console.log("[counter-hook] loaded");

const FIREBASE_CONFIG = window.firebaseConfig || (window.Ginseng && window.Ginseng.firebaseConfig) || {
  databaseURL: "https://rote-ginseng-vn-default-rtdb.europe-west1.firebasedatabase.app",
  apiKey: "PASTE_HERE",
  authDomain: "PASTE_HERE",
  projectId: "rote-ginseng-vn",
  appId: "PASTE_HERE"
};

function todayISO() {
  return new Date().toISOString().slice(0, 10);
}

function pickCity(payload) {
  return payload?.meta_city_code || payload?.metaCityCode || payload?.city || "DL";
}

function isValid(payload) {
  const keys = Object.keys(payload || {}).filter(k => k.startsWith("q"));
  const answered = keys.filter(k => payload[k] !== null && payload[k] !== undefined && String(payload[k]).trim() !== "").length;
  if (keys.length > 0) return answered >= 8;

  const required = ["client_ts", "lang"];
  return required.every(k => payload && payload[k]);
}

async function inc(db, path) {
  await runTransaction(ref(db, path), cur => (cur || 0) + 1);
}

const app = (getApps().length ? getApps()[0] : initializeApp(FIREBASE_CONFIG));
const db = getDatabase(app);

async function bumpCounters(payload) {
  const city = pickCity(payload);
  const base = `counters/${city}/${todayISO()}`;
  await inc(db, `${base}/total`);
  if (isValid(payload)) await inc(db, `${base}/valid`);
  console.log(`[counter-hook] +1 total (${city}), valid=${isValid(payload)}`);
}

function waitForSubmitSurvey(timeoutMs = 8000) {
  return new Promise((resolve, reject) => {
    const started = Date.now();
    const t = setInterval(() => {
      const fn = window.Ginseng && window.Ginseng.submitSurvey;
      if (typeof fn === "function") {
        clearInterval(t);
        resolve(fn);
      } else if (Date.now() - started > timeoutMs) {
        clearInterval(t);
        reject(new Error("submitSurvey not found"));
      }
    }, 100);
  });
}

(async () => {
  try {
    const original = await waitForSubmitSurvey();
    if (original.__wrappedCounter) {
      console.log("[counter-hook] submitSurvey already wrapped");
      return;
    }

    const wrapped = async function(payload) {
      const res = await original(payload);
      try {
        await bumpCounters(payload);
      } catch (e) {
        console.warn("[counter-hook] counter error:", e);
      }
      return res;
    };
    wrapped.__wrappedCounter = true;

    window.Ginseng.submitSurvey = wrapped;
    console.log("[counter-hook] submitSurvey wrapped ✅");
  } catch (e) {
    console.warn("[counter-hook] could not wrap submitSurvey:", e);
  }
})();
JS
