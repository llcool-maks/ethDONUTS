import { Component, OnInit, AfterContentInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DonutService } from '../donut.service';
import { Web3Service } from 'src/app/web3.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-donut-json',
  templateUrl: './donut-json.component.html',
  styleUrls: ['./donut-json.component.scss']
})
export class DonutJsonComponent implements OnInit, AfterContentInit {

  id;
  metadata: BehaviorSubject<any> = this.web3.specificDonut;

  rarities = {
    icing_type: ['', 0],
    icing_color: [[], 0],
    dough_color: [[], 2],
    background_color: [[], 3]
  };
  json = {
    name: '',
    image: '',
    attributes: [
    {
      value: '',
      trait_type: '',
    },
    {
      value: [],
      trait_type: '',
    },
    {
      value: [],
      trait_type: '',
    },
    {
      value: [],
      trait_type: '',
    }],
    description: '',
    external_url: 'https://ethdonuts.art/#/'
  };

  metadataFromService = this.donutService.metadata;
  raritiesFromService = this.donutService.rarities;

  variants = {
    icing_type: [
      {
        value: 'tiger_sugar_coat',
        rarity: 1
      },
      {
        value: 'cheetah_sugar_coat',
        rarity: 2
      },
      {
        value: 'boston_cream',
        rarity: 3
      },
      {
        value: 'cotton_candy',
        rarity: 3
      },
      {
        value: 'lime_slime',
        rarity: 4
      },
      {
        value: 'vanilla_sprinkles',
        rarity: 5
      },
      {
        value: 'strawberry_merry',
        rarity: 6
      },
      {
        value: 'sugar_coat',
        rarity: 7
      },
      {
        value: 'velvet',
        rarity: 8
      },
      {
        value: 'double_chocolate_glaze',
        rarity: 9
      },
      {
        value: 'plain_sugar_icing',
        rarity: 10
      },
      {
        value: 'chocolate_dip',
        rarity: 11
      },
      {
        value: 'classic_sprinkles',
        rarity: 19
      },
    ],
    icing_color: [
      {
        value: [
        '#9ae804',
        '#c1ff49',
        '#85d400',
        '#bcff39'
      ],
      rarity: 0.25
    },
      {
        value: [
        '#A3D9FF',
        '#5CBBFF',
        '#006BB8',
        '#003C66'
      ],
      rarity: 0.5
    },
      {
        value: [
        '#DA3E52',
        '#EB98A3',
        '#991E2F',
        '#55111A'
      ],
      rarity: 0.75
    },
      {
        value: [
        '#F2E94E',
        '#EEE52F',
        '#726D09',
        '#4B4806'
      ],
      rarity: 1.25
    },
      {
        value: [
        '#EE92C2',
        '#C21E73',
        '#580E34',
        '#E972AF'
      ],
      rarity: 1.5
    },
      {
        value: [
        '#ADD2C2',
        '#48846A',
        '#3A6955',
        '#244235'
      ],
      rarity: 1.75
    },
      {
        value: [
        '#5941A9',
        '#4E3993',
        '#372867',
        '#2F2258'
      ],
      rarity: 1
    },
      {
        value: [
        '#72439D',
        '#5D3781',
        '#3E2556',
        '#291839'
      ],
      rarity: 1
    },
    {
      value: [
        '#561643',
        '#bc08ff',
        '#45ff37',
        '#bc08ff',
        '#561643'
      ],
      rarity: 1
    },
    {
      value: [
        '#6C0E23',
        '#C42021',
        '#6C0E23',
        '#C42021',
        '#6C0E23'
      ],
      rarity: 1
    },
    {
      value: [
        '#C42021',
        '#6C0E23',
        '#C42021',
        '#6C0E23',
        '#C42021'
      ],
      rarity: 1
    },
    {
      value: [
        '#F3FFB9',
        '#C42021',
        '#6C0E23',
        '#C42021',
        '#F3FFB9'
      ],
      rarity: 2
    },
    {
      value: [
        '#006494',
        '#00A6FB',
        '#006494',
        '#00A6FB',
        '#006494'
      ],
      rarity: 2
    },
    {
      value: [
        '#00A6FB',
        '#006494',
        '#00A6FB',
        '#006494',
        '#00A6FB'
      ],
      rarity: 2
    },
    {
      value: [
        '#003554',
        '#006494',
        '#003554',
        '#006494',
        '#003554'
      ],
      rarity: 2
    },
    {
      value: [
        '#051923',
        '#006494',
        '#051923',
        '#006494',
        '#051923'
      ],
      rarity: 2
    },
    {
      value: [
        '#051923',
        '#45ff37',
        '#051923',
        '#45ff37',
        '#051923'
      ],
      rarity: 2
    },
    {
      value: [
        '#45ff37',
        '#051923',
        '#45ff37',
        '#051923',
        '#45ff37'
      ],
      rarity: 2
    },
    {
      value: [
        '#45ff37',
        '#051923',
        '#003554',
        '#051923',
        '#45ff37'
      ],
      rarity: 3
    },
    {
      value: [
        '#003554',
        '#051923',
        '#003554',
        '#051923',
        '#003554'
      ],
      rarity: 3
    },
    {
      value: [
        '#50C9CE',
        '#72A1E5',
        '#50C9CE',
        '#72A1E5',
        '#50C9CE'
      ],
      rarity: 3
    },
    {
      value: [
        '#72A1E5',
        '#9883E5',
        '#FCD3DE',
        '#50C9CE',
        '#2E382E'
      ],
      rarity: 3
    },
    {
      value: [
        '#55DDE0',
        '#33658A',
        '#2F4858',
        '#F6AE2D',
        '#F26419'
      ],
      rarity: 3
    },
    {
      value: [
        '#85FF9E',
        '#AF90A9',
        '#944654',
        '#A6F4DC',
        '#A05C7B'
      ],
      rarity: 3
    },
    {
      value: [
        '#0DAB76',
        '#139A43',
        '#0DAB76',
        '#139A43',
        '#0DAB76'
      ],
      rarity: 3
    },
    {
      value: [
        '#5F4BB6',
        '#86A5D9',
        '#26F0F1',
        '#C4EBC8',
        '#202A25'
      ],
      rarity: 3
    },
    {
      value: [
        '#0DAB76',
        '#0B5D1E',
        '#0DAB76',
        '#0B5D1E',
        '#0DAB76'
      ],
      rarity: 3
    },
    {
      value: [
        '#72A1E5',
        '#9883E5',
        '#72A1E5',
        '#9883E5',
        '#72A1E5'
      ],
      rarity: 3
    },
    {
      value: [
        '#EB8258',
        '#0DAB76',
        '#EB8258',
        '#0DAB76',
        '#EB8258'
      ],
      rarity: 3
    },
    {
      value: [
        '#F6F740',
        '#EB8258',
        '#F6F740',
        '#EB8258',
        '#F6F740'
      ],
      rarity: 3
    },
    {
      value: [
        '#F6F740',
        '#6689A1',
        '#995D81',
        '#6689A1',
        '#F6F740'
      ],
      rarity: 3
    },
    {
      value: [
        '#995D81',
        '#6689A1',
        '#995D81',
        '#6689A1',
        '#995D81'
      ],
      rarity: 4
    },
    {
      value: [
        '#F6F740',
        '#FDE74C',
        '#F6F740',
        '#FDE74C',
        '#F6F740'
      ],
      rarity: 4
    },
    {
      value: [
        '#DB5461',
        '#FDE74C',
        '#ED217C',
        '#FDE74C',
        '#DB5461'
      ],
      rarity: 4
    },
    {
      value: [
        '#DB5461',
        '#ED217C',
        '#DB5461',
        '#ED217C',
        '#DB5461'
      ],
      rarity: 4
    },
    {
      value: [
      '#7DBA84',
      '#77AD78',
      '#7DBA84',
      '#8FD694'
    ],
    rarity: 5
  },
    {
      value: [
      '#607B7D',
      '#3A606E',
      '#828E82',
      '#AAAE8E'
    ],
    rarity: 5
  },
  {
    value: [
    '#EF8354',
    '#4F5D75',
    '#FFFFFF',
    '#BFC0C0'
  ],
  rarity: 6
},
  {
    value: [
    '#F92A82',
    '#7EB77F',
    '#ED7B84',
    '#F5DBCB'
  ],
  rarity: 6
},
    ],
    dough_color: [
      {
        value: [
        '#885b25',
        '#c88537'
      ],
      rarity: 1
      },
      {
        value: [
        '#FF8F70',
        '#FFD9CE'
      ],
      rarity: 1
      },
      {
        value: [
        '#E980FC',
        '#B96AC9'
      ],
      rarity: 1
      },
      {
        value: [
        '#006652',
        '#00FFCD'
      ],
      rarity: 2
      },
      {
        value: [
        '#B0E298',
        '#E072A4'
      ],
      rarity: 2
      },
      {
        value: [
        '#B0E298',
        '#6883BA'
      ],
      rarity: 2
      },
      {
        value: [
        '#F9F9F9',
        '#E072A4'
      ],
      rarity: 3
      },
      {
        value: [
        '#F9F9F9',
        '#6883BA'
      ],
      rarity: 3
      },
      {
        value: [
        '#F9F9F9',
        '#3D3B8E'
      ],
      rarity: 3
      },
      {
        value: [
        '#3D3B8E',
        '#6883BA'
      ],
      rarity: 3
      },
      {
        value: [
        '#84E6F8',
        '#64113F'
      ],
      rarity: 4
      },
      {
        value: [
        '#64113F',
        '#DE4D86'
      ],
      rarity: 4
      },
      {
        value: [
        '#F7CACD',
        '#DE4D86'
      ],
      rarity: 4
      },
      {
        value: [
        '#F29CA3',
        '#DE4D86'
      ],
      rarity: 5
      },
      {
        value: [
        '#84E6F8',
        '#84E6F8'
      ],
      rarity: 5
      },
      {
        value: [
        '#C3423F',
        '#4E1918'
      ],
      rarity: 5
      },
      {
        value: [
        '#BB3C3A',
        '#C3423F'
      ],
      rarity: 5
      },
      {
        value: [
        '#566E21',
        '#9BC53D'
      ],
      rarity: 6
      },
      {
        value: [
        '#5BC0EB',
        '#FDE74C'
      ],
      rarity: 6
      },
      {
        value: [
        '#5BC0EB',
        '#FDE74C'
      ],
      rarity: 6
      },
      {
        value: [
        '#F46197',
        '#FFFDF7'
      ],
      rarity: 6
      },
      {
        value: [
        '#F46197',
        '#2CA58D'
      ],
      rarity: 6
      },
      {
        value: [
        '#84BC9C',
        '#2CA58D'
      ],
      rarity: 6
      },
      {
        value: [
        '#06070E',
        '#29524A'
      ],
      rarity: 7
      },
      {
        value: [
        '#E9BCB7',
        '#C5AFA0'
      ],
      rarity: 7
      },
    ],
    background_color: [
      {
        value: [
          '#ff5dff',
          '#45d9da',
          '#eadd37',
          '#bc08ff',
          '#45ff37'
        ],
        rarity: 0.25
      },
      {
        value: [
          '#ff5dff',
          '#ff5dff',
          '#eadd37',
          '#bc08ff',
          '#45ff37'
        ],
        rarity: 0.75
      },
      {
        value: [
          '#ff5dff',
          '#eadd37',
          '#ff5dff',
          '#bc08ff',
          '#45ff37'
        ],
        rarity: 2
      },
      {
        value: [
          '#ff5dff',
          '#eadd37',
          '#ff5dff',
          '#bc08ff',
          '#45ff37'
        ],
        rarity: 2
      },
      {
        value: [
          '#ff5dff',
          '#bc08ff',
          '#ff5dff',
          '#bc08ff',
          '#ff5dff'
        ],
        rarity: 2
      },
      {
        value: [
          '#eadd37',
          '#ff5dff',
          '#eadd37',
          '#bc08ff',
          '#45ff37'
        ],
        rarity: 2
      },
      {
        value: [
          '#eadd37',
          '#bc08ff',
          '#eadd37',
          '#bc08ff',
          '#eadd37'
        ],
        rarity: 2
      },
      {
        value: [
          '#bc08ff',
          '#eadd37',
          '#bc08ff',
          '#eadd37',
          '#bc08ff'
        ],
        rarity: 2
      },
      {
        value: [
          '#eadd37',
          '#45ff37',
          '#bc08ff',
          '#45ff37',
          '#eadd37'
        ],
        rarity: 2
      },
      {
        value: [
          '#561643',
          '#bc08ff',
          '#45ff37',
          '#bc08ff',
          '#561643'
        ],
        rarity: 2
      },
      {
        value: [
          '#6C0E23',
          '#C42021',
          '#6C0E23',
          '#C42021',
          '#6C0E23'
        ],
        rarity: 1
      },
      {
        value: [
          '#C42021',
          '#6C0E23',
          '#C42021',
          '#6C0E23',
          '#C42021'
        ],
        rarity: 1
      },
      {
        value: [
          '#F3FFB9',
          '#C42021',
          '#6C0E23',
          '#C42021',
          '#F3FFB9'
        ],
        rarity: 1
      },
      {
        value: [
          '#006494',
          '#00A6FB',
          '#006494',
          '#00A6FB',
          '#006494'
        ],
        rarity: 1
      },
      {
        value: [
          '#00A6FB',
          '#006494',
          '#00A6FB',
          '#006494',
          '#00A6FB'
        ],
        rarity: 1
      },
      {
        value: [
          '#003554',
          '#006494',
          '#003554',
          '#006494',
          '#003554'
        ],
        rarity: 1
      },
      {
        value: [
          '#051923',
          '#006494',
          '#051923',
          '#006494',
          '#051923'
        ],
        rarity: 1
      },
      {
        value: [
          '#051923',
          '#45ff37',
          '#051923',
          '#45ff37',
          '#051923'
        ],
        rarity: 1
      },
      {
        value: [
          '#45ff37',
          '#051923',
          '#45ff37',
          '#051923',
          '#45ff37'
        ],
        rarity: 1
      },
      {
        value: [
          '#45ff37',
          '#051923',
          '#003554',
          '#051923',
          '#45ff37'
        ],
        rarity: 1
      },
      {
        value: [
          '#003554',
          '#051923',
          '#003554',
          '#051923',
          '#003554'
        ],
        rarity: 1
      },
      {
        value: [
          '#139A43',
          '#051923',
          '#139A43',
          '#051923',
          '#139A43'
        ],
        rarity: 1
      },
      {
        value: [
          '#051923',
          '#0B5D1E',
          '#051923',
          '#0B5D1E',
          '#051923'
        ],
        rarity: 1
      },
      {
        value: [
          '#139A43',
          '#053B06',
          '#139A43',
          '#053B06',
          '#139A43'
        ],
        rarity: 1
      },
      {
        value: [
          '#053B06',
          '#139A43',
          '#053B06',
          '#139A43',
          '#053B06'
        ],
        rarity: 1
      },
      {
        value: [
          '#0DAB76',
          '#139A43',
          '#0DAB76',
          '#139A43',
          '#0DAB76'
        ],
        rarity: 1
      },
      {
        value: [
          '#139A43',
          '#0DAB76',
          '#139A43',
          '#0DAB76',
          '#139A43'
        ],
        rarity: 1
      },
      {
        value: [
          '#0DAB76',
          '#0B5D1E',
          '#0DAB76',
          '#0B5D1E',
          '#0DAB76'
        ],
        rarity: 1
      },
      {
        value: [
          '#139A43',
          '#0B5D1E',
          '#139A43',
          '#0B5D1E',
          '#139A43'
        ],
        rarity: 1
      },
      {
        value: [
          '#EB8258',
          '#0DAB76',
          '#EB8258',
          '#0DAB76',
          '#EB8258'
        ],
        rarity: 1
      },
      {
        value: [
          '#F6F740',
          '#EB8258',
          '#F6F740',
          '#EB8258',
          '#F6F740'
        ],
        rarity: 1
      },
      {
        value: [
          '#F6F740',
          '#6689A1',
          '#995D81',
          '#6689A1',
          '#F6F740'
        ],
        rarity: 1
      },
      {
        value: [
          '#995D81',
          '#6689A1',
          '#995D81',
          '#6689A1',
          '#995D81'
        ],
        rarity: 2
      },
      {
        value: [
          '#F6F740',
          '#FDE74C',
          '#F6F740',
          '#FDE74C',
          '#F6F740'
        ],
        rarity: 2
      },
      {
        value: [
          '#DB5461',
          '#FDE74C',
          '#ED217C',
          '#FDE74C',
          '#DB5461'
        ],
        rarity: 2
      },
      {
        value: [
          '#DB5461',
          '#ED217C',
          '#DB5461',
          '#ED217C',
          '#DB5461'
        ],
        rarity: 2
      },
      {
        value: [
          '#2D3047',
          '#DB5461',
          '#1B998B',
          '#DB5461',
          '#2D3047'
        ],
        rarity: 2
      },
      {
        value: [
          '#1B998B',
          '#2D3047',
          '#1B998B',
          '#2D3047',
          '#1B998B'
        ],
        rarity: 2
      },
      {
        value: [
          '#1B998B',
          '#2D3047',
          '#DB5461',
          '#2D3047',
          '#1B998B'
        ],
        rarity: 2
      },
      {
        value: [
          '#DB5461',
          '#D34F73',
          '#DB5461',
          '#D34F73',
          '#DB5461'
        ],
        rarity: 3
      },
      {
        value: [
          '#D34F73',
          '#6DD6DA',
          '#D34F73',
          '#6DD6DA',
          '#D34F73'
        ],
        rarity: 4
      },
      {
        value: [
          '#95D9DA',
          '#AE8CA3',
          '#95D9DA',
          '#AE8CA3',
          '#95D9DA'
        ],
        rarity: 0.5
      },
      {
        value: [
          '#C20114',
          '#AE8CA3',
          '#C20114',
          '#AE8CA3',
          '#C20114'
        ],
        rarity: 0.5
      },
      {
        value: [
          '#7CFFC4',
          '#C20114',
          '#7CFFC4',
          '#C20114',
          '#7CFFC4'
        ],
        rarity: 0.5
      },
      {
        value: [
          '#6ABEA7',
          '#7CFFC4',
          '#6ABEA7',
          '#7CFFC4',
          '#6ABEA7'
        ],
        rarity: 0.5
      },
      {
        value: [
          '#9FFFF5',
          '#6ABEA7',
          '#9FFFF5',
          '#6ABEA7',
          '#9FFFF5'
        ],
        rarity: 0.5
      },
      {
        value: [
          '#9FFFF5',
          '#BDFFFD',
          '#6ABEA7',
          '#BDFFFD',
          '#9FFFF5'
        ],
        rarity: 0.5
      },
      {
        value: [
          '#BDFFFD',
          '#B287A3',
          '#BDFFFD',
          '#B287A3',
          '#BDFFFD'
        ],
        rarity: 0.5
      },
      {
        value: [
          '#7E4E60',
          '#B287A3',
          '#7E4E60',
          '#B287A3',
          '#7E4E60'
        ],
        rarity: 0.5
      },
      {
        value: [
          '#B287A3',
          '#7E4E60',
          '#BDFFFD',
          '#7E4E60',
          '#B287A3'
        ],
        rarity: 0.5
      },
      {
        value: [
          '#BDFFFD',
          '#482728',
          '#B287A3',
          '#482728',
          '#BDFFFD'
        ],
        rarity: 0.5
      },
      {
        value: [
          '#482728',
          '#7E4E60',
          '#482728',
          '#7E4E60',
          '#482728'
        ],
        rarity: 0.5
      },
      {
        value: [
          '#0075C4',
          '#5E747F',
          '#BDFFFD',
          '#5E747F',
          '#0075C4'
        ],
        rarity: 0.75
      },
      {
        value: [
          '#0267C1',
          '#0075C4',
          '#0267C1',
          '#0075C4',
          '#0267C1'
        ],
        rarity: 0.75
      },
      {
        value: [
          '#D65108',
          '#0267C1',
          '#D65108',
          '#0267C1',
          '#D65108'
        ],
        rarity: 0.75
      },
      {
        value: [
          '#0267C1',
          '#D65108',
          '#38A700',
          '#D65108',
          '#0267C1'
        ],
        rarity: 1.5
      },
      {
        value: [
          '#38A700',
          '#38A700',
          '#0267C1',
          '#38A700',
          '#D65108'
        ],
        rarity: 1.5
      },
      {
        value: [
          '#31D843',
          '#D65108',
          '#0267C1',
          '#D65108',
          '#31D843'
        ],
        rarity: 1.5
      },
      {
        value: [
          '#3EFF8B',
          '#386C0B',
          '#3EFF8B',
          '#386C0B',
          '#3EFF8B'
        ],
        rarity: 1.5
      },
      {
        value: [
          '#31D843',
          '#3EFF8B',
          '#386C0B',
          '#3EFF8B',
          '#31D843'
        ],
        rarity: 1.5
      },
      {
        value: [
          '#3EFF8B',
          '#31D843',
          '#3EFF8B',
          '#31D843',
          '#3EFF8B'
        ],
        rarity: 1.5
      },
      {
        value: [
          '#3EFF8B',
          '#31D843',
          '#38A700',
          '#31D843',
          '#3EFF8B'
        ],
        rarity: 1.5
      },
      {
        value: [
          '#38A700',
          '#31D843',
          '#38A700',
          '#31D843',
          '#38A700'
        ],
        rarity: 1.5
      },
      {
        value: [
          '#38A700',
          '#31D843',
          '#293F14',
          '#31D843',
          '#38A700'
        ],
        rarity: 1.5
      },
      {
        value: [
          '#139A43',
          '#0B5D1E',
          '#053B06',
          '#0DAB76',
          '#139A43'
        ],
        rarity: 1.5
      },
      {
        value: [
          '#0B5D1E',
          '#293F14',
          '#31D843',
          '#0B5D1E',
          '#293F14'
        ],
        rarity: 1.5
      },
      {
        value: [
          '#293F14',
          '#FF87AB',
          '#645DD7',
          '#FF87AB',
          '#FF47DA'
        ],
        rarity: 1.5
      },
      {
        value: [
          '#645DD7',
          '#FF87AB',
          '#645DD7',
          '#FF87AB',
          '#645DD7'
        ],
        rarity: 1.5
      },
      {
        value: [
          '#645DD7',
          '#FB62F6',
          '#FF87AB',
          '#645DD7',
          '#FB62F6'
        ],
        rarity: 1.5
      },
      {
        value: [
          '#FB62F6',
          '#645DD7',
          '#FB62F6',
          '#645DD7',
          '#FB62F6'
        ],
        rarity: 1.5
      },
      {
        value: [
          '#9FFFF5',
          '#F2FF49',
          '#9FFFF5',
          '#F2FF49',
          '#9FFFF5'
        ],
        rarity: 1.5
      },
      {
        value: [
          '#F2FF49',
          '#FF4242',
          '#F2FF49',
          '#FF4242',
          '#F2FF49'
        ],
        rarity: 1.5
      },
      {
        value: [
          '#000022',
          '#DE3C4B',
          '#C42847',
          '#E28413',
          '#FBF5F3'
        ],
        rarity: 1.5
      },
    ]
  };

  activeIcingColors = [];
  activeDoughColors = [];
  activeBackgroundColors = [];

  constructor(
    private snapshot: ActivatedRoute,
    private web3: Web3Service,
    private donutService: DonutService,
    private http: HttpClient
  ) {

   }

  ngOnInit(): void {
    this.snapshot.params.subscribe((result) => {
      if (result.id === undefined) {
        this.id = -1;
        return;
      }
      this.id = result.id;
      this.web3.getSpecificDonut(this.id);

      const thefile = new Blob([JSON.stringify(this.convertToJson())], { type: 'application/json' }) ;
      const url = window.URL.createObjectURL(thefile);
      window.location.href = url;
    });
  }

  ngAfterContentInit(): void {
  }

  convertToJson(): {} {
    // tslint:disable:variable-name
    this.json.name = 'EthDonut ' + this.id;
    this.json.image = 'https://ethdonuts.art/#/raw-donuts/' + this.id;

    let icing_type_rarity_scale = 100;
    let icing_type_rarity_scale_selected = false;
    this.variants.icing_type.forEach((icing_type, index) => {
      if (icing_type_rarity_scale_selected === true) {
        return;
      }
      if (index === this.variants.icing_type.length - 1) {
        this.rarities.icing_type[0] = this.variants.icing_type[index].value;
        this.rarities.icing_type[1] = this.variants.icing_type[index].rarity;
        this.json.attributes[0].value = this.variants.icing_type[index].value;
        this.json.attributes[0].trait_type = 'Icing Type';
        icing_type_rarity_scale_selected = true;
        return;
      }
      if ((this.metadata.getValue().icing_type / 2.55) > (icing_type_rarity_scale - this.variants.icing_type[index].rarity)) {
        this.rarities.icing_type[0] = this.variants.icing_type[index].value;
        this.rarities.icing_type[1] = this.variants.icing_type[index].rarity;
        this.json.attributes[0].value = this.variants.icing_type[index].value;
        this.json.attributes[0].trait_type = 'Icing Type';
        icing_type_rarity_scale_selected = true;
      } else {
        icing_type_rarity_scale = icing_type_rarity_scale - this.variants.icing_type[index].rarity;
        return;
      }
    });
    let icing_color_rarity_scale = 100;
    let icing_color_rarity_scale_selected = false;
    this.variants.icing_color.forEach((icing_color, index) => {
      if (icing_color_rarity_scale_selected === true) {
        return;
      }
      if (index === this.variants.icing_color.length - 1) {
        this.activeIcingColors = this.variants.icing_color[index].value;
        this.rarities.icing_color[0] = this.variants.icing_color[index].value;
        this.rarities.icing_color[1] = this.variants.icing_color[index].rarity;
        this.json.attributes[1].value = this.variants.icing_color[index].value;
        this.json.attributes[1].trait_type = 'Icing Color';
        icing_color_rarity_scale_selected = true;
        return;
      }
      if ((this.metadata.getValue().icing_color / 2.55) > (icing_color_rarity_scale - this.variants.icing_color[index].rarity)) {
        this.activeIcingColors = this.variants.icing_color[index].value;
        this.rarities.icing_color[0] = this.variants.icing_color[index].value;
        this.rarities.icing_color[1] = this.variants.icing_color[index].rarity;
        this.json.attributes[1].value = this.variants.icing_color[index].value;
        this.json.attributes[1].trait_type = 'Icing Color';
        icing_color_rarity_scale_selected = true;
      } else {
        icing_color_rarity_scale = icing_color_rarity_scale - this.variants.icing_color[index].rarity;
        return;
      }
    });
    let dough_color_rarity_scale = 100;
    let dough_color_rarity_scale_selected = false;
    this.variants.dough_color.forEach((dough_color, index) => {
      if (dough_color_rarity_scale_selected === true) {
        return;
      }
      if (index === this.variants.dough_color.length - 1) {
        this.activeDoughColors = this.variants.dough_color[index].value;
        this.rarities.dough_color[0] = this.variants.dough_color[index].value;
        this.rarities.dough_color[1] = this.variants.dough_color[index].rarity;
        this.json.attributes[2].value = this.variants.dough_color[index].value;
        this.json.attributes[2].trait_type = 'Dough Color';
        dough_color_rarity_scale_selected = true;
        return;
      }
      if ((this.metadata.getValue().dough_color / 2.55) > (dough_color_rarity_scale - this.variants.dough_color[index].rarity)) {
        this.activeDoughColors = this.variants.dough_color[index].value;
        this.rarities.dough_color[0] = this.variants.dough_color[index].value;
        this.rarities.dough_color[1] = this.variants.dough_color[index].rarity;
        this.json.attributes[2].value = this.variants.dough_color[index].value;
        this.json.attributes[2].trait_type = 'Dough Color';
        dough_color_rarity_scale_selected = true;
      } else {
        dough_color_rarity_scale = dough_color_rarity_scale - this.variants.dough_color[index].rarity;
        return;
      }
    });
    let background_color_rarity_scale = 100;
    let background_color_rarity_scale_selected = false;
    this.variants.background_color.forEach((background_color, index) => {
      if (background_color_rarity_scale_selected === true) {
        return;
      }
      if (index === this.variants.background_color.length - 1) {
        this.activeBackgroundColors = this.variants.background_color[index].value;
        this.rarities.background_color[0] = this.variants.background_color[index].value;
        this.rarities.background_color[1] = this.variants.background_color[index].rarity;
        this.json.attributes[3].value = this.variants.background_color[index].value;
        this.json.attributes[3].trait_type = 'Background Colors';
        background_color_rarity_scale_selected = true;
        return;
      }
      if ((this.metadata.getValue().background_color / 2.55) > (background_color_rarity_scale - this.variants.background_color[index].rarity)) {
        this.activeBackgroundColors = this.variants.background_color[index].value;
        this.rarities.background_color[0] = this.variants.background_color[index].value;
        this.rarities.background_color[1] = this.variants.background_color[index].rarity;
        this.json.attributes[3].value = this.variants.background_color[index].value;
        this.json.attributes[3].trait_type = 'Background Colors';
        background_color_rarity_scale_selected = true;
      } else {
        background_color_rarity_scale = background_color_rarity_scale - this.variants.background_color[index].rarity;
        return;
      }
    });
    this.donutService.rarities.next(this.rarities);
    this.donutService.metadata.next(this.metadata);

    return this.json;
  }

}
