import { Component, Input, OnInit } from '@angular/core';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { BehaviorSubject } from 'rxjs';
import { Doc } from 'src/app/models/interfaces';

@Component({
  selector: 'app-documents-table',
  templateUrl: './documents-table.component.html',
  styleUrls: ['./documents-table.component.scss'],
})
export class DocumentsTableComponent implements OnInit {
  @Input() docs$ = new BehaviorSubject<Doc[]>([]);
  faTrash = faTrash;
  faPenToSquare = faPenToSquare;

  constructor() {}

  ngOnInit(): void {}
}
