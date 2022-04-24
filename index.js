const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {

    res.send('Hello from  777 my smarty pant')
});

const users = [
    { id: 1, name: 'Abdul Alim', email: 'alim@gmail.com', phone: '017888888' },
    { id: 2, name: 'Rajib', email: 'rajib@gmail.com', phone: '0178999999' },
    { id: 3, name: 'shabnur', email: 'shabnur@gmail.com', phone: '017877777' },
    { id: 4, name: 'halim', email: 'halim@gmail.com', phone: '017866666' },
    { id: 5, name: 'suchurita', email: 'suchita@gmail.com', phone: '017855556' },
    { id: 5, name: 'sraboni', email: 'sraboni@gmail.com', phone: '0177775555' },
]



app.get('/users', (req, res) => {
    //filtter by search query parameter
    if (req.query.name) {
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user => user.name.toLowerCase().includes(search))
        res.send(matched);
    }
    else {
        res.send(users);
    }
});





app.get('/user/:id', (req, res) => {
    console.log(req.params);
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id = id);
    res.send(user)
});

app.post('/user', (req, res) => {
    console.log('request', req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user);
})


app.get('/fruits', (req, res) => {
    res.send(['mango', 'apple', 'oranges']);
})



app.listen(port, () => {
    console.log('Listening to port', port)
})