const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = "mongodb+srv://db_user:BPSMz7H0PUlVUz7G@cluster0.ldkqi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

function searchLaundryMachines(object) {
    async function run(object) {
        try {
          await client.connect();
          var collection = client.db("laundrymachines").collection("laundrymachines_c")
          const machines = await collection.find(object);
          return machines.toArray()
        }
        catch(err) {
         return err
        }
      }
      return new Promise((resolve,reject) => {
        resolve(run(object))
      })  
}
exports.searchLaundryMachines = searchLaundryMachines;

function searchDryers(object) {
  async function run(object) {
      try {
        await client.connect();
        var collection = client.db("dryers").collection("dryers_c")
        const dryers = await collection.find(object);
        return dryers.toArray()
      }
      catch(err) {
        
       return err
      }
    }
    return new Promise((resolve,reject) => {
      resolve(run(object))
    })  
}
exports.searchDryers = searchDryers;

function searchRefrigerators(object) {
  async function run(object) {
      try {
        await client.connect();
        var collection = client.db("refrigerators").collection("refrigerators_c")
        const refrigerators = await collection.find(object);
        return refrigerators.toArray()
      }
      catch(err) {
       return err
      }
    }
    return new Promise((resolve,reject) => {
      resolve(run(object))
    })  
}
exports.searchRefrigerators = searchRefrigerators;

function searchDishwashers(object) {
  async function run(object) {
      try {
        await client.connect();
        var collection = client.db("dishwashers").collection("dishwashers_c")
        const dishwashers = await collection.find(object);
        return dishwashers.toArray()
      }
      catch(err) {
       return err
      }
    }
    return new Promise((resolve,reject) => {
      resolve(run(object))
    })  
}
exports.searchDishwashers = searchDishwashers;

function searchTelevisions(object) {
  async function run(object) {
      try {
        await client.connect();
        var collection = client.db("televisions").collection("televisions_c")
        const televisions = await collection.find(object)
        return televisions.toArray()
      }
      catch(err) {
       return err
      }
    }
    return new Promise((resolve,reject) => {
      resolve(run(object))
    })  
}
exports.searchTelevisions = searchTelevisions;

function searchStoves(object) {
  async function run(object) {
      try {
        await client.connect();
        var collection = client.db("stoves").collection("stoves_c")
        const stoves = await collection.find(object);
        return stoves.toArray()
      }
      catch(err) {
       return err
      }
    }
    return new Promise((resolve,reject) => {
      resolve(run(object))
    })  
}
exports.searchStoves = searchStoves;

function searchAirconditioners(object) {
  async function run(object) {
      try {
        await client.connect();
        var collection = client.db("airconditioners").collection("airconditioners_c")
        const airconditioners = await collection.find(object);
        return airconditioners.toArray()
      }
      catch(err) {
       return err
      }
    }
    return new Promise((resolve,reject) => {
      resolve(run(object))
    })  
}
exports.searchAirconditioners = searchAirconditioners;

function searchOvens(object) {
  async function run(object) {
      try {
        await client.connect();
        var collection = client.db("ovens").collection("ovens_c")
        const ovens = await collection.find(object);
        return ovens.toArray()
      }
      catch(err) {
       return err
      }
    }
    return new Promise((resolve,reject) => {
      resolve(run(object))
    })  
}
exports.searchOvens = searchOvens;

function searchStoves(object) {
  async function run(object) {
      try {
        await client.connect();
        var collection = client.db("stoves").collection("stoves_c")
        const stoves = await collection.find(object);
        return stoves.toArray()
      }
      catch(err) {
       return err
      }
    }
    return new Promise((resolve,reject) => {
      resolve(run(object))
    })  
}
exports.searchStoves = searchStoves;

function searchAirconditioners(object) {
  async function run(object) {
      try {
        await client.connect();
        var collection = client.db("airconditioners").collection("airconditioners_c")
        const airconditioners = await collection.find(object);
        return airconditioners.toArray()
      }
      catch(err) {
       return err
      }
    }
    return new Promise((resolve,reject) => {
      resolve(run(object))
    })  
}
exports.searchAirconditioners = searchAirconditioners;

function searchByString(object) {
  async function run(object) {
      try {
        await client.connect();
        var collection1 = client.db("airconditioners").collection("airconditioners_c")
        var collection2 = client.db("dishwashers").collection("dishwashers_c")
        var collection3 = client.db("laundrymachines").collection("laundrymachines_c")
        var collection4 = client.db("ovens").collection("ovens_c")
        var collection5 = client.db("refrigerators").collection("refrigerators_c")
        var collection6 = client.db("stoves").collection("stoves_c")
        var collection7 = client.db("televisions").collection("televisions_c")
        var collection8 = client.db("dryers").collection("dryers_c")
        const one = await collection1.find({brand : object}).toArray()
        const two = await collection2.find({brand : object}).toArray()
        const three = await collection3.find({brand : object}).toArray()
        const four = await collection4.find({brand : object}).toArray()
        const five = await collection5.find({brand : object}).toArray()
        const six = await collection6.find({brand : object}).toArray()
        const seven = await collection7.find({brand : object}).toArray()
        const eight = await collection8.find({brand : object}).toArray()
        const temp=[];
        temp.push(one)
        temp.push(two)
        temp.push(three)
        temp.push(four)
        temp.push(five)
        temp.push(six)
        temp.push(seven)
        temp.push(eight)
        const found=[]
        for( i=0;i<8;i++)
        {
          for( j=0;j<(temp[i].length);j++)
             found.push(temp[i][j]);   
        }
        return found
      }
      catch(err) {
       return err
      }
    }
    return new Promise((resolve,reject) => {
      resolve(run(object))
    })  
}
exports.searchByString = searchByString

function updateUser(data) {
  async function run() {
    try {
      await client.connect();
      var collection1 = client.db("users").collection("users_c")
      const one = await collection1.updateOne({email: data.user.email} ,   { $push: { wishlist: data.item } }, { upsert: true })
    }
    catch(err) {
     return err
    }
  }
  return new Promise((resolve,reject) => {
    resolve(run())
  }) 
}
exports.updateUser = updateUser

function searchUser(e_string,pw_string) {
  async function run(e_string,pw_string) {
      try {
        await client.connect();
        var collection1 = client.db("users").collection("users_c")
        const one = await collection1.findOne({email:e_string , password: pw_string})
        if(one ){
            return one
          }
        else {
          return null
        }
      }
      catch(err) {
       return err
      }
    }
    return new Promise((resolve,reject) => {
      resolve(run(e_string,pw_string))
    })  
}
exports.searchUser = searchUser


function registerUser(e_string,pw_string,admin_b) {
  async function run(e_string,pw_string,admin_b) {
      try {
        await client.connect();
        var collection1 = client.db("users").collection("users_c")
          const one = await collection1.findOne({email:e_string})
        if(one == null)  ////email hasnt found -> countine with register
        {
          if(pw_string.length <8) return 'password must be at least 8 chars'
          else{
            collection1.insertOne({
              email : e_string,
              password : pw_string,
              wishlist:[],
              cart:[],
              addres :[
                Array[0]="Country",
                Array[1]="City",
                Array[2]="Zip",
                Array[3]="Street",
                Array[4]="No.Street",
                Array[5]="No.Apartment",
                Array[6]="Phone Number"
              ],
               payment:[
                Array[0]="Card Number",
                Array[1]="Expiration Date",
                Array[2]="CVC"
              ], 
              orders:[]
              ,
              isAdmin : admin_b
            })
            return true
          }
        }
        else
        {
          return 'email already exists'
        }
      }
      catch(err) {
       return err
      }
    }
    return new Promise((resolve,reject) => {
      resolve(run(e_string,pw_string,admin_b))
    })  
}
exports.registerUser = registerUser

function getwishList(data) {
  async function run() {
    try {
      await client.connect();
      var collection1 = client.db("users").collection("users_c")
      const one = await collection1.findOne({email: data.user.email} )
      return one
    }
    catch(err) {
     return err
    }
  }
  return new Promise((resolve,reject) => {
    resolve(run(data))
  }) 
}
exports.getwishList = getwishList;

function getCart(data) {
  async function run() {
    try {
      await client.connect();
      var collection1 = client.db("users").collection("users_c")
      const one = await collection1.findOne({email: data.user.email} )
      return one
    }
    catch(err) {
     return err
    }
  }
  return new Promise((resolve,reject) => {
    resolve(run(data))
  }) 
}
exports.getCart = getCart;

function updateUserCart(data) {
  async function run() {
    try {
      await client.connect();
      var collection1 = client.db("users").collection("users_c")
      const one = await collection1.updateOne({email: data.user.email} ,   { $push: { cart: data.item } }, { upsert: true })
    }
    catch(err) {
     return err
    }
  }
  return new Promise((resolve,reject) => {
    resolve(run())
  }) 
}
exports.updateUserCart = updateUserCart

function removeItemFromeUserCart(data) {
  const remove=data.item
  async function run() {
    try {
      await client.connect();
      var collection1 = client.db("users").collection("users_c")
      const one = await collection1.updateOne({email: data.user.email} ,   { $pull: { cart: data.item } })
      return true
    }
    catch(err) {
     return err
    }
  }
  return new Promise((resolve,reject) => {
    resolve(run())
  }) 
}
exports.removeItemFromeUserCart = removeItemFromeUserCart

function removeItemFromeUserwishlist(data) {
  const remove=data.item
  async function run() {
    try {
      await client.connect();
      var collection1 = client.db("users").collection("users_c")
        const one = await collection1.updateOne({email: data.user.email} ,   { $pull: { wishlist: data.item } })
      return true
    }
    catch(err) {
     return err
    }
  }
  return new Promise((resolve,reject) => {
    resolve(run())
  }) 
}
exports.removeItemFromeUserwishlist = removeItemFromeUserwishlist


function returnUser(data) {
  async function run() {
      try {
        await client.connect();
        const collection1 = client.db("users").collection("users_c")
        const one = await collection1.findOne({email:data.email})
      if(one) return one 
        else return 'bad'
       
      }
      catch(err) {
       return err
      }
    }
    return new Promise((resolve,reject) => {
      resolve(run())
    })  
}
exports.returnUser = returnUser

function addToOrdersFromWishList(data) {
  async function run() {
    try {
      await client.connect()
      //  connect to all DB's products
      const airconditioners = client.db("airconditioners").collection("airconditioners_c")
      const dishwashers = client.db("dishwashers").collection("dishwashers_c")
      const dryers = client.db("dryers").collection("dryers_c")
      const laundrymachines = client.db("laundrymachines").collection("laundrymachines_c")
      const ovens = client.db("ovens").collection("ovens_c")
      const refrigerators = client.db("refrigerators").collection("refrigerators_c")
      const stoves = client.db("stoves").collection("stoves_c")
      const televisions = client.db("televisions").collection("televisions_c")
      const collection1 = client.db("users").collection("users_c")
      ////// move all items from wishlist to orders ///////
      const one = await collection1.updateOne({email: data.user.email},{ $push: { orders :{$each: data.user.wishlist}} })
      ////// update all DB's quantity of items from wishlist /////
      const updateItems= data.user.wishlist
      //  search each item on DB's by catalog and update quantity 
      for(var i=0 ; i < updateItems.length; ++i ){
        switch(updateItems[i].catalog) {
          case 'airconditioners':
            await airconditioners.updateOne({_id: ObjectId(updateItems[i]._id)}, { $inc: { quantity: -1 } });
            break;

          case 'dishwashers':
  
            await dishwashers.updateOne({_id: ObjectId(updateItems[i]._id)}, { $inc: { quantity: -1 } });
            break;

          case 'dryers':
            dryers.findOneAndUpdate({_id: ObjectId(updateItems[i]._id)}, { $inc: { quantity: -1 } });
            break;

          case 'laundrymachines':
            await laundrymachines.updateOne({_id: ObjectId(updateItems[i]._id)}, { $inc: { quantity: -1 } });
            break;

          case 'ovens':
            await ovens.updateOne({_id: ObjectId(updateItems[i]._id)}, { $inc: { quantity: -1 } });
            break;

          case 'refrigerators':
            await refrigerators.updateOne({_id: ObjectId(updateItems[i]._id)}, { $inc: { quantity: -1 } });
            break;

          case 'stoves':
            await stoves.updateOne({_id: ObjectId(updateItems[i]._id)}, { $inc: { quantity: -1 } });
            break;
            
          case 'televisions':
            await televisions.updateOne({_id: ObjectId(updateItems[i]._id)}, { $inc: { quantity: -1 } });
            break;
              
          default:
            // nothing to do
        }
       }
      
      /////////// after update quantity send to Admin items

      // console.log('im after update')


      ///////////remove all wishlist items

      console.log('remvoe wishlist')
      await collection1.updateMany({email: data.user.email}, { $set : {wishlist: [] }} , {multi:true});



      return ' i added'
    }
    catch(err) {
     return err
    }
  }
  return new Promise((resolve,reject) => {
    resolve(run())
  }) 
}
exports.addToOrdersFromWishList = addToOrdersFromWishList


function checkItemsQuantity(email_data) {
  async function run() {
    try {
      await client.connect();
      const airconditioners = client.db("airconditioners").collection("airconditioners_c")
      const dishwashers = client.db("dishwashers").collection("dishwashers_c")
      const dryers = client.db("dryers").collection("dryers_c")
      const laundrymachines = client.db("laundrymachines").collection("laundrymachines_c")
      const ovens = client.db("ovens").collection("ovens_c")
      const refrigerators = client.db("refrigerators").collection("refrigerators_c")
      const stoves = client.db("stoves").collection("stoves_c")
      const televisions = client.db("televisions").collection("televisions_c")

      const users = client.db("users").collection("users_c")
      const USER = await users.findOne({email:email_data.email})


      console.log('ItemsToCheck')
      console.log(USER.wishlist.length)

      //////////////////check quantity of items
      for(var i=0 ; i < USER.wishlist.length; ++i ){

        switch(USER.wishlist[i].catalog) {
          case 'airconditioners':
            const item=await airconditioners.findOne({_id: ObjectId(USER.wishlist[i]._id)})
            if(item.quantity<=0) return USER.wishlist[i].model +' ' +USER.wishlist[i].brand+' Product not available'

            break;

          case 'dishwashers':
            const item1=await dishwashers.findOne({_id: ObjectId(USER.wishlist[i]._id)})
            if(item1.quantity<=0) return USER.wishlist[i].model +' ' +USER.wishlist[i].brand+' Product not available'
            break;

          case 'dryers':
            const item2=await dryers.findOne({_id: ObjectId(USER.wishlist[i]._id)})
            if(item2.quantity<=0) return USER.wishlist[i].model +' ' +USER.wishlist[i].brand+' Product not available'
            break;

          case 'laundrymachines':
            const item3=await laundrymachines.findOne({_id: ObjectId(USER.wishlist[i]._id)})
            if(item3.quantity<=0) return USER.wishlist[i].model +' ' +USER.wishlist[i].brand+' Product not available'
            break;

          case 'ovens':
            const item4=await ovens.findOne({_id: ObjectId(USER.wishlist[i]._id)})
            if(item4.quantity<=0) return USER.wishlist[i].model +' ' +USER.wishlist[i].brand+' Product not available'
            break;

          case 'refrigerators':
            const item5=await refrigerators.findOne({_id: ObjectId(USER.wishlist[i]._id)})
            if(item5.quantity<=0) return USER.wishlist[i].model +' ' +USER.wishlist[i].brand+' Product not available'
            break;

          case 'stoves':
            const item6= await stoves.findOne({_id: ObjectId(USER.wishlist[i]._id)})
            if(item6.quantity<=0) return USER.wishlist[i].model +' ' +USER.wishlist[i].brand+' Product not available'
            break;
            
          case 'televisions':
            const item7=await televisions.findOne({_id: ObjectId(USER.wishlist[i]._id)})
            if(item7.quantity<=0) return USER.wishlist[i].model +' ' +USER.wishlist[i].brand+' Product not available'
            break;
              
          default:
            // nothing to do
        }
      }
    return 'All Product available'
  }
    catch(err) {
     return err
    }
  }
  return new Promise((resolve,reject) => {
    resolve(run())
  }) 
}
exports.checkItemsQuantity = checkItemsQuantity


function checkItemsQuantityCart(email_data) {
  async function run() {
    try {
      await client.connect();
      const airconditioners = client.db("airconditioners").collection("airconditioners_c")
      const dishwashers = client.db("dishwashers").collection("dishwashers_c")
      const dryers = client.db("dryers").collection("dryers_c")
      const laundrymachines = client.db("laundrymachines").collection("laundrymachines_c")
      const ovens = client.db("ovens").collection("ovens_c")
      const refrigerators = client.db("refrigerators").collection("refrigerators_c")
      const stoves = client.db("stoves").collection("stoves_c")
      const televisions = client.db("televisions").collection("televisions_c")

      const users = client.db("users").collection("users_c")
      const USER = await users.findOne({email:email_data.email})


      console.log('ItemsToCheck')
      console.log(USER.cart.length)

      //////////////////check quantity of items
      for(var i=0 ; i < USER.cart.length; ++i ){

        switch(USER.cart[i].catalog) {
          case 'airconditioners':
            const item=await airconditioners.findOne({_id: ObjectId(USER.cart[i]._id)})
            if(item.quantity<=0) return USER.cart[i].model +' ' +USER.cart[i].brand+' Product not available'

            break;

          case 'dishwashers':
            const item1=await dishwashers.findOne({_id: ObjectId(USER.cart[i]._id)})
            if(item1.quantity<=0) return USER.cart[i].model +' ' +USER.cart[i].brand+' Product not available'
            break;

          case 'dryers':
            const item2=await dryers.findOne({_id: ObjectId(USER.cart[i]._id)})
            if(item2.quantity<=0) return USER.cart[i].model +' ' +USER.cart[i].brand+' Product not available'
            break;

          case 'laundrymachines':
            const item3=await laundrymachines.findOne({_id: ObjectId(USER.cart[i]._id)})
            if(item3.quantity<=0) return USER.cart[i].model +' ' +USER.cart[i].brand+' Product not available'
            break;

          case 'ovens':
            const item4=await ovens.findOne({_id: ObjectId(USER.cart[i]._id)})
            if(item4.quantity<=0) return USER.cart[i].model +' ' +USER.cart[i].brand+' Product not available'
            break;

          case 'refrigerators':
            const item5=await refrigerators.findOne({_id: ObjectId(USER.cart[i]._id)})
            if(item5.quantity<=0) return USER.cart[i].model +' ' +USER.cart[i].brand+' Product not available'
            break;

          case 'stoves':
            const item6= await stoves.findOne({_id: ObjectId(USER.cart[i]._id)})
            if(item6.quantity<=0) return USER.cart[i].model +' ' +USER.cart[i].brand+' Product not available'
            break;
            
          case 'televisions':
            const item7=await televisions.findOne({_id: ObjectId(USER.cart[i]._id)})
            if(item7.quantity<=0) return USER.cart[i].model +' ' +USER.cart[i].brand+' Product not available'
            break;
              
          default:
            // nothing to do
        }
      }
    return 'All Product available'
  }
    catch(err) {
     return err
    }
  }
  return new Promise((resolve,reject) => {
    resolve(run())
  }) 
}
exports.checkItemsQuantityCart = checkItemsQuantityCart



function addToOrdersFromCart(data) {
  async function run() {
    try {
      await client.connect()
      //  connect to all DB's products
      const airconditioners = client.db("airconditioners").collection("airconditioners_c")
      const dishwashers = client.db("dishwashers").collection("dishwashers_c")
      const dryers = client.db("dryers").collection("dryers_c")
      const laundrymachines = client.db("laundrymachines").collection("laundrymachines_c")
      const ovens = client.db("ovens").collection("ovens_c")
      const refrigerators = client.db("refrigerators").collection("refrigerators_c")
      const stoves = client.db("stoves").collection("stoves_c")
      const televisions = client.db("televisions").collection("televisions_c")
      const collection1 = client.db("users").collection("users_c")
      ////// move all items from wishlist to orders ///////
      const one = await collection1.updateOne({email: data.user.email},{ $push: { orders :{$each: data.user.cart}} })
      ////// update all DB's quantity of items from cart /////
      const updateItems= data.user.cart
      //  search each item on DB's by catalog and update quantity 
      for(var i=0 ; i < updateItems.length; ++i ){
        switch(updateItems[i].catalog) {
          case 'airconditioners':
            await airconditioners.updateOne({_id: ObjectId(updateItems[i]._id)}, { $inc: { quantity: -1 } });
            break;

          case 'dishwashers':
  
            await dishwashers.updateOne({_id: ObjectId(updateItems[i]._id)}, { $inc: { quantity: -1 } });
            break;

          case 'dryers':
            dryers.findOneAndUpdate({_id: ObjectId(updateItems[i]._id)}, { $inc: { quantity: -1 } });
            break;

          case 'laundrymachines':
            await laundrymachines.updateOne({_id: ObjectId(updateItems[i]._id)}, { $inc: { quantity: -1 } });
            break;

          case 'ovens':
            await ovens.updateOne({_id: ObjectId(updateItems[i]._id)}, { $inc: { quantity: -1 } });
            break;

          case 'refrigerators':
            await refrigerators.updateOne({_id: ObjectId(updateItems[i]._id)}, { $inc: { quantity: -1 } });
            break;

          case 'stoves':
            await stoves.updateOne({_id: ObjectId(updateItems[i]._id)}, { $inc: { quantity: -1 } });
            break;
            
          case 'televisions':
            await televisions.updateOne({_id: ObjectId(updateItems[i]._id)}, { $inc: { quantity: -1 } });
            break;
              
          default:
            // nothing to do
        }
       }
      
      /////////// after update quantity send to Admin items

      // console.log('im after update')


      ///////////remove all cart items

      console.log('remvoe cart')
      await collection1.updateMany({email: data.user.email}, { $set : {cart: [] }} , {multi:true});



      return ' i added'
    }
    catch(err) {
     return err
    }
  }
  return new Promise((resolve,reject) => {
    resolve(run())
  }) 
}
exports.addToOrdersFromCart = addToOrdersFromCart


function EditAdressUser(data) {
   async function run() {
    try {
    await client.connect();
    const collection1 = client.db("users").collection("users_c")
    collection1.updateMany({
      "email": data.email.toString()
    },
    {
      $set: {
        "addres.0": data.country,
        "addres.1": data.city,
        "addres.2": data.zip,
        "addres.3": data.street,
        "addres.4": data.nostreet,
        "addres.5": data.noaprtment,
        "addres.6": data.phonenumber
      }
    })
    return true
    }
    catch(err) {
     return err
    }
  }
  return new Promise((resolve,reject) => {
    resolve(run())
  }) 
}
exports.EditAdressUser = EditAdressUser




function EditPayment(data) {
  async function run() {
   try {
   await client.connect();
   const collection1 = client.db("users").collection("users_c")
   collection1.updateMany({
     "email": data.email.toString()
   },
   {
     $set: {
       "payment.0": data.card_number,
       "payment.1": data.exp_date,
       "payment.2": data.cvc,
     }
   })
   return true
   }
   catch(err) {
    return err
   }
 }
 return new Promise((resolve,reject) => {
   resolve(run())
 }) 
}
exports.EditPayment = EditPayment
