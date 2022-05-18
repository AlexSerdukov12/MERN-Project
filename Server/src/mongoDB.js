const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://db_user:BPSMz7H0PUlVUz7G@cluster0.ldkqi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });




function searchLaundryMachines(object) {
    async function run(object) {
        try {
          await client.connect();
          var collection = client.db("laundrymachines").collection("laundrymachines_c")
          // Query for a movie that has the title 'The Room'
    
    
          const machines = await collection.find(object);
          // since this method returns the matched document, not a cursor, print it directly
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
        console.log('sucess to log in')
        var collection = client.db("dryers").collection("dryers_c")
        // Query for a movie that has the title 'The Room'
  
  
        const dryers = await collection.find(object);
        // since this method returns the matched document, not a cursor, print it directly
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
        console.log("im inside mongo db search for getrefrigerators")
        var collection = client.db("refrigerators").collection("refrigerators_c")
        // Query for a movie that has the title 'The Room'
  
  
        const refrigerators = await collection.find(object);
        // since this method returns the matched document, not a cursor, print it directly
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
        console.log("im inside mongo db search for dishwashers")
        var collection = client.db("dishwashers").collection("dishwashers_c")
        // Query for a movie that has the title 'The Room'
  
  
        const dishwashers = await collection.find(object);
        // since this method returns the matched document, not a cursor, print it directly
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
        console.log("im inside mongo db search for televisions")
        var collection = client.db("televisions").collection("televisions_c")
        // Query for a movie that has the title 'The Room'
  
  
        const televisions = await collection.find(object);
        // since this method returns the matched document, not a cursor, print it directly
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
        console.log("im inside mongo db search for televisions")
        var collection = client.db("stoves").collection("stoves_c")
        // Query for a movie that has the title 'The Room'
  
  
        const stoves = await collection.find(object);
        // since this method returns the matched document, not a cursor, print it directly
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
        console.log("im inside mongo db search for televisions")
        var collection = client.db("airconditioners").collection("airconditioners_c")
        // Query for a movie that has the title 'The Room'
  
  
        const airconditioners = await collection.find(object);
        // since this method returns the matched document, not a cursor, print it directly
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
        console.log("im inside mongo db search for ovens")
        var collection = client.db("ovens").collection("ovens_c")
        // Query for a movie that has the title 'The Room'
  
  
        const ovens = await collection.find(object);
        // since this method returns the matched document, not a cursor, print it directly
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
        console.log("im inside mongo db search for televisions")
        var collection = client.db("stoves").collection("stoves_c")
        // Query for a movie that has the title 'The Room'
  
  
        const stoves = await collection.find(object);
        // since this method returns the matched document, not a cursor, print it directly
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
        console.log("im inside mongo db search for televisions")
        var collection = client.db("airconditioners").collection("airconditioners_c")
        // Query for a movie that has the title 'The Room'
  
  
        const airconditioners = await collection.find(object);
        // since this method returns the matched document, not a cursor, print it directly
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
        console.log('im searching on db for : ')
        console.log(object)
        var collection1 = client.db("airconditioners").collection("airconditioners_c")
        var collection2 = client.db("dishwashers").collection("dishwashers_c")
        var collection3 = client.db("laundrymachines").collection("laundrymachines_c")
        var collection4 = client.db("ovens").collection("ovens_c")
        var collection5 = client.db("refrigerators").collection("refrigerators_c")
        var collection6 = client.db("stoves").collection("stoves_c")
        var collection7 = client.db("televisions").collection("televisions_c")
        var collection8 = client.db("dryers").collection("dryers_c")
        // Query for a movie that has the title 'The Room'
        const one = await collection1.find({brand : object})

        const two = await collection2.find({brand : object})

        const three = await collection3.find({brand : object})

        const four = await collection4.find({brand : object})

        const five = await collection5.find({brand : object})

        const six = await collection6.find({brand : object})

        const seven = await collection7.find({brand : object})

        const eight = await collection8.find({brand : object})


        // since this method returns the matched document, not a cursor, print it directly
        return (one,two,three,four,five,six,seven,eight).toArray()
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





function searchUser(e_string,pw_string) {
  async function run(e_string,pw_string) {
      try {
        await client.connect();
        console.log('im searching on db for : ')
        console.log(e_string,pw_string)
        var collection1 = client.db("users").collection("users_c")

        // Query for a movie that has the title 'The Room'
        const one = await collection1.findOne({email:e_string})

        console.log('here what i found')
        console.log(one)
        console.log('******************')

        if(one != null){
          console.log('******************')
          console.log(one)
          console.log('******************')

          const two = await collection1.findOne({password:pw_string})
          if(two){
            console.log(two)
            console.log(' im returning true')
            return true
          }
          else    
          {
            return false
          }    
          
        }
        else {
          console.log(' im returning false')
          return false
        }
        // since this method returns the matched document, not a cursor, print it directly
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


function registerUser(e_string,pw_string) {
  async function run(e_string,pw_string) {
      try {
        await client.connect();
        console.log('im searching on db for : ')
        console.log(e_string,pw_string)
        var collection1 = client.db("users").collection("users_c")

        // Query for a movie that has the title 'The Room'
        const one = await collection1.findOne({email:e_string})
        if(one == null)  ////email hasnt found -> countine with register
        {
          if(pw_string.length <8) return 'password must be at least 8 chars'
          else{
            
            console.log('im trying')
            collection1.insertOne({
              email : e_string,
              password : pw_string
            })
            return true
          }
        }
        else
        {
          return 'email has exist '
        }
        // since this method returns the matched document, not a cursor, print it directly
      }
      catch(err) {
       return err
      }
    }
    return new Promise((resolve,reject) => {
      resolve(run(e_string,pw_string))
    })  
}
exports.registerUser = registerUser

