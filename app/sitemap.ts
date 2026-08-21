import type { MetadataRoute } from 'next';
import fs from 'node:fs';
import path from 'node:path';

const baseUrl = 'https://aaisahebfoundation.org';

function getRoutes(directory: string, basePath = ''): string[] {
  const routes: string[] = [];

  if (!fs.existsSync(directory)) {
    return routes;
  }

  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    if (!entry.isDirectory()) {
      continue;
    }

    const name = entry.name;

    // Ignore Next.js special folders
    if (
      name.startsWith('(') ||
      name.startsWith('_') ||
      name.startsWith('[') ||
      name === 'api'
    ) {
      continue;
    }

    const routePath = `${basePath}/${name}`;
    const routeDirectory = path.join(directory, name);

    const hasPage =
      fs.existsSync(path.join(routeDirectory, 'page.tsx')) ||
      fs.existsSync(path.join(routeDirectory, 'page.ts')) ||
      fs.existsSync(path.join(routeDirectory, 'page.jsx')) ||
      fs.existsSync(path.join(routeDirectory, 'page.js'));

    if (hasPage) {
      routes.push(`${routePath}/`);
    }

    routes.push(...getRoutes(routeDirectory, routePath));
  }

  return routes;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const appDirectory = path.join(process.cwd(), 'app');

  const routes = ['/', ...getRoutes(appDirectory)];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));
}