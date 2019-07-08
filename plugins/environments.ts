export type EnvironmentVariables = {
  NODE_ENV: string
  browser: boolean
  client: boolean
  mode: 'spa' | 'universal'
  modern: boolean
  server: boolean
  static: boolean
}

export const environments: EnvironmentVariables = {
  NODE_ENV: process.env.NODE_ENV!,
  browser: process.browser!,
  client: process.client!,
  mode: process.mode!,
  modern: process.modern!,
  server: process.server!,
  static: process.static!
}

export default (context, inject: (name: string, v: any) => any) => {
  inject('environments', environments)
}
