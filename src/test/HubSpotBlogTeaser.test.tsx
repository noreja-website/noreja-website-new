import { render } from '@testing-library/react'
import { vi, describe, test, expect, beforeEach, afterEach } from 'vitest'
import { HubSpotBlogTeaser } from '@/components/HubSpotBlogTeaser'

describe('HubSpotBlogTeaser Script Loading Tests', () => {
  beforeEach(() => {
    // Clear any existing scripts
    document.head.innerHTML = ''
    // Reset document.getElementById mock
    const mockElement = document.createElement('div')
    mockElement.id = 'hubspot-blog-teaser'
    vi.spyOn(document, 'getElementById').mockReturnValue(mockElement)
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  test('renders container element for blog posts', () => {
    const { getByText } = render(<HubSpotBlogTeaser />)
    
    expect(getByText('Latest Insights')).toBeInTheDocument()
    expect(getByText('Stay updated with our latest blog posts and industry insights.')).toBeInTheDocument()
  })

  test('creates target container with correct ID', () => {
    const { container } = render(<HubSpotBlogTeaser />)
    
    // Check that the target container exists
    const blogContainer = container.querySelector('#hubspot-blog-teaser')
    expect(blogContainer).toBeInTheDocument()
  })

  test('handles script loading safely on client-side', () => {
    // Mock document.createElement to track script creation
    const mockScript = document.createElement('script')
    const createElementSpy = vi.spyOn(document, 'createElement').mockReturnValue(mockScript)
    const appendChildSpy = vi.spyOn(document.head, 'appendChild').mockImplementation(() => mockScript)

    const { getByText } = render(<HubSpotBlogTeaser />)

    // The component should be rendered without errors
    expect(getByText('Latest Insights')).toBeInTheDocument()

    // Cleanup spies
    createElementSpy.mockRestore()
    appendChildSpy.mockRestore()
  })

  test('component unmounts without errors', () => {
    const { unmount } = render(<HubSpotBlogTeaser />)
    
    // Should unmount without throwing errors
    expect(() => unmount()).not.toThrow()
  })

  test('respects maxItems prop', () => {
    const { getByText } = render(<HubSpotBlogTeaser maxItems={5} />)
    
    // Component should render normally with maxItems prop
    expect(getByText('Latest Insights')).toBeInTheDocument()
  })
})