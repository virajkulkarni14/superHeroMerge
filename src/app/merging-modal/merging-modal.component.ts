import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import {Hero} from "../models/hero.model";

@Component({
  selector: 'merging-modal',
  templateUrl: './merging-modal.component.html',
  styleUrls: ['./merging-modal.component.css']
})
export class MergingModalComponent implements OnInit {
  @Input() mergingList: Hero[];
  @Input() isShowMergingModal: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}