import { readFileSync } from 'fs'
import * as yaml from 'js-yaml'
import { merge } from 'lodash'

export const loadYamlConfig = () => {
  const envFilePath = [`.env.${process.env.NODE_ENV || 'development'}.yaml`, '.env.yaml']

  const envConfig = loadYamlFile(envFilePath[0])
  const defaultConfig = loadYamlFile(envFilePath[1])

  return merge(defaultConfig, envConfig)
}

const loadYamlFile = (filePath: string) => {
  const fileContents = readFileSync(filePath, 'utf8')
  return yaml.load(fileContents) || {}
}
