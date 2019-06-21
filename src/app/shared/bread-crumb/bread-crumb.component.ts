import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';
import { filter, map } from 'rxjs/operators';



@Component({
  selector: 'app-bread-crumb',
  templateUrl: './bread-crumb.component.html',
  styleUrls: ['./bread-crumb.component.css']
})
export class BreadCrumbComponent implements OnInit {

  titulo:string;

  constructor(private router:Router,private title: Title, private meta:Meta ) { 

    this.getDataRouter().subscribe(data=>{
      this.titulo = data.titulo;
      this.title.setTitle("Certiprov - "+this.titulo);

      const metaTag:MetaDefinition={
        name:'descripcion',
        content: this.titulo
      }

      this.meta.updateTag(metaTag);
      
    })

  }

  ngOnInit() {
  }

  getDataRouter(){
    return this.router.events.pipe(
      filter(evento => evento instanceof ActivationEnd),
      filter((evento:ActivationEnd)=>evento.snapshot.firstChild === null),
      map((evento:ActivationEnd)=>evento.snapshot.data)
    )
  }

}
