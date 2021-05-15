use double braces in html for dynamic part
  <h1>Hello from {{channelName}}</h1>

and define the variable in index file 

app.get("", (req, res)=>{
    res.render('index', {
        channelName : "Selena Ji ki Jay",
    });
})
