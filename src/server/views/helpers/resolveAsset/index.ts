import fs from 'fs';
import path from 'path';

interface resolveAssetParams {
  filename: string;
  outputPath?: string;
  pathPrefix?: string;
}

function resolveAsset({
  filename,
  outputPath = 'public',
  pathPrefix = 'static',
}: resolveAssetParams): string {
  const isDevelopment = process.env.NODE_ENV === 'development';

  if (isDevelopment) {
    if (filename.includes('.js')) {
      return `/${pathPrefix}/${filename}`;
    }
    return '';
  }

  try {
    const manifest: { [key: string]: string } = JSON.parse(
      fs.readFileSync(
        path.join(process.cwd(), outputPath, 'manifest.json'),
        'utf-8',
      ),
    );

    return `/${pathPrefix}/${manifest[filename]}`;
  } catch {
    return '';
  }
}

export { resolveAsset, resolveAssetParams };
