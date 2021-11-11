const BitlyApi = require("@openapitools/openapi-generator-cli");
//initialize the api client
let apiClient = BitlyApi.ApiClient.instance;
let bearerAuth = apiClient.authentications["bearerAuth"];
bearerAuth.accessToken = "{ACCESS_TOKEN}";

//build the request
let apiInstance = new BitlyApi.BitlinksApi();
let shorten = new BitlyApi.Shorten();
shorten.domain = "arunkumar";
shorten.group_guid = "xyz";
shorten.long_url = "https://www.google.com";

apiInstance.createBitlink(shorten, (error, data, response) => {
  if (error) {
    //handle error
    console.error(error);
  } else {
    console.log("SUCCESS! Link" + data);
  }
});
