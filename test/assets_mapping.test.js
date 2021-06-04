const assetsMapping = require('../lib/assets_mapping');

describe('is_assets.js', () => {

  it('mapping successful', () => {
    expect(assetsMapping('jpeg')).toBe('image/jpeg');
    expect(assetsMapping('html')).toBe('text/html');
    expect(assetsMapping('json')).toBe('application/json');
    expect(assetsMapping('js')).toBe('application/x-javascript');
  });

  it('mapping successful with custom map', () => {
    const myAssetsMapping = assetsMapping({
      "txt": "text/plain",
      "mp4": "video/mp4"
    });

    expect(myAssetsMapping('jpg')).toBe('image/jpeg');
    expect(myAssetsMapping('json')).toBe('application/json');
    expect(myAssetsMapping('txt')).toBe('text/plain');
    expect(myAssetsMapping('mp4')).toBe('video/mp4');

    expect(assetsMapping('jpg')).toBe('image/jpeg');
    expect(assetsMapping('mp4')).toBeUndefined();
  });

  it('mapping failed', () => {
    expect(assetsMapping('jsp')).toBeUndefined();
  });
});