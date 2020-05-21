import { trigger, transition, style, query, animateChild, group, animate } from '@angular/animations';

const getTransition = property => {
  return [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        [property]: 0,
        width: '100%'
      })
    ]),
    query(':enter', [
      style({ [property]: '-100%'})
    ]),
    query(':leave', animateChild()),
    group([
      query(':leave', [
        animate('300ms ease-out', style({ [property]: '100%'}))
      ]),
      query(':enter', [
        animate('300ms ease-out', style({ [property]: '0%'}))
      ])
    ]),
    query(':enter', animateChild()),
  ]
}

const left2Right = (from, to) => transition(`${from} => ${to}`,getTransition('right'));
const right2Left = (from, to) => transition(`${from} => ${to}`, getTransition('left'));

export const createRouteTransitions = (routes: string[]) => {
  const transitions = [];
  
  for(let i = 0; i < routes.length - 1; i++) {
    for(let k = 0; k < routes.length; k++) {
      if(i === k) continue;
      
      const from = routes[i];
      const to = routes[k];
  
      if (i < k) {
        transitions.push(left2Right(from, to));
        transitions.push(right2Left(to, from));
      } else {
        transitions.push(right2Left(from, to));
        transitions.push(left2Right(to, from));
      }
    }
  }

  return trigger('routeAnimations', transitions);
}