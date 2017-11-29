import request from "request";

const promisifiedRequest = (url, method, obj) => {
  return new Promise( (resolve, reject) => {
    let options = {
      url: url,
      method: method,
      body: obj
    };
    request( options, (err, res, body) => {
      if ( err || res.statusCode > 399 ) {
        reject( new Error( err ) );
      } else {
        resolve( JSON.parse( body ) );
      }
    });
  });
};

class NotificationSrv {
  static getUserNotification(userID) {
    return promisifiedRequest("http://localhost:8000/notification/" + userID, "GET")
      .then( (notifications) => {
        return notifications;
      })
      .catch( ( err ) => {
        return err;
    });
  }
}

export default NotificationSrv;
