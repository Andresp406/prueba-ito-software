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
    const filteredUsers = users.filter(user=> user.nombre.includes(search));
    return filteredUsers;
  }

}
