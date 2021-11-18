import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.page.html',
  styleUrls: ['./libros.page.scss'],
})
export class LibrosPage implements OnInit {

  constructor(public router:Router) { }

  back(){
    this.router.navigateByUrl('/tabs/tab2');
  }


  ngOnInit() {
  }

}
