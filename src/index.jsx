import React from 'react';
import ReactDOMServer from 'react-dom/server';
import puppeteer from 'puppeteer';
import { ServerStyleSheet } from 'styled-components';
import Component from './Component'

const stylesheet = new ServerStyleSheet();

const html = ReactDOMServer.renderToString(stylesheet.collectStyles(<Component/>));
const css = stylesheet.getStyleTags();

const renderPDF = async (html, css) => {
  const browser = await puppeteer.launch({
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox'
    ]
  })
  const page = await browser.newPage();

  await page.setContent(`${css}${html}`, {
    waitUntil: 'networkidle0'
  });
  const pdf = await page.pdf({
    format: 'a4',
    path: './teste.pdf',
    printBackground: true,
  });
  await browser.close()
  return pdf
}

renderPDF(html, css)
    .then(() => stylesheet.seal(stylesheet));