import { Component, OnInit, Renderer2, ViewChild, ElementRef, Input, HostBinding, AfterContentInit } from '@angular/core';
import { DonutService } from './donut.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-donut',
  templateUrl: './donut.component.html',
  styleUrls: ['./donut.component.scss']
})
export class DonutComponent implements AfterContentInit{

  @Input() indexed = -1;
  @Input() @HostBinding('class.wide') wide = false;
  @Input() @HostBinding('class.small') small = false;
  variants = {
    icing_type: [
      {
        value: 'chocolate_dip',
        rarity: 9
      },
      {
        value: 'cotton_candy',
        rarity: 9
      },
      {
        value: 'lime_slime',
        rarity: 9
      },
      {
        value: 'strawberry_merry',
        rarity: 9
      },
      {
        value: 'tiger_sugar_coat',
        rarity: 9
      },
      {
        value: 'cheetah_sugar_coat',
        rarity: 9
      },
      {
        value: 'sugar_coat',
        rarity: 9
      },
      {
        value: 'velvet',
        rarity: 9
      },
      {
        value: 'classic_sprinkles',
        rarity: 9
      },
      {
        value: 'double_chocolate_glaze',
        rarity: 9
      },
      {
        value: 'vanilla_sprinkles',
        rarity: 9
      },
      {
        value: 'plain_sugar_icing',
        rarity: 9
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
      rarity: 3
    },
      {
        value: [
        '#A3D9FF',
        '#5CBBFF',
        '#006BB8',
        '#003C66'
      ],
      rarity: 3
    },
      {
        value: [
        '#DA3E52',
        '#EB98A3',
        '#991E2F',
        '#55111A'
      ],
      rarity: 3
    },
      {
        value: [
        '#F2E94E',
        '#EEE52F',
        '#726D09',
        '#4B4806'
      ],
      rarity: 3
    },
      {
        value: [
        '#EE92C2',
        '#C21E73',
        '#580E34',
        '#E972AF'
      ],
      rarity: 3
    },
      {
        value: [
        '#ADD2C2',
        '#48846A',
        '#3A6955',
        '#244235'
      ],
      rarity: 3
    },
      {
        value: [
        '#5941A9',
        '#4E3993',
        '#372867',
        '#2F2258'
      ],
      rarity: 3
    },
      {
        value: [
        '#72439D',
        '#5D3781',
        '#3E2556',
        '#291839'
      ],
      rarity: 3
    },
    {
      value: [
        '#561643',
        '#bc08ff',
        '#45ff37',
        '#bc08ff',
        '#561643'
      ],
      rarity: 3
    },
    {
      value: [
        '#6C0E23',
        '#C42021',
        '#6C0E23',
        '#C42021',
        '#6C0E23'
      ],
      rarity: 3
    },
    {
      value: [
        '#C42021',
        '#6C0E23',
        '#C42021',
        '#6C0E23',
        '#C42021'
      ],
      rarity: 3
    },
    {
      value: [
        '#F3FFB9',
        '#C42021',
        '#6C0E23',
        '#C42021',
        '#F3FFB9'
      ],
      rarity: 3
    },
    {
      value: [
        '#006494',
        '#00A6FB',
        '#006494',
        '#00A6FB',
        '#006494'
      ],
      rarity: 3
    },
    {
      value: [
        '#00A6FB',
        '#006494',
        '#00A6FB',
        '#006494',
        '#00A6FB'
      ],
      rarity: 3
    },
    {
      value: [
        '#003554',
        '#006494',
        '#003554',
        '#006494',
        '#003554'
      ],
      rarity: 3
    },
    {
      value: [
        '#051923',
        '#006494',
        '#051923',
        '#006494',
        '#051923'
      ],
      rarity: 3
    },
    {
      value: [
        '#051923',
        '#45ff37',
        '#051923',
        '#45ff37',
        '#051923'
      ],
      rarity: 3
    },
    {
      value: [
        '#45ff37',
        '#051923',
        '#45ff37',
        '#051923',
        '#45ff37'
      ],
      rarity: 3
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
        '#139A43',
        '#051923',
        '#139A43',
        '#051923',
        '#139A43'
      ],
      rarity: 3
    },
    {
      value: [
        '#051923',
        '#0B5D1E',
        '#051923',
        '#0B5D1E',
        '#051923'
      ],
      rarity: 3
    },
    {
      value: [
        '#139A43',
        '#053B06',
        '#139A43',
        '#053B06',
        '#139A43'
      ],
      rarity: 3
    },
    {
      value: [
        '#053B06',
        '#139A43',
        '#053B06',
        '#139A43',
        '#053B06'
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
        '#139A43',
        '#0DAB76',
        '#139A43',
        '#0DAB76',
        '#139A43'
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
        '#139A43',
        '#0B5D1E',
        '#139A43',
        '#0B5D1E',
        '#139A43'
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
      rarity: 3
    },
    {
      value: [
        '#F6F740',
        '#FDE74C',
        '#F6F740',
        '#FDE74C',
        '#F6F740'
      ],
      rarity: 3
    },
    {
      value: [
        '#DB5461',
        '#FDE74C',
        '#ED217C',
        '#FDE74C',
        '#DB5461'
      ],
      rarity: 3
    },
    {
      value: [
        '#DB5461',
        '#ED217C',
        '#DB5461',
        '#ED217C',
        '#DB5461'
      ],
      rarity: 3
    },
    ],
    dough_color: [
      {
        value: [
        '#885b25',
        '#c88537'
      ],
      rarity: 20
      },
      {
        value: [
        '#FF8F70',
        '#FFD9CE'
      ],
      rarity: 20
      },
      {
        value: [
        '#E980FC',
        '#B96AC9'
      ],
      rarity: 20
      },
      {
        value: [
        '#006652',
        '#00FFCD'
      ],
      rarity: 20
      },
      {
        value: [
        '#412F25',
        '#916953'
      ],
      rarity: 20
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
        rarity: 1
      },
      {
        value: [
          '#ff5dff',
          '#ff5dff',
          '#eadd37',
          '#bc08ff',
          '#45ff37'
        ],
        rarity: 1
      },
      {
        value: [
          '#ff5dff',
          '#eadd37',
          '#ff5dff',
          '#bc08ff',
          '#45ff37'
        ],
        rarity: 1
      },
      {
        value: [
          '#ff5dff',
          '#eadd37',
          '#ff5dff',
          '#bc08ff',
          '#45ff37'
        ],
        rarity: 1
      },
      {
        value: [
          '#ff5dff',
          '#bc08ff',
          '#ff5dff',
          '#bc08ff',
          '#ff5dff'
        ],
        rarity: 1
      },
      {
        value: [
          '#eadd37',
          '#ff5dff',
          '#eadd37',
          '#bc08ff',
          '#45ff37'
        ],
        rarity: 1
      },
      {
        value: [
          '#eadd37',
          '#bc08ff',
          '#eadd37',
          '#bc08ff',
          '#eadd37'
        ],
        rarity: 1
      },
      {
        value: [
          '#bc08ff',
          '#eadd37',
          '#bc08ff',
          '#eadd37',
          '#bc08ff'
        ],
        rarity: 1
      },
      {
        value: [
          '#eadd37',
          '#45ff37',
          '#bc08ff',
          '#45ff37',
          '#eadd37'
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
        rarity: 1
      },
      {
        value: [
          '#F6F740',
          '#FDE74C',
          '#F6F740',
          '#FDE74C',
          '#F6F740'
        ],
        rarity: 1
      },
      {
        value: [
          '#DB5461',
          '#FDE74C',
          '#ED217C',
          '#FDE74C',
          '#DB5461'
        ],
        rarity: 1
      },
      {
        value: [
          '#DB5461',
          '#ED217C',
          '#DB5461',
          '#ED217C',
          '#DB5461'
        ],
        rarity: 1
      },
      {
        value: [
          '#2D3047',
          '#DB5461',
          '#1B998B',
          '#DB5461',
          '#2D3047'
        ],
        rarity: 1
      },
      {
        value: [
          '#1B998B',
          '#2D3047',
          '#1B998B',
          '#2D3047',
          '#1B998B'
        ],
        rarity: 1
      },
      {
        value: [
          '#1B998B',
          '#2D3047',
          '#DB5461',
          '#2D3047',
          '#1B998B'
        ],
        rarity: 1
      },
      {
        value: [
          '#DB5461',
          '#D34F73',
          '#DB5461',
          '#D34F73',
          '#DB5461'
        ],
        rarity: 1
      },
      {
        value: [
          '#D34F73',
          '#6DD6DA',
          '#D34F73',
          '#6DD6DA',
          '#D34F73'
        ],
        rarity: 1
      },
      {
        value: [
          '#95D9DA',
          '#AE8CA3',
          '#95D9DA',
          '#AE8CA3',
          '#95D9DA'
        ],
        rarity: 1
      },
      {
        value: [
          '#C20114',
          '#AE8CA3',
          '#C20114',
          '#AE8CA3',
          '#C20114'
        ],
        rarity: 1
      },
      {
        value: [
          '#7CFFC4',
          '#C20114',
          '#7CFFC4',
          '#C20114',
          '#7CFFC4'
        ],
        rarity: 1
      },
      {
        value: [
          '#6ABEA7',
          '#7CFFC4',
          '#6ABEA7',
          '#7CFFC4',
          '#6ABEA7'
        ],
        rarity: 1
      },
      {
        value: [
          '#9FFFF5',
          '#6ABEA7',
          '#9FFFF5',
          '#6ABEA7',
          '#9FFFF5'
        ],
        rarity: 1
      },
      {
        value: [
          '#9FFFF5',
          '#BDFFFD',
          '#6ABEA7',
          '#BDFFFD',
          '#9FFFF5'
        ],
        rarity: 1
      },
      {
        value: [
          '#BDFFFD',
          '#B287A3',
          '#BDFFFD',
          '#B287A3',
          '#BDFFFD'
        ],
        rarity: 1
      },
      {
        value: [
          '#7E4E60',
          '#B287A3',
          '#7E4E60',
          '#B287A3',
          '#7E4E60'
        ],
        rarity: 1
      },
      {
        value: [
          '#B287A3',
          '#7E4E60',
          '#BDFFFD',
          '#7E4E60',
          '#B287A3'
        ],
        rarity: 1
      },
      {
        value: [
          '#BDFFFD',
          '#482728',
          '#B287A3',
          '#482728',
          '#BDFFFD'
        ],
        rarity: 1
      },
      {
        value: [
          '#482728',
          '#7E4E60',
          '#482728',
          '#7E4E60',
          '#482728'
        ],
        rarity: 1
      },
      {
        value: [
          '#0075C4',
          '#5E747F',
          '#BDFFFD',
          '#5E747F',
          '#0075C4'
        ],
        rarity: 1
      },
      {
        value: [
          '#0267C1',
          '#0075C4',
          '#0267C1',
          '#0075C4',
          '#0267C1'
        ],
        rarity: 1
      },
      {
        value: [
          '#D65108',
          '#0267C1',
          '#D65108',
          '#0267C1',
          '#D65108'
        ],
        rarity: 1
      },
      {
        value: [
          '#0267C1',
          '#D65108',
          '#38A700',
          '#D65108',
          '#0267C1'
        ],
        rarity: 1
      },
      {
        value: [
          '#38A700',
          '#38A700',
          '#0267C1',
          '#38A700',
          '#D65108'
        ],
        rarity: 1
      },
      {
        value: [
          '#31D843',
          '#D65108',
          '#0267C1',
          '#D65108',
          '#31D843'
        ],
        rarity: 1
      },
      {
        value: [
          '#3EFF8B',
          '#386C0B',
          '#3EFF8B',
          '#386C0B',
          '#3EFF8B'
        ],
        rarity: 1
      },
      {
        value: [
          '#31D843',
          '#3EFF8B',
          '#386C0B',
          '#3EFF8B',
          '#31D843'
        ],
        rarity: 1
      },
      {
        value: [
          '#3EFF8B',
          '#31D843',
          '#3EFF8B',
          '#31D843',
          '#3EFF8B'
        ],
        rarity: 1
      },
      {
        value: [
          '#3EFF8B',
          '#31D843',
          '#38A700',
          '#31D843',
          '#3EFF8B'
        ],
        rarity: 1
      },
      {
        value: [
          '#38A700',
          '#31D843',
          '#38A700',
          '#31D843',
          '#38A700'
        ],
        rarity: 1
      },
      {
        value: [
          '#38A700',
          '#31D843',
          '#293F14',
          '#31D843',
          '#38A700'
        ],
        rarity: 1
      },
      {
        value: [
          '#139A43',
          '#0B5D1E',
          '#053B06',
          '#0DAB76',
          '#139A43'
        ],
        rarity: 1
      },
      {
        value: [
          '#0B5D1E',
          '#293F14',
          '#31D843',
          '#0B5D1E',
          '#293F14'
        ],
        rarity: 1
      },
      {
        value: [
          '#293F14',
          '#FF87AB',
          '#645DD7',
          '#FF87AB',
          '#FF47DA'
        ],
        rarity: 1
      },
      {
        value: [
          '#645DD7',
          '#FF87AB',
          '#645DD7',
          '#FF87AB',
          '#645DD7'
        ],
        rarity: 1
      },
      {
        value: [
          '#645DD7',
          '#FB62F6',
          '#FF87AB',
          '#645DD7',
          '#FB62F6'
        ],
        rarity: 1
      },
      {
        value: [
          '#FB62F6',
          '#645DD7',
          '#FB62F6',
          '#645DD7',
          '#FB62F6'
        ],
        rarity: 1
      },
      {
        value: [
          '#FF4242',
          '#F2FF49',
          '#FF4242',
          '#F2FF49',
          '#FF4242'
        ],
        rarity: 1
      },
      {
        value: [
          '#F2FF49',
          '#FF4242',
          '#F2FF49',
          '#FF4242',
          '#F2FF49'
        ],
        rarity: 1
      },
      {
        value: [
          '#F2FF49',
          '#FF4242',
          '#645DD7',
          '#F2FF49',
          '#FF4242'
        ],
        rarity: 1
      },
    ]
  };

  @ViewChild('donut') donut: ElementRef;

  @Input() randomizeThese = true;
  @Input() randomizeLoopThese = true;

  @Input() metadata = {
    0: 1,
    1: 2,
    2: 3,
    3: 4,
    icing_type: 0,
    icing_color: 0,
    dough_color: 2,
    background_color: 3
  };

  rarities = {
    icing_type: ['', 0],
    icing_color: [[], 0],
    dough_color: [[], 2],
    background_color: [[], 3]
  };

  convertedMetadataDonutStyles = {
    icing_type: 0,
    icing_color: 0,
    dough_color: 2,
    background_color: 3
  };

  activeIcingColors = [];
  activeDoughColors = [];
  activeBackgroundColors = [];

  lastRandom = 0;

  constructor(
    private renderer: Renderer2,
    private donutService: DonutService
  ) { }

  ngAfterContentInit(): void {
    setTimeout(() => {
      if (this.randomizeThese) {
        this.randomize();
      } else {
        this.calculateRarities();
      }
    }, 500);
  }

  calculateRarities(): void {
    // tslint:disable:variable-name
    let icing_type_rarity_scale = 100;
    let icing_type_rarity_scale_selected = false;
    this.variants.icing_type.forEach((icing_type, index) => {
      if (icing_type_rarity_scale_selected === true) {
        return;
      }
      if (index === this.variants.icing_type.length - 1) {
        this.renderer.addClass(this.donut.nativeElement, this.variants.icing_type[index].value);
        this.rarities.icing_type[0] = this.variants.icing_type[index].value;
        this.rarities.icing_type[1] = this.variants.icing_type[index].rarity;
        icing_type_rarity_scale_selected = true;
        return;
      }
      if ((this.metadata.icing_type / 2.55) > (icing_type_rarity_scale - this.variants.icing_type[index].rarity)) {
        this.renderer.addClass(this.donut.nativeElement, this.variants.icing_type[index].value);
        this.rarities.icing_type[0] = this.variants.icing_type[index].value;
        this.rarities.icing_type[1] = this.variants.icing_type[index].rarity;
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
        icing_color_rarity_scale_selected = true;
        return;
      }
      if ((this.metadata.icing_color / 2.55) > (icing_color_rarity_scale - this.variants.icing_color[index].rarity)) {
        this.activeIcingColors = this.variants.icing_color[index].value;
        this.rarities.icing_color[0] = this.variants.icing_color[index].value;
        this.rarities.icing_color[1] = this.variants.icing_color[index].rarity;
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
        dough_color_rarity_scale_selected = true;
        return;
      }
      if ((this.metadata.dough_color / 2.55) > (dough_color_rarity_scale - this.variants.dough_color[index].rarity)) {
        this.activeDoughColors = this.variants.dough_color[index].value;
        this.rarities.dough_color[0] = this.variants.dough_color[index].value;
        this.rarities.dough_color[1] = this.variants.dough_color[index].rarity;
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
        background_color_rarity_scale_selected = true;
        return;
      }
      if ((this.metadata.background_color / 2.55) > (background_color_rarity_scale - this.variants.background_color[index].rarity)) {
        this.activeBackgroundColors = this.variants.background_color[index].value;
        this.rarities.background_color[0] = this.variants.background_color[index].value;
        this.rarities.background_color[1] = this.variants.background_color[index].rarity;
        background_color_rarity_scale_selected = true;
      } else {
        background_color_rarity_scale = background_color_rarity_scale - this.variants.background_color[index].rarity;
        return;
      }
    });
    this.donutService.rarities.next(this.rarities);
    this.donutService.metadata.next(this.metadata);
  }

  randomize(): void {
    let randomed = Math.floor(Math.random() * (this.variants.icing_type.length - 1));

    this.renderer.removeClass(this.donut.nativeElement, this.variants.icing_type[this.lastRandom].value);
    this.renderer.addClass(this.donut.nativeElement, this.variants.icing_type[randomed].value);
    this.lastRandom = randomed;

    randomed = Math.floor(Math.random() * (this.variants.icing_color.length - 1));

    this.activeIcingColors = this.variants.icing_color[randomed].value;

    randomed = Math.floor(Math.random() * (this.variants.dough_color.length - 1));

    this.activeDoughColors = this.variants.dough_color[randomed].value;

    this.activeBackgroundColors = this.variants.background_color[0].value;

    if (this.randomizeLoopThese === true) {

      setTimeout(() => {
        this.randomize();
      }, 2500);
    }
  }

}
