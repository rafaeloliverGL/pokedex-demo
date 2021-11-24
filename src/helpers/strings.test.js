import stringsModule from './strings'
const { getStringByLanguage } = stringsModule

const strings = {
  en: { welcome: 'Welcome to PokeDex version 2.0' },
  esp: { welcome: 'Bienvenido a la PokeDex versión 2.0' },
  latin: {},
}

describe('language string tests', () => {
  const mockWarn = jest.fn()
  let originalWarn;

  beforeEach(() => {
    originalWarn = console.warn
    console.warn = mockWarn
  })

  afterEach(() => {
    console.warn = originalWarn
  })

  test('returns correct welcome string for english', () => {
    const string = getStringByLanguage('en', 'welcome', strings)
    expect(string).toBe('Welcome to PokeDex version 2.0')
  })

  test('returns the correct welcome string for spanish', () => {
    const string = getStringByLanguage('esp', 'welcome', strings)
    expect(string).toBe('Bienvenido a la PokeDex versión 2.0')
    expect(mockWarn).not.toHaveBeenCalled()
  })

  test('returns default (English) string when language code does not exist', () => {
    const string = getStringByLanguage('invalidLanguage', 'welcome', strings)
    expect(string).toBe('Welcome to PokeDex version 2.0')
    expect(mockWarn).toHaveBeenCalledWith('Could not get string [invalidLanguage] for key [welcome]')
  })

  test('returns default (English) string when message code does not exist for language', () => {
    const string = getStringByLanguage('latin', 'welcome', strings)
    expect(string).toBe('Welcome to PokeDex version 2.0')
    expect(mockWarn).toHaveBeenCalledWith('Could not get string [latin] for key [welcome]')
  })
});