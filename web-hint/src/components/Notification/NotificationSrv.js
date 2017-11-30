import request from "request";

const promisifiedRequest = (url, method, obj) => {
  return new Promise( (resolve, reject) => {
    let options = {
      url: url,
      method: method,
      body: obj
    };
    // request( options, (err, res, body) => {
    //   if ( err || res.statusCode > 399 ) {
    //     reject( new Error( err ) );
    //   } else {
    //     resolve( JSON.parse( body ) );
    //   }
    // });

    return resolve({
      "status": true,
      "user_id": "test@test.com",
      "notifications": [
        {
            "hint_id": "8782a85f-7828-4961-9427-7a99577e27bc",
            "ts": "1511980335786",
            "user_id": "gil@test.com",
            "uid": "e241a36d-a0c5-449d-86d3-8bb7b2fea145",
            "type": "test",
            "description": "Gil wants to help you"
        },
        {
            "hint_id": "8782a85f-7828-4961-9427-7a99577e-dima",
            "ts": "1511980335786",
            "user_id": "lior@test.com",
            "uid": "e241a36d-a0c5-449d-86d3-8bb7b2fea145",
            "type": "testss",
            "description": "A hint you followed was resolved"
        },
        {
            "hint_id": "8782a85f-7828-4961-9427-7a99577e27mc",
            "ts": "1511980335786",
            "user_id": "shany@test.com",
            "uid": "e241a36d-a0c5-449d-86d3-8bb7b2fea145",
            "type": "test",
            "description": "Shany resolved your hint"
        }
      ]
    });

  });
};

class NotificationSrv {
  static getUserNotifications(userID) {
    return promisifiedRequest("http://localhost:8000/notification/" + userID, "GET")
      .then( (data) => {
        return data.notifications;
      })
      .catch( ( err ) => {
        return err;
    });
  }
}

export default NotificationSrv;
