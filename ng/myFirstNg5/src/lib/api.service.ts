import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import * as Cookie from 'js-cookie';
import * as Md5 from 'md5';

@Injectable()
export class ApiSercive {
  private config: string = '//api.test.pajkdc.com/m.api';

  constructor(
    private http: HttpClient
  ) { }

  /**
   * 服务加密函数
   * @param data
   * @param withUserAuth
   * @returns {{}}
   * @private
   */
  _encrypt(data, withUserAuth) {
    let baseObj = {
      '_aid': 0,
      //'_vc': Globals.VERSION_CODE,
      '_sm': 'md5'
    };

    let mergeObj = {};
    Object.assign(mergeObj, baseObj, data);

    let s = '',
      params = '?',
      keys = [];

    for (let k in mergeObj) {
      keys.push(k);
    }

    keys.sort();

    for (let i = 0; i < keys.length; i++) {
      if (typeof mergeObj[keys[i]] !== 'undefined') {
        let k = keys[i],
          v = typeof mergeObj[k] === 'object'
            ? JSON.stringify(mergeObj[k])
            : mergeObj[k];
        s += k + '=' + v;
        params += encodeURIComponent(k) + '=' + encodeURIComponent(v) + '&';
      }
    }

    if (withUserAuth) {
      let c = Cookie.get('_wtk');
      c && (s += c);
    } else {
      s += 'jk.pingan.com';
    }

    params += '_sig=' + Md5(s);

    return params;
  }

  request(data, withUserAuth?: boolean, settings?: any): Observable<any> {
    withUserAuth = !!withUserAuth;
    let params = this._encrypt(data, withUserAuth);
    settings

    let config = {};
    config['credentials'] = 'include';

    return this.http.get(this.config + params, config)
      .map(res => {
        if (res['stat'].code === 0) {
          return res['content'][0]
        } else {
          throw Observable.throw(res);
        }
      })
  }
}
