import { mount } from 'enzyme';
import Home from './Home';

import { LanguageProvider } from '../context/languageContext';
import { PokeProvider } from '../context/pokecontext';

const setup = ({ language }) => {
  language = language || 'en';

  return mount(
    <PokeProvider>
      <LanguageProvider value={language}>
        <Home />
      </LanguageProvider>
    </PokeProvider>
  );
}

describe('Language picker tests', () => {
  test('renders correctly welcome message in english', () => {
    const wrapper = setup({});
    expect(wrapper.find('#welcome-title').text()).toBe('Welcome to PokeDex version 2.0');
  });

  test('renders  correctly welcome message in spanish', () => {
    const wrapper = setup({ language: 'esp' });
    expect(wrapper.find('#welcome-title').text()).toBe('Bienvenido a la PokeDex versión 2.0');
  })
})
