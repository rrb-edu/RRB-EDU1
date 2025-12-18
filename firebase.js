<script type="module">
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBRyra4D9cCnF2Zh11CRlZKD_leI5JaYJA",
  authDomain:  "rrb-edu1.firebaseapp.com",
  projectId:  "rrb-edu1",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
</script>
