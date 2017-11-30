import request from 'request';

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
      'status': true,
      'user_id': 't1@t1.com',
      'notifications': [
        {
              'ts': '1512038729545',
              'user_id': 't1@t1.com',
              'hint_id': '1-2-3-4-7',
              'helper_user_id': 't2@t1.com',
              'helper_full_name': 't2',
              'uid': '6dcfca15-4f00-4312-ba13-da80d23699e9',
              'type': 'resolved'
          },
        {
              'ts': '1512038717013',
              'user_id': 't1@t1.com',
              'hint_id': '1-2-3-4-5',
              'helper_user_id': 'test42@test42.com',
              'helper_full_name': 'test42',
              'uid': '305d48cf-ed56-4ce1-8a1c-0df90ee533b6',
              'type': 'suggest_help'
          },
          {
              'ts': '1512038729521',
              'user_id': 't1@t1.com',
              'hint_id': '1-2-3-4-5',
              'helper_user_id': 't2@t1.com',
              'helper_full_name': 't2',
              'uid': '6dcfca15-4f00-4312-ba13-da80d25699e9',
              'type': 'suggest_help'
          }
        ]
      });
  });
};

class NotificationSrv {
  static getUserNotifications(userID) {
    return promisifiedRequest('http://localhost:8000/notification/' + userID, 'GET')
      .then( (data) => {
        return data.notifications;
      })
      .catch( ( err ) => {
        return err;
    });
  }
}

export default NotificationSrv;
