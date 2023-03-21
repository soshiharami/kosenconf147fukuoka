import { Injectable } from '@nestjs/common';
import dayjs from 'dayjs';

type Skill = {
  name: string;
  type: ('backend' | 'frontend' | 'infrastructure' | 'other')[];
};

type Company = {
  name: string;
  url: string;
};

export type Profile = {
  name: string;
  realName: string;
  twitter: string;
  age: number;
  bio: string;
  skill: Skill[];
  company: Company;
};

function calcAge(birthday: dayjs.Dayjs) {
  const today = dayjs();
  const birthDate = dayjs(birthday);
  const baseAge = today.year() - birthDate.year();
  const thisBirthday = dayjs(
    `${today.year()}-${birthDate.month() + 1}-${birthDate.date()}`,
  );
  return today.isBefore(thisBirthday) ? baseAge - 1 : baseAge;
}

const soshi: Profile = {
  name: 'soshi_harami',
  realName: 'shinohara soshi',
  twitter: 'https://twitter.com/soshi_harami',
  age: calcAge(dayjs('2003-08-07')),
  bio: `C-Style inc. CTO GitHub: http://github.com/soshiharami icon: @unios103i メール: work@soshiharami.com 個人宛の仕事はメールかDMまで 以下推しマーク ⚔【白銀聖騎士団の高専係】🥟🎨🍬🍃☃🍙🔥🧪🏮♌ etc...
  `,
  skill: [
    { name: 'TypeScript', type: ['backend', 'frontend'] },
    { name: 'Scala', type: ['frontend', 'backend'] },
    { name: 'Java', type: ['backend'] },
    { name: 'AWS', type: ['infrastructure'] },
    { name: 'C', type: ['other'] },
    { name: 'Python', type: ['other'] },
    { name: 'ArchLinux', type: ['other'] },
    { name: 'Proxmox', type: ['other'] },
  ],
  company: { name: 'C-Style', url: 'https://c-style.net/' },
};

@Injectable()
export class AppService {
  getHello(): Profile {
    return soshi;
  }
}
