import axios from 'axios'
import cookie from 'js-cookie'

class BaseServices{
    http;
    baseUrl;
    constructor(baseUrl){
        this.http=axios.create({
            baseURL:baseUrl,
            timeout:100000
        });
        this.baseUrl=baseUrl;
        this.http.interceptors.response.use(
            (response) => response,
          async(error) => {
               const { response } = error;
               if (response) {
                  switch (response.status) {
                     case 400:
                        return response;
                     case 401:
                        //sử lý refreshToken 
                        cookie.remove('authorization')
                        const newToken= await this.http.get(`${this.baseUrl}/refresh_token`)
                        cookie.set('authorization',JSON.stringify(newToken.data))
                        return;
                     default:
                        return Promise.reject(error);
                  }
               }
               return Promise.reject(error);
            },
         );
    }
    setConfigHeader(){
        const authorization=cookie.get('authorization');
        const parseAuthorization=JSON.parse(authorization);
        const config={
            headers:{
                authorization:parseAuthorization
            },
        }
        return config;
    }
    get(url){
        return this.http.get(url,...this.setConfigHeader())
    }
    post(url,data={}){
        return this.http.post(url,data,...this.setConfigHeader())
    }
    put(url,data={}){
        return this.http.put(url,data,...this.setConfigHeader())
    }
    patch(url,data={}){
        return this.http.patch(url,data,...this.setConfigHeader())
    }
    delete(url){
        return this.http.delete(url)
    }

}
export default BaseServices