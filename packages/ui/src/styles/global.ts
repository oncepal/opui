export const globalStyles = {
  html: {
    boxSizing: 'border-box',
    webkitTextSizeAdjust: '100%',
    wordBreak: 'normal',
    mozTabSize: '4',
    tabSize: '4',
    scrollBehavior: 'smooth',
  },
  '*, ::before, ::after': {
    backgroundRepeat: 'no-repeat',
    boxSizing: 'inherit',
  },
  '::before, ::after': {
    textDecoration: 'inherit',
    verticalAlign: 'inherit',
  },
  '*': {
    padding: '0',
    margin: '0',
  },
  body: {
    fontFamily: `Poppins,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif`,
  },
  'ol, ul': {
    listStyle: 'none',
  },
  'li':{
    cursor:'pointer'
  },
  hr: {
    overflow: 'visible',
    height: '0',
    color: 'inherit',
  },
  'details, main': {
    display: 'block',
  },
  summary: {
    display: 'list-item',
  },
  small: {
    fontSize: '80%',
  },
  '[hidden]': {
    display: 'none',
  },
  'abbr[title]': {
    borderBottom: 'none',
    textDecoration: 'underline dotted',
  },
  a: {
    textDecoration: 'none',
    color: 'black',
    backgroundColor: 'transparent',
  },
  'a:active, a:hover': {
    outlineWidth: '0',
  },
  'code, kbd, pre, samp': {
    fontFamily: 'monospace, monospace',
  },
  pre: {
    fontSize: '1em',
  },
  'b, strong': {
    fontWeight: 'bolder',
  },
  'sub, sup': {
    fontSize: '75%',
    lineHeight: '0',
    position: 'relative',
    verticalAlign: 'baseline',
  },
  sub: {
    bottom: '-0.25em',
  },
  sup: {
    top: '-0.5em',
  },
  table: {
    borderColor: 'inherit',
    textIndent: '0',
  },
  'input::-webkit-outer-spin-button': {
    webkitAppearance: 'none !important',
    margin: 0,
  },
  'input::-webkit-inner-spin-button': {
    webkitAppearance: 'none !important',
    margin: 0,
  },
  '[disabled]': {
    PointerEvent: 'none',
    opacity: '.25',
    cursor: 'default',
  },
  "[type='number']::-webkit-outer-spin-button": {
    webkitAppearance: 'none',
    height: 'auto',
  },
  "[type='number']::-webkit-inner-spin-button": {
    webkitAppearance: 'textfield',
    height: 'auto',
  },
  "[type='search']": {
    webkitAppearance: 'textfield',
    outlineOffset: -2,
  },
  "[type='search']::-webkit-search-decoration": {
    webkitAppearance: 'none',
  },
  textarea: {
    whiteSpace: 'revert',
    overflow: 'auto',
    resize: 'vertical',
  },
  'button, input, optgroup, select, textarea': {
    font: 'inherit',
  },
  optgroup: {
    fontWeight: 'bold',
  },
  button: {
    overflow: 'visible',
  },
  'button, select': {
    textTransform: 'none',
  },
  "button, [type='button'], [type='reset'], [type='submit'], [role='button']": {
    cursor: 'pointer',
    color: 'inherit',
  },
  "button::-moz-focus-inner, [type='button']::-moz-focus-inner, [type='reset']::-moz-focus-inner, [type='submit']::-moz-focus-inner":
    {
      borderStyle: 'none',
      padding: '0',
    },
  "button:-moz-focusring, [type='button']::-moz-focus-inner, [type='reset']::-moz-focus-inner, [type='submit']::-moz-focus-inner":
    {
      outline: '1px dotted ButtonText',
    },
  "button, html [type='button'], [type='reset'], [type='submit']": {
    webkitAppearance: 'button',
  },
  'button, input, select, textarea': {
    backgroundColor: 'transparent',
    borderStyle: 'none',
    border: 'none',
  },
  'a:focus, button:focus, input:focus, select:focus, textarea:focus': {
    outlineWidth: '0',
  },
  select: {
    mozAppearance: 'none',
    webkitAppearance: 'none',
  },
  'select::-ms-expand': {
    display: 'none',
  },
  'select::-ms-value': {
    color: 'currentColor',
  },
  legend: {
    border: '0',
    color: 'inherit',
    display: 'table',
    maxWidth: '100%',
    whiteSpace: 'normal',
  },
  '::-webkit-file-upload-button': {
    webkitAppearance: 'button',
    color: 'inherit',
    font: 'inherit',
  },
  img: {
    maxWidth: '100%',
    borderStyle: 'none',
  },
  progress: {
    verticalAlign: 'baseline',
  },
  "[aria-busy='true']": {
    cursor: 'progress',
  },
  '[aria-controls]': {
    cursor: 'pointer',
  },
  "[aria-disabled='true']": {
    cursor: 'default',
  },
};
