import { writeFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, '..', 'public');

function redirectHtml(target) {
  return `<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><meta http-equiv="refresh" content="0;url=${target}"><link rel="canonical" href="${target}"><script>location.replace(${JSON.stringify(target)});</script><title>Redirecting…</title></head><body><p>Redirecting to <a href="${target}">${target}</a></p></body></html>\n`;
}

const simple = {
  'collection.html': '/collection/',
  'about.html': '/about/',
  'contact.html': '/contact/',
  'faq.html': '/faq/',
  'shipping.html': '/shipping/',
  'returns.html': '/returns/',
  'admin.html': '/admin/',
  'success.html': '/success/',
  'cancel.html': '/cancel/',
};

for (const [file, dest] of Object.entries(simple)) {
  writeFileSync(path.join(publicDir, file), redirectHtml(dest));
}

writeFileSync(
  path.join(publicDir, 'product.html'),
  `<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><title>Redirecting…</title>
<script>
(function () {
  var params = new URLSearchParams(location.search);
  var id = params.get('id');
  var allowed = ['corefit-essential','corefit-pro','corefit-elite','corefit-signature'];
  var dest = (id && allowed.indexOf(id) !== -1) ? ('/product/' + id + '/') : '/collection/';
  location.replace(dest);
})();
</script></head><body><p>Redirecting…</p></body></html>\n`,
);

console.log('Wrote legacy HTML redirects to public/');
