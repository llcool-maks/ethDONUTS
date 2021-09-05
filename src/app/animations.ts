
import { style, trigger, transition, animate, query } from '@angular/animations';

export const routerAnimations =
trigger('routerAnimations', [
    transition('* => *', [
        query(
            ':enter',
            [
                style({ transform: 'translateY(-400vh)'}),
            ],
            { optional: true }
            ),
        query(
            ':leave',
            [
                animate('0.5s ease-in', style({ transform: 'translateY(400vh)'})),
            ],
            { optional: true }
            ),
        query(
            ':enter',
            [
                animate('0.5s ease-in', style({opacity: 1, transform: 'translateY(0vh)'})),
            ],
            { optional: true }
            )
    ])
]);


export const fadeAnimations =
trigger(
  'fadeAnimations',
  [
    transition(
      ':enter',
      [
        style({ height: 0, opacity: 0 }),
        animate('0.25s ease-out',
                style({ height: 300, opacity: 1 }))
      ]
    ),
    transition(
      ':leave',
      [
        style({ height: 300, opacity: 1 }),
        animate('0.25s ease-in',
                style({ height: 0, opacity: 0 }))
      ]
    )
  ]
)
