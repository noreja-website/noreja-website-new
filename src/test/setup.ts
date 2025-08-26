import '@testing-library/jest-dom'
import { vi } from 'vitest'

// Mock window.hbspt for HubSpot tests  
Object.defineProperty(window, 'hbspt', {
  value: {
    forms: {
      create: vi.fn(),
    },
  },
  writable: true,
})

// Mock sessionStorage
Object.defineProperty(window, 'sessionStorage', {
  value: {
    getItem: vi.fn(),
    setItem: vi.fn(),
    removeItem: vi.fn(),
    clear: vi.fn(),
  },
  writable: true,
})