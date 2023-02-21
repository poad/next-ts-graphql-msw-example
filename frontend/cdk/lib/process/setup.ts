import * as childProcess from 'child_process';
import * as fs from 'fs';

export const nextJsExport = ({
  apiUrl,
}: {
  apiUrl: string;
}) => {
  [`${process.cwd()}/../.next`, `${process.cwd()}/../out`].forEach((dir) => {
    if (fs.existsSync(dir)) {
      fs.rmdirSync(dir, {
        recursive: true,
      });
    }
  });
  ['pnpm install'].forEach((cmd) => {
    childProcess.execSync(cmd, {
      cwd: `${process.cwd()}/../`,
      stdio: ['ignore', 'inherit', 'inherit'],
      env: { ...process.env },
      shell: 'bash',
    });
  });

  console.log(apiUrl);

  ['pnpm all'].forEach((cmd) => {
    childProcess.execSync(cmd, {
      cwd: `${process.cwd()}/../`,
      stdio: ['ignore', 'inherit', 'inherit'],
      env: {
        ...process.env,
        NEXT_PUBLIC_API_URL: apiUrl,
      },
      shell: 'bash',
    });
  });
};
