function _isScriptLoaded(script_path) {
  var scripts = document.getElementsByTagName('script');
  for (var i = 0; i < scripts.length; i++) {
    if (scripts[i].src === script_path) {
      return true;
    }
  }
  return false;
}

function _injectScript(script_path) {
  if (!_isScriptLoaded(script_path)) {
    var script = document.createElement('script');
    script.charset = "UTF-8";
    script.async = "true";
    script.type = "text/javascript";
    script.src = script_path;

    var head = document.head || document.getElementsByTagName('head')[0];
    if (head.firstChild) {
      head.insertBefore(script, head.firstChild);
    } else {
      head.appendChild(script);
    }
  }
}

_injectScript("https://unpkg.com/crypto-js@4.2.0/crypto-js.js");