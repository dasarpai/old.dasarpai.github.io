document.addEventListener("DOMContentLoaded", function () {
  const toggles = document.querySelectorAll(".tree-view .toggle");

  toggles.forEach(btn => {
    btn.addEventListener("click", () => {
      const ul = btn.nextElementSibling;
      if (ul && ul.tagName === "UL") {
        ul.classList.toggle("show");
        btn.classList.toggle("open");
      }
    });
  });

  // Expand all / Collapse all buttons
  const expandBtn = document.getElementById("expand-all");
  const collapseBtn = document.getElementById("collapse-all");

  if (expandBtn) {
    expandBtn.addEventListener("click", () => {
      document.querySelectorAll(".tree-list").forEach(ul => ul.classList.add("show"));
      document.querySelectorAll(".toggle").forEach(btn => btn.classList.add("open"));
    });
  }

  if (collapseBtn) {
    collapseBtn.addEventListener("click", () => {
      document.querySelectorAll(".tree-list").forEach(ul => ul.classList.remove("show"));
      document.querySelectorAll(".toggle").forEach(btn => btn.classList.remove("open"));
    });
  }

  // Optional: Auto-expand to level N (e.g., level 1)
  const defaultExpandLevel = 1;
  document.querySelectorAll(`.toggle[data-level]`).forEach(btn => {
    if (parseInt(btn.dataset.level) <= defaultExpandLevel) {
      const ul = btn.nextElementSibling;
      if (ul && ul.tagName === "UL") {
        ul.classList.add("show");
        btn.classList.add("open");
      }
    }
  });
});
