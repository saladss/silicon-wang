document.getElementById("year").textContent = new Date().getFullYear();

const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");

if (form) {
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  status.textContent = "Sending...";

  try {
    const res = await fetch(form.action, {
      method: "POST",
      body: new FormData(form),
      headers: { Accept: "application/json" },
    });

    if (res.ok) {
      form.reset();
      status.textContent = "Thanks — we'll be in touch shortly.";
    } else {
      status.textContent = "Something went wrong. Please email us directly instead.";
    }
  } catch (err) {
    status.textContent = "Something went wrong. Please email us directly instead.";
  }
});
}
