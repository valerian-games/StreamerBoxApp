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

  constructor(
    private firestore: FirestoreService,
    private auth: AuthService
  ) { }

  async ngOnInit() {
    this.commands = await this.firestore.commands
    this.yourCommands = await this.firestore.commandsBy(await this.auth.uid)
    
    if (this.yourCommands.length > 0)
      this.showYourCommands = true
  }

}
