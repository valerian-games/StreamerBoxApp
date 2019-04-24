import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../../_core/firestore.service'
import { AuthService } from '../../_core/auth.service'

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

  constructor(
    private firestore: FirestoreService,
    private auth: AuthService
  ) { }

  async ngOnInit() {
    this.commands = await this.firestore.commands
    this.yourCommands = await this.firestore.commandsBy(await this.auth.uid)
    this.games = await this.firestore.games
    
    if (this.yourCommands.length > 0)
      this.showYourCommands = true
  }

  removeTag(tag) {
    this.gameTags = this.gameTags.filter(item => item !== tag)
  }

  addTag(tagId) {
    this.gameTags.push(this.search(tagId, this.games))
  }

  private search(id, myArray){
    for (var i=0; i < myArray.length; i++) {
        if (myArray[i].id === id) {
            return myArray[i];
        }
    }
}
}
