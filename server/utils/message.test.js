
var expect = require('expect');
var {generateMessage, generateLocationMessage} = require('./message');


describe('generateMessage',()=>{
    it('should generate correct message object',()=>{
     var from ='syed';
     var text = 'testing';
     var message = generateMessage(from,text);
     expect(message.createdAt).toBeA('number');
     expect(message).toInclude({
         from,
         text
     })
    });
});

describe('generateLocationMessage',()=>{
 it('shoudl generate correct location object',()=> {
   var from ='syed';
   var latitude = 15;
   var longitude = 9;
   var url = 'https://www.google.com/maps?q=15,9';
   var message = generateLocationMessage(from,latitude,longitude);
     expect(message.createdAt).toBeA('number');
     expect(message).toInclude({from,url});
});
});