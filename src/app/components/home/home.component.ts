import { Component } from '@angular/core';
import { DbService } from '../../services/db.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  dbService: any;
hero: any;
  constructor(privatedbService:DbService){}
 items: {id:string,title:string}[]=[]
 ngOnInit(){
    this.dbService.getAllSnippet().then((data:any)=>{
      console.log(data);
      
      this.items = data
    })
  }

}
