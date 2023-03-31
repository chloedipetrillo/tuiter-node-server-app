import posts from "./tuits.js";
let tuits = posts;


const currentUser = {
    "userName": "Rock",
    "handle": "@rock",
    "image": "https://betterpet.com/wp-content/uploads/2022/08/Shih-tzu-funfacts.jpeg",
};

const templateTuit = {
    ...currentUser,
    "topic": "This is the default topic!",
    "time": "now",
    "liked": false,
    "replies": 0,
    "retuits": 0,
    "likes": 0,
}
const createTuit = (req, res) => {
    const newTuit = req.body;
    newTuit._id = (new Date()).getTime()+'';
    tuits.unshift({...newTuit, ...templateTuit});
    res.json({...newTuit, ...templateTuit});
}

const findTuits = (req, res) =>
    res.json(tuits);


const updateTuit = (req, res) => {
    const tuitdIdToUpdate = req.params.tid;
    const updates = req.body;
    const tuitIndex = tuits.findIndex(
        (t) => t._id === tuitdIdToUpdate)
    tuits[tuitIndex] =
        {...tuits[tuitIndex], ...updates};
    res.sendStatus(200);
}

const deleteTuit = (req, res) => {
    const tuitdIdToDelete = req.params.tid;

    tuits = tuits.filter((t) =>
        t._id !== tuitdIdToDelete);
    res.sendStatus(200);
}



export default (app) => {
    app.post('/api/tuits', createTuit);
    app.get('/api/tuits', findTuits);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
}
