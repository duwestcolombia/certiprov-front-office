import { Component, OnInit } from '@angular/core';
import { listAnios } from 'src/app/config/year';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as jsPDF from 'jspdf';
// import * as swal from 'sweetalert';
// import swal from 'sweetalert';


@Component({
  selector: 'app-generate-certificate',
  templateUrl: './generate-certificate.component.html',
  styleUrls: ['./generate-certificate.component.css']
})
export class GenerateCertificateComponent implements OnInit {

  yearCurrent = new Date();
  anios:any = [];
  identificacion:number;
  forma:FormGroup;
  esUnRobot:boolean = true;

  constructor() {
    this.anios = listAnios;
 
  }

  ngOnInit() {
    this.forma = new FormGroup({
      anio: new FormControl(null, Validators.required),
      identificacion: new FormControl(null, [Validators.required, Validators.maxLength(10),Validators.minLength(8)])
    })
  }
  resolved(captchaResponse: string) {
        if(captchaResponse){
          this.esUnRobot = false;
          // swal('Prueba', 'exitos', 'success');
          // console.log(`Resolved captcha with response ${captchaResponse}:`);
        }
  }
  consultar(){
    if(this.forma.invalid){
      return;
    }
    console.log(this.forma.value);
  }

  downloadPdf(){
    let nomPdf = "900091949-8";
    let element = document.getElementById("test");
    console.log(document.getElementById("test"));
    
    
    let doc = new jsPDF({
      orientation: 'portatil',
      format:'letter'
    });

    doc.fromHTML(element, 20, 20);

    // doc.text('Aqui mi texto del PDF', 10,10);
    // doc.text('Aqui mi texto del PDF', 15,10);
    // doc.text('Aqui mi texto del PDF', 20,10);
    // doc.text('Aqui mi texto del PDF', 25,10);
    // doc.text('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla interdum, risus eu vulputate euismod, mi eros aliquet ante, ut rhoncus nulla magna id turpis. Aliquam iaculis ipsum eget massa facilisis cursus. Aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac velit sit amet justo cursus mollis. Sed imperdiet id ligula vitae porttitor. Donec pellentesque dictum metus ut auctor. Duis hendrerit aliquam euismod.'
    // +'Aenean lorem nunc, pellentesque sed dolor et, iaculis sodales lectus. Cras vestibulum sem sagittis, consectetur ante scelerisque, bibendum quam. Nunc vestibulum neque sit amet dolor tincidunt feugiat. Aenean tristique quam sed vehicula egestas. Sed in tincidunt justo, at auctor elit. Nullam feugiat non risus vel vehicula. Donec egestas magna magna, sed lobortis risus fringilla a. Etiam nisi mi, convallis ac sem et, porttitor sollicitudin mi.'
    
    // +'Integer metus quam, efficitur eu sem sed, egestas consequat velit. Morbi dolor arcu, luctus in auctor pharetra, accumsan eu nulla. Nunc id velit in odio sollicitudin laoreet. Aliquam libero augue, pharetra nec lobortis at, aliquet vitae metus. Mauris accumsan convallis magna ut maximus. Etiam dapibus malesuada placerat. Vivamus blandit purus vel nibh tristique, id rutrum justo convallis. Etiam et aliquam sapien, et accumsan ex.'
    
    // +'Vivamus convallis eros ante. Nulla facilisi. In faucibus eleifend elit, id efficitur mi viverra vitae. Nullam malesuada, velit a volutpat facilisis, odio dolor cursus lacus, vitae eleifend odio urna ac dui. Praesent ipsum ex, iaculis ac odio nec, feugiat efficitur orci. Nam id justo nulla. Phasellus sed dignissim odio, at placerat orci. Donec condimentum lobortis rutrum. Nunc malesuada, dui ullamcorper accumsan iaculis, justo orci malesuada ipsum, placerat vulputate felis felis euismod mauris.'
    
    // +'Integer venenatis maximus dui, nec bibendum est blandit a. Vestibulum condimentum lectus sed laoreet ullamcorper. Pellentesque fermentum quam ac leo congue tincidunt eget non ligula. Vestibulum et volutpat quam. Phasellus vel arcu id metus semper condimentum id vitae odio. Nullam elementum auctor molestie. Cras faucibus quam id accumsan placerat. Nam porttitor massa libero, vitae aliquam felis aliquam sit amet.', 30,10);
    
    doc.save(`${nomPdf}.pdf`);

  }
}
