const express = require('express');
const port    = process.env.PORT || 4000;
const app     = express();
const routes     = require('./config/routes');
const dest    = `${__dirname}/public`;

app.use(express.static(dest));
app.use('/api', routes);
app.get('/*', (req, res) => res.sendFile(`${dest}/index.html`));

app.listen(port, () => console.log(`Express has started on port: ${port}`));
