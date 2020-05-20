window.onload = function () {
  // let id = document.getElementsByTagName("ARTICLE")[0];
  let id = document.getElementsByTagName("ARTICLE")[0].getAttribute("id").slice(5);

  console.log("Page ID: " + id);
}
