import Cookies from 'universal-cookie'

export default (context, inject: (name: string, v: any) => any) => {
  const cokkies = process.server ? new Cookies(context.req.headers.cookie || '') : new Cookies()
  inject('cookies', cookies)
}
