const expect = require('expect');

const {Users} = require('./users.js');



describe('Users',()=>{

    beforeEach(()=>{
      users = new Users();
      users.users = [{
        id:'1',
        name:'syed',
        room:'test'
      },
      {
        id:'2',
        name:'syed2',
        room:'test'
      },
      {
        id:'3',
        name:'syed3',
        room:'test1'
      }
    
    ];
    });

 it('should add user',() =>{
   var users = new Users();
   var user ={
       id:'123',
       name:'syed',
       room:'test'
   };
   var resUser = users.addUser(user.id,user.name,user.room);
   expect(users.users).toEqual([user]);
 });

 it('should remove user',()=>{
  var userid ='1';
  var user = users.removeUser(userid);
  expect(user.id).toBe(userid);
  expect(users.users.length).toEqual(2);
 });

 it('should return name of test room',()=>{
  var userList = users.getUserList('test');
  expect(userList).toEqual(['syed','syed2']);
 });
});