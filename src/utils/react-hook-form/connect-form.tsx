import { Fragment, ReactNode } from 'react'
import { useFormContext, UseFormReturn } from 'react-hook-form'

type ConnectFormProps<TFormValues> = {
  children: (methods: UseFormReturn<TFormValues>) => ReactNode
}

const ConnectForm = <TFormValues extends Record<string, any>>({
  children,
}: ConnectFormProps<TFormValues>) => {
  const methods = useFormContext<TFormValues>()

  return <Fragment>{children({ ...methods })}</Fragment>
}

export { ConnectForm }
