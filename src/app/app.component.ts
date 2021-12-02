import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [
    '.ng-autocomplete {position: fixed; /* or absolute */ top: 50%; left: 20%;}'
  ]
})
export class AppComponent {
  title = 'Angular Auto Complete';
  keyword = 'name';
  data = [
     {
       id: 1,
       name: 'Usa'
     },
     {
       id: 2,
       name: 'England'
     },
     {
       id: 3,
       name: 'India'
     },
     {
       id: 4,
       name: 'africa'
     },
     {
       id: 5,
       name: 'russsia'
     },
     {
       id: 6,
       name: 'albania'
     },
     {
       id: 7,
       name: 'madagascar'
     }
  ];


  selectEvent(item: any) {
    // do something with selected item
    console.log('selected item '+item.name);
  }

  onChangeSearch(val: string) {
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
    console.log('selected val '+val);
  }

  onFocused(e: any){
    // do something when input is focused
  }
}
