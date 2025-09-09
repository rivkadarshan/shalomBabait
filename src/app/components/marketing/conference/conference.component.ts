// src/app/conference/conference.component.ts
import { Component, OnInit } from '@angular/core';
import { ConferenceService } from '../../../services/conference.service';

interface Speaker {
  name: string;
  videoId: string;
}

interface Conference {
  title: string;
  speakers: Speaker[];
}

@Component({
  selector: 'app-conference',
  templateUrl: './conference.component.html',
  styleUrls: ['./conference.component.css']
})

export class ConferenceComponent implements OnInit {
  conferences: Conference[] = [];
  selectedConference: Conference | null = null;
  selectedSpeaker: Speaker | null = null;

  constructor(private conferenceService: ConferenceService) {    console.log("ConferenceComponent נטען בהצלחה!");
}

  ngOnInit(): void {
    this.conferenceService.getConferences().subscribe(data => {
      this.conferences = data;
    });
  }

  selectConference(conf: Conference) {
    this.selectedConference = conf;
    this.selectedSpeaker = null;
  }

  selectSpeaker(speaker: Speaker) {
    this.selectedSpeaker = speaker;
  }
}
