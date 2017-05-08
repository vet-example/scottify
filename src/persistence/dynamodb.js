import AWS from 'aws-sdk';

let dynamoDb;

if (process.env.IS_OFFLINE) {
  dynamoDb = require('serverless-dynamodb-client').doc;
} else {
  dynamoDb = new AWS.DynamoDB.DocumentClient();
}

export default class DynamoDb {
  constructor(tableName) {
    this.tableName = tableName;
  }

  save(obj) {
    let params = {
      TableName: this.tableName,
      Item: obj
    };

    return new Promise((resolve, reject) => {
      dynamoDb.put(params, err => {
        if (err) {
          reject(err);
        }

        resolve(params.Item);
      });
    });
  }

  getByKeyValue(key, value) {
    let params = {
      TableName: this.tableName,
      KeyConditionExpression: '#key = :value',
      ExpressionAttributeNames: {
        '#key': key
      },
      ExpressionAttributeValues: {
        ':value': value
      }
    };

    console.log(params);

    return new Promise((resolve, reject) => {
      dynamoDb.query(params, (err, result) => {
        if (err) {
          reject(err);
        }

        resolve(result);
      });
    });
  }
}
