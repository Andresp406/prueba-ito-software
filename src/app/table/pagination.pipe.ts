import { Pipe, PipeTransform } from '@angular/core';
import { IDataUser } from '../form/modals/create-user/create-user.component';

@Pipe({
  name: 'pagination'
})
export class PaginationPipe implements PipeTransform {

  transform(users: IDataUser[], page:number, search:string='', field:string=''){
    if ( search.length === 0 ){
      return users.slice(page, page + 5);
    }

    switch (field){
      case 'nombre':
        let filteredNombre = users.filter(user => user.nombre.includes(search));
        return filteredNombre.slice(page, page + 5);

      case 'email':
        let filteredEmail = users.filter(user=> user.email.includes(search));
        return filteredEmail.slice(page, page + 5);

      case 'usuario':
        let filteredUsuario = users.filter(user => user.usuario.includes(search));
        return filteredUsuario.slice(page, page + 5);

      case 'apellido':
        let filteredApellido = users.filter(user => user.apellido.includes(search));
        return filteredApellido.slice(page, page + 5);
      
    }

    return users;

  }

}
