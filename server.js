const express = require('express');
const bodyParser = require('body-parser');
const { create } = require('express-handlebars');
const db = require('./models');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const hbs = create({
    defaultLayout: 'main',
    layoutsDir: './views/layouts',
});
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.set('views', './views');

const gameRoutes = require('./routes/gameRoutes');
app.use('/api', gameRoutes);

app.get('/', (req, res) => {
    res.render('index', { title: 'Battleship Game' });
});

db.sequelize.sync().then(() => {
    app.listen(3000, () => console.log("Server running on http://localhost:3000"));
});
