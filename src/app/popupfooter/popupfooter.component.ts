import { Component,OnInit,Input} from "@angular/core";
import * as titledata from '../_content/titles_en';
import {NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
@Component({
  moduleId : module.id,
  selector:'footer-popup',
  templateUrl:'./popupfooter.component.html',
  styleUrls:['./popupfooter.component.css']
})

export class PopupFooterComponent implements OnInit
{
  @Input()
  idclose:NgbModalRef;
  sampledata:any;
  constructor()
  {
    
  }

  ngOnInit()
  {
    this.sampledata=titledata;
  }

  closeModal(id: string) {
    this.idclose.close();
  }

}