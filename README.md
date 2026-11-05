# Musztarda

Ciepły, musztardowy **jasny** motyw dla Claude Code (bez trybu ciemnego).

| Rola | Kolor |
| --- | --- |
| Tło aplikacji | `#fbf8f1` (kremowe) |
| Panele, karty, pole wiadomości | `#f3eee3` |
| Linie i obramowania | `#d9cfbc` |
| Główny tekst | `#2a2418` |
| Tekst pomocniczy (daty, podpisy) | `#675e4f` |
| Akcent (zawsze z ciemnym tekstem `#2a2418`) | `#ddc05d` |
| Podświetlenie (zaznaczenie, najechanie) | `#f4e9c4` |
| Linki i obwódka fokusu | `#7d6210` |

Każda para tekst/tło ma kontrast co najmniej 4.5:1 (WCAG AA): główny tekst 12.7–14.5:1, tekst pomocniczy 5.3–6.0:1, linki 4.8–5.5:1, ciemny tekst na akcencie 8.6:1. Kolory statusów (sukces, błąd, ostrzeżenie i inne) są przyciemnione, żeby też spełniały ten próg.

## Co robi

- `themes/musztarda.json`: motyw kolorów `custom:musztarda:musztarda` oparty na jasnym motywie.
- `hooks/register.tsx`: przy pierwszym uruchomieniu włącza ten motyw (tylko raz, więc późniejszy wybór w `/theme` zostaje), a w aplikacji na komputer i w aplikacji mobilnej rysuje kremowe tło pod rozmową z panelami w kolorze `#f3eee3`.

Elementy, które aplikacja rysuje własnymi stylami (np. przycisk wysyłania), mogą zostać w domyślnych kolorach.

## Instalacja

W sesji Claude Code w terminalu wpisz:

```
/plugin install musztarda --marketplace skocz-hub/Musztarda
```

Potem potwierdź dodanie marketplace (`y`) i wybierz zakres.

Z powłoki:

```bash
claude plugin install musztarda --marketplace skocz-hub/Musztarda
```

W aplikacji na komputer, gdzie `/plugin` nie działa: kliknij + obok pola wiadomości, potem Plugins, Add marketplace z `skocz-hub/Musztarda`, a na końcu Add plugin.

Aby wrócić do poprzedniego wyglądu, wybierz inny motyw w `/theme`.
