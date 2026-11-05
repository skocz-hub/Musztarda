import type { Register } from 'claude-code'

/** Paleta moda: jedno miejsce prawdy dla tła sceny i paneli. */
const APP_BG = '#fbf8f1'
const PANEL = '#f3eee3'

/** Motyw z themes/musztarda.json, tak jak nazywa go ustawienie `theme`. */
const THEME = 'custom:musztarda:musztarda'
const APPLIED_KEY = 'themeApplied'

export const register: Register = on => {
  on('session.start', async ($, e, next) => {
    const result = await next(e)

    // Aplikacja (desktop / mobile): kremowe tło pod rozmową, panele w kolorze #f3eee3.
    await $.ui.backdrop({
      id: 'musztarda',
      colorScheme: 'light',
      glass: { blur: 0, tint: PANEL, opacity: 1 },
    })

    // Motyw kolorów: ustawiany raz, żeby nie nadpisywać późniejszego wyboru w /theme.
    if ((await $.store.get(APPLIED_KEY)) !== true) {
      const row = (await $.config.list()).find(r => r.key === 'theme')
      if (row?.value !== THEME) {
        const { deny } = await $.config.set({ key: 'theme', value: THEME })
        if (deny !== undefined) {
          $.ui.toast(`musztarda: nie udało się włączyć motywu (${deny})`)
          return result
        }
      }
      await $.store.set(APPLIED_KEY, true)
      $.ui.toast('Motyw Musztarda włączony')
    }

    return result
  })

  // Sama scena tła: pełna, jednolita kremowa płaszczyzna.
  on('ui.render', { component: 'Backdrop' }, ($, e, next) => {
    if (e.props.plugin !== $.plugin.name) return next(e)
    const { Box } = $.ui.resolve(e)
    return <Box width="100%" height="100%" backgroundColor={APP_BG} />
  })
}
