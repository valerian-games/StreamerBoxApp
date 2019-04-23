import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../../_core/firestore.service'

@Component({
  selector: 'app-commands',
  templateUrl: './commands.component.html',
  styleUrls: ['./commands.component.scss']
})
export class CommandsComponent implements OnInit {

  commands: {}[]

  constructor(
    private firestore: FirestoreService
  ) { }

  async ngOnInit() {
    this.commands = await this.firestore.commands
  }

}
