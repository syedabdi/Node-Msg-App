

//addUser(id, name, room)
//removeUser(id)
//getUserList(room)

class Users{
  constructor(){
      this.users = [];
  }

  addUser(id,name,room){
    var user = {id,name,room};
    this.users.push(user);
    return user;
  }

  removeUser(id){
   var user = this.getUsers(id);

   if(user){
       this.users = this.users.filter((user)=> user.id !==id);
   }
   return user;
  }

  getUsers(id){
return this.users.filter((user)=>user.id===id)[0];
  }

  getUserList(room){
      var users = this.users.filter((user)=> user.room === room);
      var nameArray = users.map((user)=>user.name);
      return nameArray;
    }
}


 module.exports = {Users};