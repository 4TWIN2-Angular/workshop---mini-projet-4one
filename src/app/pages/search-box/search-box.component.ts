import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from "@angular/core";

@Component({
  selector: "app-search-box",
  templateUrl: "./search-box.component.html",
  styleUrls: ["./search-box.component.css"],
})
export class SearchBoxComponent implements OnChanges {
  @Output() requested = new EventEmitter<string>();
  @Input() notFound: boolean;
  searchValue: string;

  constructor() {}

  onRequest() {
    this.requested.emit(this.searchValue);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    // changes.prop contains the old and the new value...
  }
}
