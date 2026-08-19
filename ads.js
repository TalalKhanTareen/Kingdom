(function () {
  if (document.getElementById("kingdom-ads-container")) return;

  const container = document.createElement("div");
  container.id = "kingdom-ads-container";
  container.style.width = "100%";
  container.style.textAlign = "center";

  function addScript(src) {
    const s = document.createElement("script");
    s.src = src;
    document.body.appendChild(s);
  }

  function addAd(key, width, height) {
    const options = document.createElement("script");
    options.textContent =
      "atOptions = {" +
      "'key' : '" + key + "'," +
      "'format' : 'iframe'," +
      "'height' : " + height + "," +
      "'width' : " + width + "," +
      "'params' : {}" +
      "};";
    document.body.appendChild(options);

    const script = document.createElement("script");
    script.src = "https://www.highperformanceformat.com/" + key + "/invoke.js";
    document.body.appendChild(script);
  }

  document.body.appendChild(container);

  // Effective CPM ad - 5 times
  for (let i = 0; i < 5; i++) {
    addScript("https://pl30919555.effectivecpmnetwork.com/ec/89/53/ec8953f63434a1f025c210bbcc56fa9b.js");
  }

  // 300x250 - 2 times
  for (let i = 0; i < 2; i++) {
    addAd("c4c3bed0d98bc48aefc633b51f0f7d80", 300, 250);
  }

  // 468x60 - 2 times
  for (let i = 0; i < 2; i++) {
    addAd("21a90a042bba3856bbe81640ae9b8220", 468, 60);
  }

  // 728x90 - 5 times
  for (let i = 0; i < 5; i++) {
    addAd("90af2053aa4817db9bfc5ad759914a0a", 728, 90);
  }

  // 320x50 - 5 times
  for (let i = 0; i < 5; i++) {
    addAd("e3c37e3bd6afda498ba963bc9e8affa0", 320, 50);
  }
})();
