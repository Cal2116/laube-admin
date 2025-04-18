import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: ['./src/index.ts'],
  outDir: './dist',
  declaration: true,
  rollup: {
    emitCJS: true,
  },
  externals: ['react', 'react-dom', 'antd', '@ant-design/icons'],
})
