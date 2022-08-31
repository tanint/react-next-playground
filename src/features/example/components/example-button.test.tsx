import { render } from '@testing-library/react'

import { ExampleButton } from './example-button'

describe('Example Button component', () => {
  const { baseElement } = render(<ExampleButton />)
  it('should render successfully', () => {
    expect(baseElement).toBeTruthy()
  })
})
