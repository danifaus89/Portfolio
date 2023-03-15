import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private api = 'https://mailthis.to/';
  private myMail = 'danifaus89@hotmail.com';

  private templateID = 'template_de4yf9e';
  private serviceID = 'service_l97aipn';
  private publicKey = 'XY7KvZO7kCA1jTUo2';

  constructor() {}
}
