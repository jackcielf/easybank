import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-card-image",
  templateUrl: "./card-image.component.html",
  styleUrls: ["./card-image.component.scss"],
})
export class CardImageComponent implements OnInit {
  @Input() image: string;
  @Input() name: string;
  @Input() title: string;
  @Input() content: string;

  constructor() {}

  ngOnInit() {}
}
