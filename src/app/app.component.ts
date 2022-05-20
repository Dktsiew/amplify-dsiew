import { Component, OnInit } from '@angular/core';
import { AuthenticatorService } from '@aws-amplify/ui-angular';
import { Amplify } from '@aws-amplify/core';
import awsExports from '../aws-exports';
import { TodoService } from './services/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'amplify-dsiew';
  constructor(
    public authenticator: AuthenticatorService,
    private todoService: TodoService
  ) {
    Amplify.configure(awsExports);
  }
  ngOnInit(): void {
    this.todoService.getToDos().then((results) => {
      console.log('results', results);
    });
  }
}
