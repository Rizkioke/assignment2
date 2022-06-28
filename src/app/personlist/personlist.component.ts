import { Component, OnInit } from '@angular/core';
import { Person } from '../person';
import { PERSON } from '../mock-person';


@Component({
  selector: 'app-personlist',
  templateUrl: './personlist.component.html',
  styleUrls: ['./personlist.component.css']
})
export class PersonlistComponent implements OnInit {
  person = PERSON;

  selectedList?: Person;

  deletePerson(person: Person) {
    person.deleted = true;
    person.edited = false;
    person.canEdit = false;
    person.canDelete = false;
  }

  editPerson(person: Person) {
    person.edited = true;
  }

  arr = Array;

  constructor() { }


  ngOnInit(): void {
  }

}
