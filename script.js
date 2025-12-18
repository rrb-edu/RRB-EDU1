const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav-links");

toggle.addEventListener("click", () => {
  nav.classList.toggle("show");
});

<script type="module">
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "",
  authDomain: "rrb-edu.firebaseapp.com",
  projectId: "rrb-edu",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
</script>
