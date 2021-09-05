import { Component, OnInit, Renderer2, ViewChild, ElementRef, Input, HostBinding, AfterContentInit } from '@angular/core';
import { DonutService } from './donut.service';

@Component({
  selector: 'app-donut',
  templateUrl: './donut.component.html',
  styleUrls: ['./donut.component.scss']
})
export class DonutComponent implements AfterContentInit{

  @Input() @HostBinding('class.wide') wide = false;
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
      rarity: 12
    },
      {
        value: [
        '#A3D9FF',
        '#5CBBFF',
        '#006BB8',
        '#003C66'
      ],
      rarity: 12
    },
      {
        value: [
        '#DA3E52',
        '#EB98A3',
        '#991E2F',
        '#55111A'
      ],
      rarity: 12
    },
      {
        value: [
        '#F2E94E',
        '#EEE52F',
        '#726D09',
        '#4B4806'
      ],
      rarity: 12
    },
      {
        value: [
        '#EE92C2',
        '#C21E73',
        '#580E34',
        '#E972AF'
      ],
      rarity: 12
    },
      {
        value: [
        '#ADD2C2',
        '#48846A',
        '#3A6955',
        '#244235'
      ],
      rarity: 12
    },
      {
        value: [
        '#5941A9',
        '#4E3993',
        '#372867',
        '#2F2258'
      ],
      rarity: 12
    },
      {
        value: [
        '#72439D',
        '#5D3781',
        '#3E2556',
        '#291839'
      ],
      rarity: 12
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
    ]
  };

  @ViewChild('donut') donut: ElementRef;

  @Input() randomizeThese = true;
  @Input() randomizeLoopThese = true;

  @Input() metadata = {
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
        this.rarities.icing_type[0] = this.variants.icing_type[index].value;
        this.rarities.icing_type[1] = this.variants.icing_type[index].rarity;
        icing_type_rarity_scale_selected = true;
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
        this.rarities.icing_color[0] = this.variants.icing_color[index].value;
        this.rarities.icing_color[1] = this.variants.icing_color[index].rarity;
        icing_color_rarity_scale_selected = true;
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
        this.activeIcingColors = this.variants.dough_color[index].value;
        this.rarities.dough_color[0] = this.variants.dough_color[index].value;
        this.rarities.dough_color[1] = this.variants.dough_color[index].rarity;
        dough_color_rarity_scale_selected = true;
        return;
      }
      if ((this.metadata.dough_color / 2.55) > (dough_color_rarity_scale - this.variants.dough_color[index].rarity)) {
        this.activeIcingColors = this.variants.dough_color[index].value;
        this.rarities.dough_color[0] = this.variants.dough_color[index].value;
        this.rarities.dough_color[1] = this.variants.dough_color[index].rarity;
        dough_color_rarity_scale_selected = true;
      } else {
        this.rarities.dough_color[0] = this.variants.dough_color[index].value;
        this.rarities.dough_color[1] = this.variants.dough_color[index].rarity;
        dough_color_rarity_scale_selected = true;
        dough_color_rarity_scale = dough_color_rarity_scale - this.variants.dough_color[index].rarity;
        return;
      }
    });
    console.dir(this.metadata);
    console.dir(this.rarities);
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

    if (this.randomizeLoopThese === true) {

      setTimeout(() => {
        this.randomize();
      }, 2500);
    }
  }

}
