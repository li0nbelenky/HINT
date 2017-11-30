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

    // full_name
    // role
    // profile_pic
    // department
    // office_number
    // open_hints (number)
    // resolved_hints (list of hint ids)
    // score


    return resolve({
      "status": true,
      "user_id": "test@test.com",
      "notifications": [
        {
            "hint_id": "8782a85f-7828-4961-9427-7a99577e27bc",
            "ts": "1511980335786",
            "user_id": "test@test.com",
            "uid": "e241a36d-a0c5-449d-86d3-8bb7b2fea145",
            "type": "test"
        },
        {
            "hint_id": "8782a85f-7828-4961-9427-7a99577e-dima",
            "ts": "1511980335786",
            "user_id": "test@test.com",
            "uid": "e241a36d-a0c5-449d-86d3-8bb7b2fea145",
            "type": "testss"
        },
        {
            "hint_id": "8782a85f-7828-4961-9427-7a99577e27mc",
            "ts": "1511980335786",
            "user_id": "test@test.com",
            "uid": "e241a36d-a0c5-449d-86d3-8bb7b2fea145",
            "type": "test"
        },
        {
            "hint_id": "8782a85f-7828-4961-9427-7a99577e27bc",
            "ts": "1511987818728",
            "user_id": "test@test.com",
            "uid": "985465ae-8ce9-45ca-86e4-1dfad2ed1afa",
            "type": "testss"
        },
        {
            "hint_id": "8782a85f-7828-4961-9427-7a99577e27bc",
            "ts": "1511987818728",
            "user_id": "test@test.com",
            "uid": "985465ae-8ce9-45ca-86e4-1dfad2ed1afa",
            "type": "testss"
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
