# serverless-auth0-lambda-sample

Credits to https://github.com/jghaines/lambda-auth0-authorizer

Use in your other function's `serverless.yml`
```
          authorizer:
            arn: arn:aws:lambda:XXXXX:function:authentication-dev-authorize
            resultTtlInSeconds: 0
            identitySource: method.request.header.Authorization
            identityValidationExpression: .*   
```

