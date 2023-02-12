import { Injectable } from '@angular/core';


const OSS = require('ali-oss');
const client = new OSS({
  accessKeyId: 'LTAI5t6pXAoVfj5GQb14SPz9',
  accessKeySecret: '9IcfddhiP4C79lbcdYcHTylTooPusF',
  endpoint: 'oss-ap-southeast-3.aliyuncs.com',
  bucket: 'pett-avigilon-cctv',
});



@Injectable({
  providedIn: 'root'
})
export class OssService {

  constructor() {

  }

  async getUrl(imageName: string){
    try {
      const imageUrl = await client.signatureUrl(imageName);
      return imageUrl;
    } catch (err) {
      console.log(err);
    }
  }

  

  async getImage(imageName: string) {
    try {
      const image = await client.list({prefix: imageName});
      return image;
    } catch (err) {
      console.log(err);
    }
  }

  async listObjects(prefix: string) {
    let total = 0;
    let marker;
    let isTruncated = true;
    while (isTruncated) {
      const objects:any = await client.list({ prefix: prefix, marker });
      total += objects.objects.length;
      marker = objects.nextMarker;
      isTruncated = objects.isTruncated;
    }
    return total;
  }

  async listObjectsPagination(prefix: string, marker: string, maxKeys: number) {
    try {
      const objects = await client.list({ 'prefix': prefix, 'marker': marker, 'max-keys': maxKeys  });
      return objects;
    } catch (err) {
      console.log(err);
    }
  }


}
