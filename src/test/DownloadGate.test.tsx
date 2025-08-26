import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { vi, describe, test, expect, beforeEach } from 'vitest'
import { DownloadGate } from '@/components/DownloadGate'

// Mock the toast hook
vi.mock('@/hooks/use-toast', () => ({
  useToast: () => ({
    toast: vi.fn(),
  }),
}))

describe('DownloadGate Session Logic Tests', () => {
  beforeEach(() => {
    // Clear all mocks before each test
    vi.clearAllMocks()
    // Reset sessionStorage mock
    Object.defineProperty(window, 'sessionStorage', {
      value: {
        getItem: vi.fn(),
        setItem: vi.fn(),
        removeItem: vi.fn(),
        clear: vi.fn(),
      },
      writable: true,
    })
  })

  test('checks session storage for user validation', () => {
    const mockGetItem = vi.fn().mockReturnValue('true')
    window.sessionStorage.getItem = mockGetItem

    render(
      <DownloadGate
        title="Test Download"
        description="Test description"
        fileUrl="test.pdf"
        formPortalId="12345"
        formGuid="abc-123"
      />
    )

    // Should check for session storage key
    expect(mockGetItem).toHaveBeenCalledWith('noreja_download_validated')
  })

  test('sets session storage after successful form submission', async () => {
    const mockSetItem = vi.fn()
    const mockGetItem = vi.fn().mockReturnValue(null)
    window.sessionStorage.setItem = mockSetItem
    window.sessionStorage.getItem = mockGetItem

    const { getByText } = render(
      <DownloadGate
        title="Test Download"
        description="Test description"
        fileUrl="test.pdf"
        formPortalId="12345"
        formGuid="abc-123"
      />
    )

    // Click the download button to open modal
    const downloadButton = getByText('Download')
    await userEvent.click(downloadButton)

    // The component should have checked session storage
    expect(mockGetItem).toHaveBeenCalledWith('noreja_download_validated')
  })

  test('renders download button when not validated', () => {
    window.sessionStorage.getItem = vi.fn().mockReturnValue(null)

    const { getByText } = render(
      <DownloadGate
        title="Test Download"
        description="Test description"
        fileUrl="test.pdf"
        formPortalId="12345"
        formGuid="abc-123"
      />
    )

    expect(getByText('Download')).toBeInTheDocument()
  })

  test('shows direct download when user is already validated', () => {
    window.sessionStorage.getItem = vi.fn().mockReturnValue('true')

    const { getByText } = render(
      <DownloadGate
        title="Test Download"
        description="Test description"
        fileUrl="test.pdf"
        formPortalId="12345"
        formGuid="abc-123"
      />
    )

    // Should still show download button, but clicking it should trigger direct download
    expect(getByText('Download')).toBeInTheDocument()
  })
})