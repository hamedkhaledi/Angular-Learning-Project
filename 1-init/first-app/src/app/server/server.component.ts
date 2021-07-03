import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  serverId = 10;
  serverStatus = 'offline';

  getServerStatus() {
    return this.serverStatus;
  }
}
