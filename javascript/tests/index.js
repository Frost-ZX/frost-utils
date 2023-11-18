import { spawn } from 'child_process';
import { cwd } from 'process';

// 创建子进程
const child = spawn('node', [
  '--experimental-vm-modules',
  'node_modules/jest/bin/jest.js',
], {
  cwd: cwd(),
  killSignal: 'SIGTERM',
  stdio: 'inherit',
});

// 子进程退出
child.on('close', function (code = null) {
  console.info(`[TEST] End (code: ${code})`);
});

// 子进程异常
child.on('error', function (error) {
  console.error(`[TEST] Error:`);
  console.error(error);
});

// 子进程启动
child.on('spawn', function () {
  console.clear();
  console.info(`[TEST] Start`);
});
