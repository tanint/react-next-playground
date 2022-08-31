import { AxiosError } from 'axios'

export type LanguageRecord<T = string> = Record<'th' | 'en', T>

export type ListFilters = {
  limit?: number
  page?: number
}

export type Pagination<T = unknown> = {
  limit: number
  currentPage: number
  totalPage: number
  totalRecord: number
  records: T[]
}

export type Auth0AccessTokenJWT = {
  iss: string
  sub: string
  aud: string[]
  iat: number
  exp: number
  azp: string
  scope: string
  permissions: string[]
}

export type ErrorData = {
  error: string | string[]
  message: string
  statusCode: number
}

export type ApiErrorData = AxiosError<ErrorData>
