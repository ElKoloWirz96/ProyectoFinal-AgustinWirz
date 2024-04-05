import { Component } from '@angular/core';
import { IUser } from './models';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = [
    {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
    {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
    {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
    {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
    {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
    {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
    {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
    {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  ];

  user: IUser[] = [
    {
      id: 1,
      nombre: "Agustin",
      apellido: "Wirz",
      email: "agustin-96@live.com.ar",
      createdAt: new Date()
    },
    {
      id: 2,
      nombre: "Franco",
      apellido: "Carchedi",
      email: "FrancoIzzi@hotmail.com",
      createdAt: new Date()
    },
    {
      id: 3,
      nombre: "Florencia",
      apellido: "Rodriguez",
      email: "noreply@coderhouse.com",
      createdAt: new Date()
    }
  ];
  
}
