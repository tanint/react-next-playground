import { ApiErrorData } from '@/types'
import isArray from 'lodash/isArray'

export const getErrorMessage = (error: ApiErrorData) => {
  if (error.response?.data) {
    const errorData = error.response.data

    if (typeof errorData.error === 'string') {
      return errorData.error
    }

    if (isArray(errorData.error)) {
      return errorData.error.join('\n')
    }

    const errorMsg = error.response.data.message || 'Something went wrong'
    return errorMsg
  }

  return 'Something went wrong'
}
