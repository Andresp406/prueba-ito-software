import { Pipe, PipeTransform } from '@angular/core';
import { IDataUser } from '../form/modals/create-user/create-user.component';

@Pipe({
  name: 'pagination'
})
export class PaginationPipe implements PipeTransform {

  transform(users: IDataUser[], page:number, search:string=''): IDataUser[] {
    if ( search.length === 0 ){
      return users.slice(page, page + 5);
    }

    var filteredUsers = users.filter(user=> user.nombre.includes(search));
    if ( search === 'nombre'){
      filteredUsers = users.filter(user=> user.nombre.includes(search));
      return filteredUsers.slice(page, page + 5);

    }
    if ( search === 'apellido'){
      filteredUsers = users.filter(user=> user.apellido.includes(search));
      return filteredUsers.slice(page, page + 5);

    }
    if ( search === 'email'){
      filteredUsers = users.filter(user=> user.email.includes(search));
      return filteredUsers.slice(page, page + 5);

    }
    if ( search === 'usuario'){
      filteredUsers = users.filter(user=> user.usuario.includes(search));
      return filteredUsers.slice(page, page + 5);

    }


   return users;
  }

}
