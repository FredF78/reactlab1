This app is built to a browserify bundle containing jsx snippets and react runtime. Grunt compiles jsx and browserifies the app. The app also contains a mocked data api running on node express.

To run this, execute following steps (node.js required: found at http://nodejs.org/)

1. on the dev machine: npm install
2. on the dev machine: grunt
3. on the server: npm install -g express (the app depends on express for its api and is not shipped with the distribution)
4. on the server: node index.js
5. in the browser: request index.html on the server where you deployed the app.
