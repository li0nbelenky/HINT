import request from 'request';
import config from './config';


const myArray = [{title: 'Arie Belenky', subtitle: 'Software Developer'},
    {title: 'Zigi Bigule', subtitle: 'Software Engineer'}];


const promisifiedRequest = (url, method, obj)=>{
    return new Promise((resolve, reject)=>{
        let options = {
            url: url,
            method: method,
            body: obj
        };
        request(options, (err, res, body)=>{
            if (err || res.statusCode > 399){
                    reject(new Error(err))
                } else {
                    resolve(JSON.parse(body))
                }
            })
        })
};

class FeedConsumer{
    static getFeedItems(){
        return promisifiedRequest(`http://${config.WEBSERVER}:8000/feed`, 'GET').then((feedItems)=>{
            return feedItems
        }).catch((err)=>{
            return err
        })
    }
}

export default FeedConsumer;
