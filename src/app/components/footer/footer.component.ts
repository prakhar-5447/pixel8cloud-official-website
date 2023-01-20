import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  socials = [
    {
      social: 'instagram',
      link: 'https://instagram.com/pixel8cloud',
      id: 'pixel8cloud',
    },
    {
      social: 'twitter',
      link: 'https://twitter.com/pixel8cloud',
      id: 'pixel8cloud',
    },
    {
      social: 'youtube',
      link: 'https://youtube.com/@pixel8cloud',
      id: 'pixel8cloud',
    },
    {
      social: 'github',
      link: 'https://github.com/pixel8cloud',
      id: 'pixel8cloud',
    },
    {
      social: 'discord',
      link: 'https://discord.gg/yS4RsAkDHv',
      id: 'pixel8cloud#1519',
    },
  ];
  contacts = [
    {
      social: 'hashnode',
      link: 'https://prakhar-5447.hashnode.dev/',
      id: 'prakhar-5447',
    },
    {
      social: 'dev',
      link: 'https://dev.to/prakhar_5447',
      id: 'prakhar_5447',
    },
  ];
}
