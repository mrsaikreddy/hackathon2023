import React, { useEffect } from "react";
import "./MainContent.css";
import ClipboardJS from 'clipboard';

function MainContent() {
  useEffect(() => {
    const copyBtns = document.querySelectorAll('pre code .copy-btn');

    copyBtns.forEach(btn => {
      const code = btn.parentNode;
      const clipboard = new ClipboardJS(btn, {
        text: () => code.innerText,
      });

      clipboard.on('success', () => {
        btn.innerText = 'Copied!';
        setTimeout(() => {
          btn.innerText = 'Copy';
        }, 2000);
      });
    });
  }, []);

  return (
    <main className="main-content">
      <section id="introduction" >
        <h1>Introduction</h1>
        <p>Welcome to the Docsify documentation!</p>
      </section>
      <section id="getting-started">
        <h2>Getting started</h2>
        <p>To get started, you'll need to install Docsify:  Docsify can be configured in many ways. Check out th</p>
        <pre>
            <code>
              some random 
                code that we need to keepidhoeghfowegf kbdfkdsbfasjd
              <button class="copy-btn">Copy</button>
            </code>
        </pre>
        <div class="image-container">
          <img src="https://source.unsplash.com/random/200x200" alt="example image"></img>
        </div>
      </section>
      <section id="configuration">
        <h2>Configuration</h2>
        <p>Docsify can be configured in many ways. Check out the <a href="https://docsify.js.org/#/configuration">configuration guide</a> for more information.</p>
      </section>
      <section id="customization">
        <h2>Customization</h2>
        <p>Docsify can be customized using themes and plugins. <a href="https://docsify.js.org/#/themes">themes</a> and <a href="https://docsify.js.org/#/plugins">plugins</a> pages for more information.</p>
      </section>
      <section id="conclusion">
        <h2>Customigc</h2>
        <p>Docsify can be customized using themes and plugi <a href="https://docsify.js.org/#/themes">themes</a> and <a href="https://docsify.js.org/#/plugins">plugins</a> pages for more information.</p>
      </section>
    </main>
  );
}

export default MainContent;
