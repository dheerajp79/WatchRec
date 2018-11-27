import { Component, OnInit,OnDestroy} from '@angular/core';
import * as sampletitles from '../_content/titles_en';
import { log } from 'util';
import * as sampledata from '../_content/sample_content';
import {map} from 'rxjs/operators';

import {NgbModal,NgbModalRef} from '@ng-bootstrap/ng-bootstrap';

@Component({ 
    templateUrl: 'home.component.html', 
    styleUrls:['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy {
    private bodyText: string;
    justify:string='end';
    tabs:Array<any>=["Setting","Tracking"];
    maintitle:string="Create Watch Record";
    patentdesc:String="Testing patent desc";
    patentno:string="U12345";
    testdata:any;
    own_dis:boolean=true;
    titledata:any;
    ownername:string;
    recentref:Array<any>=['test1','test2','test3'];
    recentrefmodal:any;
    modalref:NgbModalRef;

    cliseg:any;
    projseg:any;
    subprojseg:any;
    newcli:any="";
    newproj:any="";
    newsubproj:any="";

    clisegdis:boolean=false;
    projsegdis:boolean=true;
    subprojsegdis:boolean=true;
    newclidis:boolean=false;
    newprojdis:boolean=true;
    newsubprojdis:boolean=true;    

    constructor(private service:NgbModal) {
        
    }

    ngOnInit() {
        this.testdata=sampledata;
        this.titledata=sampletitles;
        this.ownername=this.testdata.data.Owner;
        this.recentrefmodal=this.recentref[0];
        this.cliseg=this.testdata.data.cliseg[0];
        this.projseg=this.testdata.data.projseg[0];
        this.subprojseg=this.testdata.data.subprojseg[0];
    }

    ngOnDestroy()
    {
        
    }

    some_change(data:any,even:any)
    {
        console.log(data);
    }

    segselectchange(id:string)
    {
        if(id==='cliseg')
        {
            if(this.cliseg==this.testdata.data.cliseg[0])
            {
                this.projseg="";
                this.newcli="";
                this.newprojdis=true;
                this.projsegdis=true;
                this.newsubprojdis=true;
                this.subprojseg=true;
            }
            else{
                this.projseg=this.testdata.data.projseg[0]
                this.newcli=this.cliseg;
                this.newprojdis=false;
                this.projsegdis=false;
                this.newsubprojdis=true;
                this.subprojseg=true;
            }
            
        }
        
        if(id=='projseg')
        {
            if(this.projseg==this.testdata.data.projseg[0])
            {
                this.newproj="";
                this.subprojsegdis=true;
                this.newsubprojdis=true;
            }
            else
            {
                this.newproj=this.projseg;
                this.subprojseg="";
                this.subprojsegdis=false;
                this.newsubprojdis=false;

            }
        }
        if(id=='subprojseg')
        {
            if(this.subprojseg==this.testdata.data.subprojseg[0])
            {
                this.newsubproj="";
            }
            else{
                this.newsubproj=this.subprojseg;
            }
        }

    }

    seginputclick(id:string)
    {
        if(id==='newcliele')
        {
            this.cliseg=this.testdata.data.cliseg[0];
            this.projseg="";
            this.subprojseg="";
        }
        if(id==='newprojele')
        {
            this.projseg=this.testdata.data.projseg[0];
            this.subprojseg="";
            this.subprojsegdis=true;
        }
        if(id==='newsubprojele')
        {
            this.subprojseg=this.testdata.data.subprojseg[0];
        }
    }

    seginputchange(id:string,event:any)
    {
        
        if(id==='newcliele')
        {

            if((event.keyCode===8||event.keyCode===32 || event.keyCode===46) && this.newcli.length===0)
            {
                this.newprojdis=true;
            }
        }

        if(id==='newprojele')
        {
            if((event.keyCode===8||event.keyCode===32 || event.keyCode===46)&&this.newproj.length===0)
            {
                this.newsubprojdis=true;
            }
        }
    }

    seginblur(id:string)
    {
        console.log(this.newcli);
        if(id==='newcliele')
        {
            let newcli=this.newcli;
            let tofill=this.testdata.data.cliseg[0];
            this.cliseg=this.testdata.data.cliseg.find(function(x){
                if(x===newcli)
                    return x;
               
            });
        }
    }


    triselected(even:any)
    {
        if(even.value==="true")
        this.testdata.data.standard.map(x=>{x.checked=true});
        else
        this.testdata.data.standard.map(x=>{x.checked=false});
        
        console.log(this.testdata.data.standard);
        
    }
    legalselected(even:any)
    {
        if(even.value==="true")
        this.testdata.data.Legal_code.map(x=>{x.checked=true});
        else
        this.testdata.data.Legal_code.map(x=>{x.checked=false});      
    }
    openme(content:any)
    {
           this.modalref=this.service.open(content,{backdrop:true,size:'lg'});
    }
    closeme()
    {
       this.modalref.close();
    }

}