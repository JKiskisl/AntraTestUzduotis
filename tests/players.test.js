import Player from '../src/js/players';

it('Sukuria zaidejus', () => {
  expect(Player('Player1', 'X')).toMatchObject({ name: 'Player1', sign: 'X' });
});