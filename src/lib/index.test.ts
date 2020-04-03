import { detectEnglish, detectJapanese, main } from '.';

describe('main()', () => {
  it('print message', () => {
    const log = jest.spyOn(console, 'log').mockReturnValue();
    main();
    expect(log).nthCalledWith(1, 'Hello, world');
    log.mockRestore();
  })
});

describe('detect()', () => {
  it('detect message', async () => {
    jest.setTimeout(30000);
    const imageUri = 'https://tesseract.projectnaptha.com/img/eng_bw.png';
    const expected = 'Mild Splendour of the various-vested Night!\n' +
      'Mother of wildly-working visions! haill\n' +
      'I watch thy gliding, while with watery light\n' +
      'Thy weak eye glimmers through a fleecy veil;\n' +
      'And when thou lovest thy pale orb to shroud\n' +
      'Behind the gather’d blackness lost on high;\n' +
      'And when thou dartest from the wind-rent cloud\n' +
      'Thy placid lightning o’er the awaken’d sky.\n';

    const log = jest.spyOn(console, 'log').mockReturnValue();
    await detectEnglish(imageUri);
    expect(log).nthCalledWith(1, expected);
    log.mockRestore();

    jest.setTimeout(5000);
  });

  it('detect message from licence', async () => {
    jest.setTimeout(30000);

    const imageUri = 'https://www.npa.go.jp/policies/application/license_renewal/img/license.jpg';
    const expected = '東京都千代田区霞が関2ーー ー②·\n' +
      '| さ せ | る 和 0① * 0⑤』0⑦⑧ ⑫③④⑤·\n' +
      'yo 眼 鎖 等 菫 に\n' +
      '見 本 * 詣·\n' +
      'き 引 第 0①②③④⑤⑥⑦⑧⑨00 三 菫〟\n' +
      'Fg①⑤f0④⑧0①⑧ l 誠 国 に に 陳 呼 圖 護\n' +
      '平成]7年06月0ー日 陳\n' +
      '巳 談 ② ⑧①0①i e E 國 暁 固 Seews\n';

    const log = jest.spyOn(console, 'log').mockReturnValue();
    await detectJapanese(imageUri);
    expect(log).nthCalledWith(1, expected);
    log.mockRestore();

    jest.setTimeout(5000);
  });


});
