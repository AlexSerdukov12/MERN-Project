const express = require('express');
const port = process.env.PORT || 5001;
const app = express();
var cors = require('cors')
app.use(cors())
var bodyParser = require('body-parser')
const {searchLaundryMachines, searchDryers,
  searchRefrigerators,searchDishwashers,searchTelevisions,
  searchStoves,searchAirconditioners,searchOvens,searchByString,
  searchUser,registerUser, updateUser,getwishList,updateUserCart,getCart,removeItemFromeUserCart,removeItemFromeUserwishlist,returnUser,
  addToOrdersFromWishList,checkItemsQuantity,checkItemsQuantityCart,addToOrdersFromCart,EditAdressUser,EditPayment,getDishWashersSort,
  getLaundryMachinesSort,getDryersSort,getRefrigeratorsSort,getTelevisionsSort,getStovesSort,getAirconditionersSort,getOvensSort,checkCoupon} = require('./mongoDB');
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
searchDryers({}).then((dryers) => {
  res.send(dryers)
}).catch((dryersError) => {
  console.log('failed to pull')

})
})

app.get('/getrefrigerators', (req, res) => {
searchRefrigerators({}).then((refrigerators) => {
  res.send(refrigerators)
}).catch((refrigeratorsError) => {
  console.log(refrigeratorsError)
})
})

app.get('/getdishwashers', (req, res) => {
searchDishwashers({}).then((dishwashers) => {
  res.send(dishwashers)
}).catch((dishwashersError) => {
  console.log(dishwashersError)
})
})

app.get('/gettelevisions', (req, res) => {
  searchTelevisions({}).then((televisions) => {
    res.send(televisions)
  }).catch((televisionsError) => {
    console.log(televisionsError)
  })
  })

app.get('/getstoves', (req, res) => {
  searchStoves({}).then((stoves) => {
    res.send(stoves)
  }).catch((stovessError) => {
    console.log(stovessError)
  })
  })
app.get('/getairconditioners', (req, res) => {
  searchAirconditioners({}).then((airconditioners) => {
    res.send(airconditioners)
  }).catch((airconditionersError) => {
    console.log(airconditionersError)
  })
  })

app.get('/getovens', (req, res) => {

  searchOvens({}).then((ovens) => {
    res.send(ovens)
  }).catch((ovensError) => {
    console.log(ovensError)
  })
  })

app.post('/search', jsonParser, (req, res) => {
  var search1 = req.body.test_data
  searchByString(search1).then((sendToFront) => {
    res.send(sendToFront)
  }).catch((sendToFrontError) => {
    console.log(sendToFrontError)
  })
})

app.post('/login', jsonParser, (req, res) => {
    var email = req.body.email_data
    var pw = req.body.password_data
    searchUser(email,pw).then((sendToFront) => {
      res.send(sendToFront)
    }).catch((sendToFrontError) => {
      console.log(sendToFrontError)
    })
  })


app.post('/register', jsonParser, (req, res) => {
    var email = req.body.email_data
    var pw = req.body.password_data
    registerUser(email,pw).then((sendToFront) => {
      res.send(sendToFront)
    }).catch((sendToFrontError) => {
      console.log(sendToFrontError)
    })
  })

app.post('/addtowishlist', jsonParser, (req, res) => {
  updateUser(req.body).then((sendToFront) => {
    res.send(sendToFront)
  }).catch((sendToFrontError) => {
    console.log(sendToFrontError)
  })
}) 


app.post('/getwishlist', jsonParser, (req, res) => {
  getwishList(req.body).then((sendToFront) => {
    res.send(sendToFront)
  }).catch((sendToFrontError) => {
    console.log(sendToFrontError)
  })
})

app.post('/getcart', jsonParser, (req, res) => {
  getCart(req.body).then((sendToFront) => {
    res.send(sendToFront)
  }).catch((sendToFrontError) => {
    console.log(sendToFrontError)
  })
})

app.post('/addtocart', jsonParser, (req, res) => {
  updateUserCart(req.body).then((sendToFront) => {
    res.send(sendToFront)
  }).catch((sendToFrontError) => {
    console.log(sendToFrontError)
  })
})

app.post('/removefromcart', jsonParser, (req, res) => {
  removeItemFromeUserCart(req.body).then((sendToFront) => {
    res.send(sendToFront)
  }).catch((sendToFrontError) => {
    console.log(sendToFrontError)
  })
})

app.post('/removefromwihlist', jsonParser, (req, res) => {
  removeItemFromeUserwishlist(req.body).then((sendToFront) => {
    res.send(sendToFront)
  }).catch((sendToFrontError) => {
    console.log(sendToFrontError)
  })
})

 app.post('/getuser', jsonParser, (req, res) => {
  returnUser(req.body).then((sendToFront) => {
    res.send(sendToFront)
  }).catch((sendToFrontError) => {
    console.log(sendToFrontError)
  })
})
 

app.post('/addToOrdersfromwishlist', jsonParser, (req, res) => {
  addToOrdersFromWishList(req.body).then((sendToFront) => {
    res.send(sendToFront)
  }).catch((sendToFrontError) => {
    console.log(sendToFrontError)
  })
})


app.post('/checkitemsfromwishlist', jsonParser, (req, res) => {
  checkItemsQuantity(req.body).then((sendToFront) => {
    res.send(sendToFront)
  }).catch((sendToFrontError) => {
    console.log(sendToFrontError)
  })
})

app.post('/getuserorders', jsonParser, (req, res) => {
  returnUser(req.body).then((sendToFront) => {
    res.send(sendToFront)
  }).catch((sendToFrontError) => {
    console.log(sendToFrontError)
  })
})

////////////////cart
app.post('/checkitemsfromcart', jsonParser, (req, res) => {
  checkItemsQuantityCart(req.body).then((sendToFront) => {
    res.send(sendToFront)
  }).catch((sendToFrontError) => {
    console.log(sendToFrontError)
  })

})

app.post('/addToOrdersfromcart', jsonParser, (req, res) => {
  addToOrdersFromCart(req.body).then((sendToFront) => {
    res.send(sendToFront)
  }).catch((sendToFrontError) => {
    console.log(sendToFrontError)
  })
})


app.post('/editadress', jsonParser, (req, res) => {


   EditAdressUser(req.body).then((sendToFront) => {
    res.send(sendToFront)
  }).catch((sendToFrontError) => {
    console.log(sendToFrontError)
  }) 
})


app.post('/editpayment', jsonParser, (req, res) => {


  EditPayment(req.body).then((sendToFront) => {
   res.send(sendToFront)
 }).catch((sendToFrontError) => {
   console.log(sendToFrontError)
 }) 
})


app.post('/getdishwashersSort', jsonParser, (req, res) => {
  getDishWashersSort(req.body).then((sendToFront) => {
   res.send(sendToFront)
 }).catch((sendToFrontError) => {
   console.log(sendToFrontError)
 }) 
})
app.post('/getLaundryMachinesSort', jsonParser, (req, res) => {
  getLaundryMachinesSort(req.body).then((sendToFront) => {
   res.send(sendToFront)
 }).catch((sendToFrontError) => {
   console.log(sendToFrontError)
 }) 
})

app.post('/getDryersSort', jsonParser, (req, res) => {
  getDryersSort(req.body).then((sendToFront) => {
   res.send(sendToFront)
 }).catch((sendToFrontError) => {
   console.log(sendToFrontError)
 }) 
})


app.post('/getRefrigeratorsSort', jsonParser, (req, res) => {
  getRefrigeratorsSort(req.body).then((sendToFront) => {
   res.send(sendToFront)
 }).catch((sendToFrontError) => {
   console.log(sendToFrontError)
 }) 
})

app.post('/getTelevisionsSort', jsonParser, (req, res) => {
  getTelevisionsSort(req.body).then((sendToFront) => {
   res.send(sendToFront)
 }).catch((sendToFrontError) => {
   console.log(sendToFrontError)
 }) 
})

app.post('/getStovesSort', jsonParser, (req, res) => {
  getStovesSort(req.body).then((sendToFront) => {
   res.send(sendToFront)
 }).catch((sendToFrontError) => {
   console.log(sendToFrontError)
 }) 
})

app.post('/getAirconditionersSort', jsonParser, (req, res) => {
  getAirconditionersSort(req.body).then((sendToFront) => {
   res.send(sendToFront)
 }).catch((sendToFrontError) => {
   console.log(sendToFrontError)
 }) 
})

app.post('/getOvensSort', jsonParser, (req, res) => {
  getOvensSort(req.body).then((sendToFront) => {
   res.send(sendToFront)
 }).catch((sendToFrontError) => {
   console.log(sendToFrontError)
 }) 
})

app.post('/checkCoupon', jsonParser, (req, res) => {
  checkCoupon(req.body).then((sendToFront) => {
    console.log('thats what i get')

    console.log(sendToFront)

   res.send(sendToFront)
 }).catch((sendToFrontError) => {
   console.log(sendToFrontError)
 }) 
})


app.listen(port, () => {
  console.log('lets rocknroll');
});




