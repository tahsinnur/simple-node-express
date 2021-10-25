const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('WOW I am excited learning node and express with nodemon');
})

const users = [
    { id: 0, name: 'Shabana', email: "Shabana@gmail.com", phone: "0178888888" },
    { id: 1, name: 'Shabnoor', email: "Shabnoor@gmail.com", phone: "0178888888" },
    { id: 2, name: 'Srabonti', email: "Srabonti@gmail.com", phone: "0178888888" },
    { id: 3, name: 'Shuchorita', email: "Shuchorita@gmail.com", phone: "0178888888" },
    { id: 4, name: 'Soniya', email: "Soniya@gmail.com", phone: "0178888888" },
    { id: 5, name: 'Shusmita', email: "Shusmita@gmail.com", phone: "0178888888" },
]

app.get('/users', (req, res) => {
    // use search query parameter
    const search = req.query.search;
    if (search) {
        const searchResult = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(searchResult);
    }
    else {
        res.send(users)
    }
})

// app.METHOD
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hitting the post', req.body)
    // res.send('inside post')
    // res.send(JSON.stringify(newUser))
    res.json(newUser)
})

// dynamic api
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user);
})

app.get('/fruits', (req, res) => {
    res.send(['mango', 'oranges', 'banana', 'apple'])
})

app.get('/fruits/mangoes/fazli', (req, res) => {
    res.send('yummy yummy tok marka fazli')
})

app.listen(port, () => {
    console.log('listening to port', port);
})