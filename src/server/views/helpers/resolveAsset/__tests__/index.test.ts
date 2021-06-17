import fs from 'fs';

import { resolveAsset } from '../';

describe('resolveAsset handlebars helper', () => {
  const pathPrefix = 'static';

  describe('dev', () => {
    beforeEach(() => {
      process.env.NODE_ENV = 'development';
    });

    test('js path returned', () => {
      const filename = 'bundle.js';
      const path = resolveAsset({ filename });

      expect(path).toBe(`/${pathPrefix}/${filename}`);
    });

    test('empty string returned if not js', () => {
      const filename = 'bundle.css';
      const path = resolveAsset({ filename });

      expect(path).toBe('');
    });
  });

  describe('prod', () => {
    const filename = 'bundle.js';
    const hashedFilename = 'bundle.1234.js';

    beforeEach(() => {
      process.env.NODE_ENV = 'production';
    });

    test('asset path returned if exists in manifest', () => {
      jest
        .spyOn(fs, 'readFileSync')
        .mockImplementation(() => `{"${filename}": "${hashedFilename}"}`);

      const path = resolveAsset({ filename });

      expect(path).toBe(`/${pathPrefix}/${hashedFilename}`);
    });

    test('empty string returned if mainfest does not exist', () => {
      jest.spyOn(fs, 'readFileSync').mockImplementation();

      const path = resolveAsset({ filename });

      expect(path).toBe('');
    });
  });
});
