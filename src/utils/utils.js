import $ from "jquery";

const addScript = (path) => {
  const script = document.createElement("script");
  script.src = path;
  script.async = true;
  document.body.appendChild(script);
};

const initializePerfectScrollbar = (selector = ".scrollable-container") => {
  debugger;
  //  Notifications & messages scrollable
  if ($(selector).length > 0) {
    $(selector).perfectScrollbar({
      theme: "dark",
    });
  }
};
export default { addScript, initializePerfectScrollbar };
