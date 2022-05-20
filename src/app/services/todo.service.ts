import { Injectable } from '@angular/core';
import { API, graphqlOperation } from 'aws-amplify';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor() {}

  async getToDos(){
    const ListToDos = `query ListTodos {
      listTodos {
        items {
          id
          name
          description
          createdAt
          updatedAt
        }
      }
    }`
    return await API.graphql(graphqlOperation(ListToDos));
  }
}
