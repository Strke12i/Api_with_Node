import express from 'express';
import usersRoute from './routes/users.route';
import statusRoute from './routes/status.route';

const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(statusRoute)
app.use(usersRoute);



app.listen(3000, () => {
    console.log("Logado na 3000");

})