const dev = {
  s3: {
    REGION: "ap-southeast-1",
    BUCKET: "q-app-2-api-dev-serverlessdeploymentbucket-184vkozahsgfr"
  },
  apiGateway: {
    REGION: "ap-southeast-1",
    URL: "https://51dra56op1.execute-api.ap-southeast-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "ap-southeast-1",
    USER_POOL_ID: "ap-southeast-1_3tpEYwo7j",
    APP_CLIENT_ID: "6pj94c7tti1d8mln1184nd46hn",
    IDENTITY_POOL_ID: "ap-southeast-1:a00c603d-f663-4a8b-98a0-b750e387884d"
  },
  social: {
    FB: "2402401689852640"
  }
};

const prod = {
  s3: {
    REGION: "ap-southeast-1",
    BUCKET: "q-app-2-api-prod-attachmentsbucket-xpi5snv85j8e"
  },
  apiGateway: {
    REGION: "ap-southeast-1",
    URL: "https://9ui2y13w9b.execute-api.ap-southeast-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "ap-southeast-1",
    USER_POOL_ID: "ap-southeast-1_sCy90LhAy",
    APP_CLIENT_ID: "125ak5r06bunrho8joj20cfvos",
    IDENTITY_POOL_ID: "ap-southeast-1:426d3e0e-b17d-4435-b783-2e697b991bdb"
  },
  social: {
    FB: "2402401689852640"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};
