const API_URL = "https://api-goldmine.aitbytes.dev";

document.querySelectorAll<HTMLFormElement>(".waitlist-form").forEach((form) => {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = form.querySelector<HTMLInputElement>(
      "input[type='email']",
    )?.value;
    const formId = form.dataset.formId;
    const appName = form.dataset.appName;
    const messageEl = document.getElementById(`message-${formId}`);
    const button = form.querySelector("button");

    if (!email || !appName) return;

    // Show loading state
    if (button) {
      button.disabled = true;
      button.textContent = "Joining...";
    }

    try {
      const res = await fetch(`${API_URL}/api/join-waitlist`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, projectName: appName }),
      });

      if (res.ok) {
        if (messageEl) {
          messageEl.textContent = "You're on the list! We'll be in touch.";
          messageEl.classList.remove("hidden", "text-red-600");
          messageEl.classList.add("text-success");
        }
        form.reset();
      } else {
        const data = await res.json();
        throw new Error(data.error || "Something went wrong");
      }
    } catch (err) {
      if (messageEl) {
        messageEl.textContent =
          err instanceof Error ? err.message : "Something went wrong";
        messageEl.classList.remove("hidden", "text-success");
        messageEl.classList.add("text-red-600");
      }
    } finally {
      if (button) {
        button.disabled = false;
        button.textContent =
          formId === "hero" ? "Get Early Access" : "Join the Waitlist — It's Free";
      }
    }
  });
});
