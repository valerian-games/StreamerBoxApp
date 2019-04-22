import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-unity',
  templateUrl: './unity.component.html',
  styleUrls: ['./unity.component.scss']
})
export class UnityComponent implements OnInit {
  
  show = false
  showError = false
  code

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.code = this.route.snapshot.queryParamMap.get('code')

    const error = this.route.snapshot.queryParamMap.get('error')

    if (error) 
      this.showError = true
    else 
      this.showError = false
  }

  showToken() {
    this.show = true
  }

}
