// conference.component.ts
import { Component } from '@angular/core';

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
export class ConferenceComponent {
  conferences: Conference[] = [
    {
      title: 'כנס ניסן תשפא',
      speakers: [
        { name: 'הרב אילן', videoId: 'https://www.youtube.com/shorts/82l9BjIpgx4' },
        { name: 'הרב רזיאל', videoId: 'https://www.youtube.com/shorts/82l9BjIpgx4' }
      ]
    },
    {
      title: 'כנס ניסן תשפב',
      speakers: [
        { name: 'הרב סילבר', videoId: 'https://www.youtube.com/shorts/82l9BjIpgx4' },
        { name: 'הרב כהן', videoId: 'https://www.youtube.com/shorts/82l9BjIpgx4' }
      ]
    }
  ];

  selectedConference: Conference | null = null;
  selectedSpeaker: Speaker | null = null;

  selectConference(conf: Conference) {
    this.selectedConference = conf;
    this.selectedSpeaker = null;
  }

  selectSpeaker(speaker: Speaker) {
    this.selectedSpeaker = speaker;
  }
}
