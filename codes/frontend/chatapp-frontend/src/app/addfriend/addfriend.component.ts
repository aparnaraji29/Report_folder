import { Component } from '@angular/core';
import { BackendService } from '../backend.service';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, RouteReuseStrategy, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addfriend',
  templateUrl: './addfriend.component.html',
  styleUrls: ['./addfriend.component.css']
})
export class AddfriendComponent {


  inviteform:any;
  userdash:any;
  friend:any[] = [];
  friendsdata:any;

  constructor(private chatService: BackendService,private fb:FormBuilder,private route:ActivatedRoute,private router : Router){
   
    this.inviteform = this.fb.group({
      name:[''],
      email :['']
     })
   
    }

  // ngOnInit(){
    
  // }

  invite() {
    let friend = this.inviteform.value;
    let userid = this.route.snapshot.params['id'];
    console.log(userid)
    console.log(friend)
    this.chatService.addfriend(friend,userid).subscribe((res: any) => {
      if (res.status === 200) {
        this.friend = [res.data];
        console.log("friend reached front from back");
        console.log(this.friend);
        // alert("friend added");
    Swal.fire("Success","friend added","success")

        this.router.navigate([`land/${userid}`]);
      } else if (res.status ===300){
        // alert("you are already friends");
    Swal.fire("Error","you are already friends","error")

        this.router.navigate([`land/${userid}`]);
      }
      else if (res.status === 500) {
        // alert("not a registered user");
    Swal.fire("Error","not a registered user","error")

        this.router.navigate([`land/${userid}`]);
      } else {
    Swal.fire("Error","friend cannot be added","error")
    // alert("friend cannot be added")
  
        this.router.navigate([`land/${userid}`]);
      }
    });
  }

}
