This app is built to a browseriy bundle containing jsx snippets and react runtime which compiles everything in the browser.

To run this, execute following steps (node.js required: found at http://nodejs.org/)

1. npm install
2. grunt
3. node index.js
4. point a browser to index.html port 3000 at server running node


Known problems
* It does not work! (componentDidMount of component AlbumApp is never called and thus never fetched initial data)
