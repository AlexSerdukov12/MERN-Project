const express = require('express');
const port = process.env.PORT || 5001;
const app = express();
var cors = require('cors')
app.use(cors())
var bodyParser = require('body-parser')
const {searchLaundryMachines, searchDryers,
  searchRefrigerators,searchDishwashers,searchTelevisions,
  searchStoves,searchAirconditioners,searchOvens,searchByString,
  searchUser,registerUser, updateUser,getwishList,updateUserCart,getCart} = require('./mongoDB');
const res = require('express/lib/response');

// create application/json parser
var jsonParser = bodyParser.json()



app.get('/getlaundrymachines', (req, res) => {

  searchLaundryMachines({}).then((laundryMachines) => {
    res.send(laundryMachines)
  }).catch((machinesError) => {
    console.log(machinesError)
  })
 })
app.get('/getdryers', (req, res) => {
console.log('im inside get dryers')

searchDryers({}).then((dryers) => {
  res.send(dryers)
}).catch((dryersError) => {
  console.log('failed to pull')

})
})
app.get('/getrefrigerators', (req, res) => {
console.log('im inside get refrigerators')

searchRefrigerators({}).then((refrigerators) => {
  res.send(refrigerators)
}).catch((refrigeratorsError) => {
  console.log(refrigeratorsError)
})
})
app.get('/getdishwashers', (req, res) => {
console.log('im inside get dishwashers')

searchDishwashers({}).then((dishwashers) => {
  res.send(dishwashers)
}).catch((dishwashersError) => {
  console.log(dishwashersError)
})
})
app.get('/gettelevisions', (req, res) => {
  console.log('im inside get televisions')
  
  searchTelevisions({}).then((televisions) => {
    res.send(televisions)
  }).catch((televisionsError) => {
    console.log(televisionsError)
  })
  })
app.get('/getstoves', (req, res) => {
  console.log('im inside get stoves')
  
  searchStoves({}).then((stoves) => {
    res.send(stoves)
  }).catch((stovessError) => {
    console.log(stovessError)
  })
  })
app.get('/getairconditioners', (req, res) => {
  console.log('im inside get airconditioners')
  
  searchAirconditioners({}).then((airconditioners) => {
    res.send(airconditioners)
  }).catch((airconditionersError) => {
    console.log(airconditionersError)
  })
  })

app.get('/getovens', (req, res) => {
  console.log('im inside get ovens')
  
  searchOvens({}).then((ovens) => {
    console.log(ovens);
    res.send(ovens)
  }).catch((ovensError) => {
    console.log(ovensError)
  })
  })
app.post('/search', jsonParser, (req, res) => {
  var search1 = req.body.test_data
  console
  searchByString(search1).then((sendToFront) => {
    console.log("**************************************************");

    console.log(sendToFront);
    console.log("**************************************************");

    res.send(sendToFront)
  }).catch((sendToFrontError) => {
    console.log(sendToFrontError)
  })
})

app.post('/login', jsonParser, (req, res) => {
  console.log('Receiving data from frontend')
    console.log(req.body);
    var email = req.body.email_data
    var pw = req.body.password_data
    searchUser(email,pw).then((sendToFront) => {
      console.log('here what data i got from-search')
      console.log(sendToFront);
      res.send(sendToFront)
    }).catch((sendToFrontError) => {
      console.log(sendToFrontError)
    })
  })


  app.post('/register', jsonParser, (req, res) => {
    console.log('Receiving data from frontend')
      console.log(req.body);
      var email = req.body.email_data
      var pw = req.body.password_data
      console.log(email,pw)
      console.log(searchUser(email,pw))
      registerUser(email,pw).then((sendToFront) => {
        console.log('here what data i got from-register')
        console.log(sendToFront);
        res.send(sendToFront)
      }).catch((sendToFrontError) => {
        console.log(sendToFrontError)
      })
    })
    app.post('/addtowishlist', jsonParser, (req, res) => {
      updateUser(req.body).then((sendToFront) => {
        console.log('here what data i got from-register')
        console.log(sendToFront);
        res.send(sendToFront)
      }).catch((sendToFrontError) => {
        console.log(sendToFrontError)
      })
    })


    app.post('/getwishlist', jsonParser, (req, res) => {
      getwishList(req.body).then((sendToFront) => {
        console.log(req.body)
        console.log('here what data i got from-getwishlist')
        console.log(sendToFront);
        res.send(sendToFront)
      }).catch((sendToFrontError) => {
        console.log(sendToFrontError)
      })
    })

    app.post('/getcart', jsonParser, (req, res) => {
      getCart(req.body).then((sendToFront) => {
        console.log(req.body)
        console.log('here what data i got from-getcart')
        console.log(sendToFront);
        res.send(sendToFront)
      }).catch((sendToFrontError) => {
        console.log(sendToFrontError)
      })
    })

    app.post('/addtocart', jsonParser, (req, res) => {
      updateUserCart(req.body).then((sendToFront) => {
        console.log(req.body)
        console.log('here what data i got from-cart')
        console.log(sendToFront);
        res.send(sendToFront)
      }).catch((sendToFrontError) => {
        console.log(sendToFrontError)
      })
    })

app.listen(port, () => {
  console.log('lets rocknroll');
});




