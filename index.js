const express = require('express');

const app = express();

app.use(logger);

app.get("/books", (res, res) => {
    console.log("Books");

    return res.send({ route: "/books"});
});

app.get("/libraries", (res, res) => {
    console.log("Books");

    return res.send({ route: "/libraries" , permission: true});
});

app.get("/authors", (res, res) => {
    console.log("Books");

    return res.send({ route: "/authors", permission: true});
});

function logger(req, res, next){
    if(req.path === "/books"){
        req.role = "books";
    }
    else if(req.path === "/libraries"){
        req.role = "libraries";
    }
    else if(req.path === "/authors"){
        req.role = "authors";
    }
    next();
}

app.listen(5000, () => {
    // console.log("working !!!");
});