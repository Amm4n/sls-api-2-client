export default {
  
  MAX_ATTACHMENT_SIZE: 5000000,

  s3: {
    REGION: "ap-southeast-1",
    BUCKET: "q-app-uploads-amn"
  },
  apiGateway: {
    REGION: "ap-southeast-1",
    URL: "https://jtl01q9k2i.execute-api.ap-southeast-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "ap-southeast-1",
    USER_POOL_ID: "ap-southeast-1_m6GtyycLJ",
    APP_CLIENT_ID: "631nv7jblq08pejsdei00p4cgc",
    IDENTITY_POOL_ID: "ap-southeast-1:63b1f47a-1504-45a1-87ca-cb9346eb9147"
  },
  social: {
    FB: "2402401689852640"
  }
};
