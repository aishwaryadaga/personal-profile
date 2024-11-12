var acc = document.getElementsByClassName("accordion");

for (var i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    var panel = this.nextElementSibling;
    var isOpen = panel.style.maxHeight;

    // Toggle the active state and aria-expanded attribute
    this.classList.toggle("active");
    this.setAttribute("aria-expanded", !isOpen);

    // Toggle maxHeight for smooth transition
    if (isOpen) {
      panel.style.maxHeight = null;
      panel.setAttribute("aria-hidden", "true");
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
      panel.setAttribute("aria-hidden", "false");
    }
  });
}
