//require pega aas bibliotecas que foram baixadas
let express = require("express");
let app = express();
let cors = require("cors");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended:false}));
app.use("/login", require("./routes/login"));
app.use("/singUp", require("./routes/singUp"));

app.listen(3000);


