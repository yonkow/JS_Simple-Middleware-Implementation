const middlewareChain = require("./middlewareImplementation");

middlewareChain.use((req, res, next) => {
    req.name = "Hailey";
    console.log("First Middleware");
    next();
});

middlewareChain.use((req, res, next) => {
    req.breed = "Cocker";
    console.log("Second Middleware");
    next();
});

middlewareChain.use((req, res, next) => {
    req.isAuthentecated = true;
    console.log("Third Middleware");
    next();
});

middlewareChain.execute({}, {}, (req, res) => {
    console.log("Middleware CHAIN Finished");
    console.log(req);
});
