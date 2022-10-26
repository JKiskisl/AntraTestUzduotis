import GamePlay from '../src/js/game';

describe('GamePlay', () => {
  it('Priskiria reiksme kai perduodama ir grazina ta pacia reiksme', () => {
    expect(GamePlay.setTurn(1)).toBe(1);
  });

  it('Keicia eiles reiksme', () => {
    GamePlay.getPlayers();

    expect(GamePlay.changeTurn()).toMatchObject({ name: 'Player2', sign: 'O' });
  });

  it('grazina laimetoja jeigu jis yra laimetojas', () => {
    const isWin = jest.fn(() => true);
    const player = { name: 'Player', sign: 'X' };
    const whoWon = jest.fn(() => player);
    const isTie = jest.fn(() => false);

    expect(GamePlay.endGame(isWin, whoWon, isTie)).toMatchObject({ name: 'Player', sign: 'X' });
  });

  it('grazina FALSE jeigu nera laimetojo ir nera lygiuju', () => {
    const isWin = jest.fn(() => false);
    const player = { name: 'Player', sign: 'X' };
    const whoWon = jest.fn(() => player);
    const isTie = jest.fn(() => false);

    expect(GamePlay.endGame(isWin, whoWon, isTie)).toBeFalsy();
  });

  it('Grazina STRING jeigu yra lygiosios', () => {
    const isWin = jest.fn(() => false);
    const player = { name: 'Player', sign: 'X' };
    const whoWon = jest.fn(() => player);
    const isTie = jest.fn(() => true);

    expect(GamePlay.endGame(isWin, whoWon, isTie)).toMatch('tie');
  });

  it('Grazina TRUE jeigu zaidejas gali daryti ejima', () => {
    const isMovable = jest.fn(() => true);
    const index = 0;
    expect(GamePlay.move(index)).toBeTruthy();
  });

  it('Grazina FALSE jeigu zaidejas negali daryti ejimo', () => {
    const isMovable = jest.fn(() => false);
    const index = 0;
    expect(GamePlay.move(index)).toBeFalsy();
  });

  it('Grazina zaideja 1', () => {
    GamePlay.getPlayers();
    expect(GamePlay.getPlayerOne().name).toMatch('Player1');
    expect(GamePlay.getPlayerOne().sign).toMatch('X');
  });

  it('grazina zaideja 2', () => {
    GamePlay.getPlayers();
    expect(GamePlay.getPlayerTwo().name).toMatch('Player2');
    expect(GamePlay.getPlayerTwo().sign).toMatch('O');
  });

  it('Grazina kieno ejimas', () => {
    GamePlay.getPlayers();
    expect(GamePlay.whosTurn()).toMatchObject({ name: 'Player1', sign: 'X' });
  });
});
