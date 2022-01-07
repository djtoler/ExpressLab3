import express from 'express';
import cors from 'cors';
import path from "path";
import Assignment from "./models/assignment";



import workHome from './routes/workHome';
import addWork from './routes/addWork';
import addWorkCon from './routes/addWorkCon';
import deleteWork from './routes/deleteWork';
import deleteWorkCon from './routes/deleteWorkCon';
import editWork from './routes/editWork';
import updateWork from './routes/updateWork';
import api from './routes/api'



const app = express();



app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set("views", path.join(__dirname, "Views"));
app.set("view engine", "hbs");
app.use(express.static(path.join(__dirname, "public")));





app.use("/", workHome);
app.use("/addwork", addWork);
app.use("/addworkcon", addWorkCon);
app.use("/deletework", deleteWork);
app.use("/deleteworkcon", deleteWorkCon);
app.use("/editwork", editWork);
app.use("/updatework", updateWork);
app.use('/api', api);



const port = 8787;








app.listen(port, () => console.log(`"Now listening on port:${8787}"`));