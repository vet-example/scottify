import Guest from '../../src/models/guest';

module.exports.handler = (event, context, callback) => {
  Guest.getByName(event.pathParameters.name).then(marco => {
    console.log(`Found guest: ${marco.toString()}`);
    callback(null, {
      statusCode: 200,
      body: JSON.stringify(marco)
    });
  });
};
