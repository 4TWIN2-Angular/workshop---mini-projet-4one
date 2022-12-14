import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-upgradequipe',
  templateUrl: './upgradequipe.component.html',
  styleUrls: ['./upgradequipe.component.css']
})
export class UpgradequipeComponent implements OnInit {

  constructor() { }
  @Output() upgradeequipe = new EventEmitter<string>();
  ngOnInit(): void {
  }
  upgradeEquipe() {
    this.upgradeequipe.emit();
  }

}
