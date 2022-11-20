# izigosocial

## 1. Resources
Icons cdn: [iconscout cdn](https://iconscout.com/unicons) 

Unicons search: [inconscout.com](https://iconscout.com/unicons/explore/line)

Google fonts: poppins from [fonts.google.com](https://fonts.google.com/specimen/Poppins?query=poppins)

## 2. CSS
1. Zero out everything <br>
To ensure that elements don't have any style at creation so that we don't expiriment unexpected behavior when styling

Example: 
```
*, *::before *::after {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
    border: none;
}
```

2. Define variables <br>
hsl stands for Hue, Saturation and Lightness.
- **Hue** is a degree on the color wheel from 0 to 360. 0 is red, 120 is green, 240 is blue.

- **Saturation** is a percentage value; 0% means a shade of gray and 100% is the full color.

- **Lightness** is also a percentage; 0% is black, 100% is white.

Example:
```
:root {
    --color-white: hsl(252, 30%, 100%);
    --color-light: hsl(252, 30%, 95%);
    --color-gray: hsl(252, 15%, 65%);
    --color-primary: hsl(252, 75%, 60%);
    --color-secondary: hsl(252, 100%, 90%);
    --color-success: hsl(120, 95%, 65%);
    --color-danger: hsl(0, 95%, 65%);
    --color-dark: hsl(252, 30%, 17%);
    --color-black: hsl(252, 30%, 10%);
}
```

3. CSS Properties
- **z-index**: The z-index property specifies the stack order of an element. Elements with a higher value will be deplayed on top of elements with the lower values

