import { pluginReact } from '@rsbuild/plugin-react';
import { defineConfig, loadEnv } from '@rsbuild/core';

const { publicVars } = loadEnv();

export default defineConfig({
  source: {
    define: {
      ...publicVars,
      BUILD_CHECK: JSON.stringify(process.env.PUBLIC_ENABLE_NEW_BUILD_TOOL === 'true' ? 'enabled' : 'disabled'),
    },
  },
  plugins: [
    pluginReact()
  ],
});
