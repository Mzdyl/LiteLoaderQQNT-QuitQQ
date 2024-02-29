const template = document.createElement("template");
template.innerHTML = `
<div tabindex="0" role="button" aria-label="关闭程序">
    <i class="q-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="10" fill="none" />
          <path d="M18 6L6 18M6 6l12 12" />
        </svg>
    </i>
</div>
`;
const close_app_button = template.content.cloneNode(true).querySelector("div");

close_app_button.addEventListener("click", () => {
    window_actions.closeApp();
});

const interval = setInterval(() => {
    const window_control_area = document.querySelector(".window-control-area");
    const setting_btn = document.querySelector(".login-container .setting");
    if (window_control_area) {
        clearInterval(interval);
        window_control_area.insertBefore(close_app_button, window_control_area.childNodes[0]);
    }
    if (setting_btn) {
        setting_btn.style.marginRight = "32px";
    }
}, 50);