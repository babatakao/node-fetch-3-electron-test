import fetch from 'node-fetch'
fetch('http://example.com')
  .then(() => alert('done'))
  .catch(e => { console.error(e); alert(e); })

window.fetch2 = fetch