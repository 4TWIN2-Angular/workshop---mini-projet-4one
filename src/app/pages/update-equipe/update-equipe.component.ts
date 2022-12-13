import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EquipeService } from 'src/app/services/equipe.service';

@Component({
  selector: 'app-update-equipe',
  templateUrl: './update-equipe.component.html',
  styleUrls: ['./update-equipe.component.css']
})
export class UpdateEquipeComponent implements OnInit {
  id=0;
  equipe:any;
  user_data:FormGroup;
  myForm :FormGroup;
  submitted=false;
  constructor(private equipeService:EquipeService,private route:ActivatedRoute,private formBuilder:FormBuilder, private router : Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['idEquipe'];
    console.log(this.id);

    this.equipeService.getEquipe(this.id).subscribe(res=>this.equipe=res);
    console.log(this.equipe);

   this.user_data = new FormGroup({
      autres:new FormGroup({
nomEquipe: new FormControl('',[Validators.required,Validators.minLength(4),Validators.pattern('[a-zA-Z]*')]),
niveau:new FormControl('Niveau',[]),
}),
    
    }

    ) 
     
  }
  onSubmit()
{
  this.submitted=true;
  if(this.myForm.invalid)
  {
    return
  }
  alert("success")
}
  updateEquipe()
  {
    this.equipeService.updateEquipe(this.equipe).subscribe(
      ()=>{
        this.router.navigate(["equipes"])
      }
    );

  }

  get nomEq(){
    return this.user_data.controls['autres'].get('nomEquipe');
  }

  

}
