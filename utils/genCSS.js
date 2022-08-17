// TODO: Make proper RGB syntax for colors to be added in
function yada(input) {
  var colorString = `rbg ${input}`;
  return colorString;
}

function genSTYLE(data) {

  yada(data);

  return `:root {

    --main-bg-clr: ${colorString};
    --main-off-wht: ${colorString};
    }
    
    
    /*  =========================  
            GENERAL ELEMENTS
        ========================= */
    
    body {
      background-color: var(--main-bg-clr);
      color: var(--main-off-wht);
    }
    
    
    /*  =========================  
          GENERAL CLASSES (think Bootstrap)
        ========================= */
    
    /* === All Flexbox Function === */
    
    /* === All Borderstyle === */
    
    
    /*  =========================  
            SPECIFIC CLASSES (think Javascript)
        ========================= */
    
    /* Make every div a button */
    
    
    
    /*  =========================  
                  IDs
        ========================= */
    
    /* === HEADER === */
    
    /* === NAV === */
    
    /* === BODY === */
    /* Specific Button */
    /* Specific Div */
    
    /* === FOOTER === */
    
    
    /*  =========================  
            ACCESSIBILITY
        ========================= */
    @media (max-width: 690px) {
        
    }
    
    @media (max-width: 500px) {
        
    }`;
}

function genRESET(data) {
  return `html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, font, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    font-weight: inherit;
    font-style: inherit;
    font-size: 100%;
    font-family: inherit;
    vertical-align: baseline;
  }
  /* remember to define focus styles! */
  :focus {
    outline: 0;
  }
  body {
    line-height: 1;
    color: black;
    background: white;
  }
  ol, ul {
    list-style: none;
  }
  /* tables still need 'cellspacing="0"' in the markup */
  table {
    border-collapse: separate;
    border-spacing: 0;
  }
  caption, th, td {
    text-align: left;
    font-weight: normal;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: "";
  }
  blockquote, q {
    quotes: "" "";
  }
  
  /* Source: Meyer Reset */
  /* http://meyerweb.com/eric/thoughts/2007/05/01/reset-reloaded/ */`;
}

module.exports = genSTYLE;
module.exports = genRESET;
