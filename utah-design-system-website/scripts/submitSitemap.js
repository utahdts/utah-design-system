import { exec } from 'child_process';

// https://www.google.com/ping?sitemap=https://example.com/sitemap.xml

exec(
  'ping -c 3 https://designsystem.utah.gov/sitemap.txt',
  (_err, stdout) => {
    console.log(stdout);
  }
);
