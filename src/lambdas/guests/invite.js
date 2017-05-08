import Guest from '../../models/guest';

module.exports.handler = (event, context, callback) => {
  let name = event.pathParameters.name;
  let age = JSON.parse(event.body).age;
  let newGuest = new Guest(name, age);

  newGuest.save().then(savedGuest => {
    console.log(`Saved guest: ${savedGuest.toString()}`);
    callback(null, {
      statusCode: 201,
      body: JSON.stringify(savedGuest)
    });
  });
};
