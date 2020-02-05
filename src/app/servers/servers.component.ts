import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  serverName:String ='Server Name';
  serverStatus:String='';
  allowNewServer:Boolean=false;
  


  constructor() {

    setTimeout(()=>{this.allowNewServer=true },5000)
   }

  ngOnInit() {
  }

}