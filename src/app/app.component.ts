import { Component } from '@angular/core';
import {MatSidenav,MatDrawer}from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  serverName:any
  sidenavWidth:number

  count:number
  containers=[]
  blocks=[]
  alternate=[]
  results: string[]
  searchTerm: string;
  title = 'automate';
  public now: Date = new Date();

  remove(){
    this.serverName=[]
    this.blocks.pop()

    console.log(this.blocks[(this.blocks.length)-1])
    localStorage.removeItem(this.blocks.length.toString());
  }
  public setSidenav(sidenav: MatDrawer) {
}
  constructor() {  
    this.sidenavWidth=4
    setInterval(() => {
      this.now = new Date();
    }, 1);
  }
  select(v:any){

    console.log(v[0].id)
    this.serverName=[]
    this.serverName=v[0].childNodes[1].innerText
    localStorage.setItem("Default",v[0].id)
  }
  addCard() {
    this.blocks.push({
  blockHeader:this.formatAMPM(this.now),
  blockTitle:"NewNote",
  blockContent:
  "This is an example note body" });
  this.alternate=this.blocks;
  this.addlocalstorge((this.blocks.length)-1)
  }

  addlocalstorge(number:number){
    localStorage.setItem(number.toString(),this.blocks[number-1].blockContent)
  }

  onkey(v:any){
      var data=document.getElementById(localStorage.getItem("Default"));
      var rollid= data.id.split("e");
      this.blocks[parseInt(rollid[1])].blockContent=this.serverName
      localStorage.setItem(rollid[1],this.serverName)
      console.log(data.children[1].innerHTML=this.serverName)
  }

  formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds=date.getSeconds();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    seconds=  seconds <10 ?'0'+seconds : seconds;
    var strTime = hours + ':' + minutes + ':' + seconds+' '+ ampm;
    return strTime;
  }
}