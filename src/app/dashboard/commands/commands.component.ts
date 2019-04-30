import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, ValidatorFn, AbstractControl, ValidationErrors, AsyncValidatorFn } from '@angular/forms';
import { FirestoreService } from '../../_core/firestore.service'
import { AuthService } from '../../_core/auth.service'
import { debounceTime, first, map, take } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-commands',
  templateUrl: './commands.component.html',
  styleUrls: ['./commands.component.scss']
})
export class CommandsComponent implements OnInit {

  commands: {}[]
  yourCommands: {}[]
  showYourCommands = false
  showAddCommand = false
  games: {}[]
  gameTags: {}[] = []

  commandForm: FormGroup

  constructor(
    private firestore: FirestoreService,
    private auth: AuthService,
    private fb: FormBuilder
  ) { }

  async ngOnInit() {
    this.commands = await this.firestore.commands
    this.yourCommands = await this.firestore.commandsBy(await this.auth.uid)
    this.games = await this.firestore.games

    if (this.yourCommands.length > 0)
      this.showYourCommands = true

    this.commandForm = new FormGroup({
      command: new FormControl('', [
        Validators.required
      ]),
      description: new FormControl('', [
        Validators.required
      ]),
      games: new FormControl('', [
        Validators.required
      ])
    })
  }

  removeTag(tag) {
    this.gameTags = this.gameTags.filter(item => item !== tag)
  }

  addTag(tagId) {
    this.gameTags.push(this.search(tagId, this.games))
  }

  get command() {
    return this.commandForm.get('command')
  }

  get description() {
    return this.commandForm.get('description')
  }

  get gamesForm() {
    return this.commandForm.get('games')
  }

  private search(id, myArray) {
    for (var i = 0; i < myArray.length; i++) {
      if (myArray[i].id === id) {
        return myArray[i];
      }
    }
  }

}