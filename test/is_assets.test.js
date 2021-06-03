const isAssets = require('../lib/is_assets');

describe('is_assets.js', () => {

  it('mapping successful', () => {
    expect(isAssets('jpeg')).toBe('image/jpeg');
    expect(isAssets('html')).toBe('text/html');
    expect(isAssets('json')).toBe('application/json');
    expect(isAssets('js')).toBe('application/x-javascript');
  });

  it('mapping successful with custom map', () => {
    const myIsAssets = isAssets({
      "txt": "text/plain",
      "mp4": "video/mp4"
    });

    expect(myIsAssets('jpg')).toBe('image/jpeg');
    expect(myIsAssets('json')).toBe('application/json');
    expect(myIsAssets('txt')).toBe('text/plain');
    expect(myIsAssets('mp4')).toBe('video/mp4');

    expect(isAssets('jpg')).toBe('image/jpeg');
    expect(isAssets('mp4')).toBeUndefined();
  });

  it('mapping failed', () => {
    expect(isAssets('jsp')).toBeUndefined();
  });
});