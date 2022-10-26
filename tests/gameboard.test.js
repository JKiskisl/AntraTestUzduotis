import GameBoard from '../src/js/gameboard';

describe('Gameboard', () => {
  it('Grazina masyva kurio dydis 9', () => {
    expect(GameBoard.get().length).toBe(9);
  });

  it('Grazina masyvo objekta', () => {
    expect(GameBoard.get() instanceof Array).toBeTruthy();
  });

  it('Updatina masyva su duotu indeksu keiciant reiksme duotam zenklui', () => {
    GameBoard.update(0, 'X');
    expect(GameBoard.get()[0]).toBe('X');
  });

  it('Isvalo lentos objekta', () => {
    GameBoard.update(0, 'X');
    GameBoard.clear();
    expect(GameBoard.get()[0]).toBe('');
  });
});
