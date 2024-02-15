const query = {
    username:'tajal',
    usertype:'admin'
}
let FilterExpression = '';
const expressionAttributeValues = {};

for (const key in query) {
    // create filter expression
    if(!FilterExpression) FilterExpression += `${key} = :${key}`;
    else FilterExpression += ` AND ${key} = :${key}`;

    // create expression attribute values
    expressionAttributeValues[`:${key}`] = query[key]
  }

  const params = {
    TableName: 'tableName'
  };

  console.log(!!FilterExpression);
  if(!!FilterExpression) {
    params['FilterExpression'] = FilterExpression;
    params['ExpressionAttributeValues'] = expressionAttributeValues;
  }

  console.log(params);