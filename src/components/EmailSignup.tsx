import { useEffect } from 'react';
import GlassSurface from './GlassSurface';

export default function EmailSignup() {
  useEffect(() => {
    window.REQUIRED_CODE_ERROR_MESSAGE = 'Wähle bitte einen Ländervorwahl aus.';
    window.LOCALE = 'de';
    window.EMAIL_INVALID_MESSAGE = window.SMS_INVALID_MESSAGE = "Die eingegebenen Informationen sind nicht gültig. Bitte überprüfe das Feldformat und versuche es erneut.";
    window.REQUIRED_ERROR_MESSAGE = "Dieses Feld darf nicht leer sein. ";
    window.GENERIC_INVALID_MESSAGE = "Die eingegebenen Informationen sind nicht gültig. Bitte überprüfe das Feldformat und versuche es erneut.";
    window.translation = {
      common: {
        selectedList: '{quantity} Liste ausgewählt',
        selectedLists: '{quantity} Listen ausgewählt',
        selectedOption: '{quantity} ausgewählt',
        selectedOptions: '{quantity} ausgewählt',
      }
    };
    window.AUTOHIDE = Boolean(0);

    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://sibforms.com/forms/end-form/build/sib-styles.css';
    document.head.appendChild(link);

    const script1 = document.createElement('script');
    script1.src = 'https://www.google.com/recaptcha/api.js?render=6LfEGuorAAAAAElSIgvmY-D3MxOwpqJ0erYswGnh&hl=de';
    script1.async = true;
    script1.defer = true;
    document.body.appendChild(script1);

    const script2 = document.createElement('script');
    script2.defer = true;
    script2.src = 'https://sibforms.com/forms/end-form/build/main.js';
    document.body.appendChild(script2);

    return () => {
      if (document.body.contains(script1)) document.body.removeChild(script1);
      if (document.body.contains(script2)) document.body.removeChild(script2);
      if (document.head.contains(link)) document.head.removeChild(link);
    };
  }, []);

  return (
    <div className="w-full max-w-2xl mx-auto">
      <style dangerouslySetInnerHTML={{__html: `
        #sib-container {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif !important;
        }

        #sib-container * {
          font-family: inherit !important;
        }

        #sib-container input:-ms-input-placeholder {
          text-align: left;
          font-family: inherit;
          color: rgba(255, 255, 255, 0.5);
        }

        #sib-container input::placeholder {
          text-align: left;
          font-family: inherit;
          color: rgba(26, 26, 46, 0.5);
        }

        #sib-container textarea::placeholder {
          text-align: left;
          font-family: inherit;
          color: rgba(255, 255, 255, 0.5);
        }

        #sib-container a {
          text-decoration: underline;
          color: #fff;
        }

        .sib-form {
          background-color: transparent !important;
        }

        #sib-container {
          background-color: transparent !important;
          border: none !important;
          max-width: 100% !important;
        }

        #sib-container .sib-form-block {
          color: white !important;
        }

        #sib-container .entry__label {
          color: white !important;
          font-weight: 600 !important;
          margin-bottom: 0.5rem !important;
          display: block !important;
        }

        #sib-container .entry__specification {
          color: rgba(255, 255, 255, 0.7) !important;
        }

        #sib-container .input {
          width: 100%;
          padding: 0.75rem 1rem;
          border-radius: 0.75rem;
          background: rgba(255, 255, 255, 0.9) !important;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2) !important;
          color: #1a1a2e !important;
          font-size: 1rem;
          transition: all 0.2s;
        }

        #sib-container .input:focus {
          outline: none;
          border-color: rgba(255, 255, 255, 0.4) !important;
          background: rgba(255, 255, 255, 0.95) !important;
        }

        .g-recaptcha-v3 {
          display: none !important;
        }

        #sib-container .sib-form-block__button {
          width: 100%;
          padding: 0.875rem 1.5rem;
          border-radius: 0.75rem;
          background: linear-gradient(135deg, #FF6B9D 0%, #FFA6C9 100%) !important;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2) !important;
          color: white !important;
          font-weight: 700 !important;
          font-size: 1rem !important;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(255, 107, 157, 0.3);
        }

        #sib-container .sib-form-block__button:hover {
          background: linear-gradient(135deg, #FF7BA8 0%, #FFB6D4 100%) !important;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(255, 107, 157, 0.4);
        }

        #sib-container .sib-form-block__button:active {
          transform: translateY(0);
          box-shadow: 0 2px 10px rgba(255, 107, 157, 0.3);
        }

        .sib-form-message-panel {
          display: none !important;
        }

        .sib-form-message-panel.sib-form-message-panel--active {
          display: block !important;
        }

        #error-message, #success-message {
          background: rgba(255, 255, 255, 0.15) !important;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2) !important;
          border-radius: 0.75rem !important;
          padding: 1rem !important;
          margin-bottom: 1rem !important;
          max-width: 100% !important;
        }

        #error-message {
          color: #ffcccc !important;
          border-color: rgba(255, 100, 100, 0.3) !important;
        }

        #success-message {
          color: #ccffcc !important;
          border-color: rgba(100, 255, 100, 0.3) !important;
        }

        .entry__error {
          color: #ffcccc !important;
          background: rgba(255, 100, 100, 0.1) !important;
          padding: 0.5rem !important;
          border-radius: 0.5rem !important;
          margin-top: 0.5rem !important;
        }

        .sib-form-message-panel__inner-text {
          color: inherit !important;
        }

        .form__entry {
          margin-bottom: 1.5rem;
        }

        .entry__choice {
          margin-bottom: 0.75rem;
        }
      `}} />

      <GlassSurface
        width="100%"
        height="auto"
        borderRadius={20}
        brightness={50}
        opacity={0.85}
        blur={12}
        backgroundOpacity={0.05}
        saturation={1.1}
      >
        <div className="w-full p-6 md:p-8">
          <div className="sib-form">
            <div id="sib-form-container" className="sib-form-container">
              <div id="error-message" className="sib-form-message-panel">
                <div className="sib-form-message-panel__text sib-form-message-panel__text--center">
                  <svg viewBox="0 0 512 512" className="sib-icon sib-notification__icon" style={{width: '1.5rem', height: '1.5rem', display: 'inline-block', verticalAlign: 'middle', marginRight: '0.5rem'}}>
                    <path d="M256 40c118.621 0 216 96.075 216 216 0 119.291-96.61 216-216 216-119.244 0-216-96.562-216-216 0-119.203 96.602-216 216-216m0-32C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm-11.49 120h22.979c6.823 0 12.274 5.682 11.99 12.5l-7 168c-.268 6.428-5.556 11.5-11.99 11.5h-8.979c-6.433 0-11.722-5.073-11.99-11.5l-7-168c-.283-6.818 5.167-12.5 11.99-12.5zM256 340c-15.464 0-28 12.536-28 28s12.536 28 28 28 28-12.536 28-28-12.536-28-28-28z" fill="currentColor" />
                  </svg>
                  <span className="sib-form-message-panel__inner-text">
                    Deine Anmeldung konnte nicht gespeichert werden. Bitte versuche es erneut.
                  </span>
                </div>
              </div>
              <div id="success-message" className="sib-form-message-panel">
                <div className="sib-form-message-panel__text sib-form-message-panel__text--center">
                  <svg viewBox="0 0 512 512" className="sib-icon sib-notification__icon" style={{width: '1.5rem', height: '1.5rem', display: 'inline-block', verticalAlign: 'middle', marginRight: '0.5rem'}}>
                    <path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 464c-118.664 0-216-96.055-216-216 0-118.663 96.055-216 216-216 118.664 0 216 96.055 216 216 0 118.663-96.055 216-216 216zm141.63-274.961L217.15 376.071c-4.705 4.667-12.303 4.637-16.97-.068l-85.878-86.572c-4.667-4.705-4.637-12.303.068-16.97l8.52-8.451c4.705-4.667 12.303-4.637 16.97.068l68.976 69.533 163.441-162.13c4.705-4.667 12.303-4.637 16.97.068l8.451 8.52c4.668 4.705 4.637 12.303-.068 16.97z" fill="currentColor" />
                  </svg>
                  <span className="sib-form-message-panel__inner-text">
                    Deine Anmeldung war erfolgreich.
                  </span>
                </div>
              </div>
              <div id="sib-container" className="sib-container--large sib-container--vertical">
                <form id="sib-form" method="POST" action="https://21b6fa3a.sibforms.com/serve/MUIFAEo3RLzN4UaPLVvdVSz1g5oB-EY6I7IqFqR_ymKtPAQu6JXNSmC2mx8kXOs2YLC6YNsqCFn6QU0HiKMmOthcSMnO-H2siq5TvBVvBFrvy1R5mWj5jeZ-Z8IogLz8zmNHbFKF8FqdcKnV2yo2RbrIHgczKJkeLQAqboJVgI9Q3vNLuWbesiWN34j3c02Ma0Hp5RKEUCkRbTzs" data-type="subscription">
                  <div style={{padding: '8px 0'}}>
                    <div className="sib-form-block" style={{fontSize: '2rem', textAlign: 'center', fontWeight: 700}}>
                      <p>Newsletter</p>
                    </div>
                  </div>
                  <div style={{padding: '8px 0'}}>
                    <div className="sib-form-block" style={{fontSize: '1rem', textAlign: 'center'}}>
                      <div className="sib-text-form-block">
                        <p>Melde dich zu unserem Newsletter an, um auf dem Laufenden zu bleiben.</p>
                      </div>
                    </div>
                  </div>
                  <div style={{padding: '8px 0'}}>
                    <div className="sib-input sib-form-block">
                      <div className="form__entry entry_block">
                        <div className="form__label-row">
                          <label className="entry__label" htmlFor="EMAIL" data-required="*">
                            Gib deine E-Mail-Adresse ein, um dich anzumelden
                          </label>
                          <div className="entry__field">
                            <input
                              className="input"
                              type="text"
                              id="EMAIL"
                              name="EMAIL"
                              autoComplete="off"
                              placeholder="deine@email.com"
                              data-required="true"
                              required
                            />
                          </div>
                        </div>
                        <label className="entry__error entry__error--primary" style={{fontSize: '16px', textAlign: 'left', fontFamily: 'Helvetica, sans-serif', color: '#661d1d', backgroundColor: '#ffeded', borderRadius: '3px', borderColor: '#ff4949'}}></label>
                        <label className="entry__specification">
                          Gib bitte deine E-Mail-Adresse für die Anmeldung an, z. B. abc@xyz.com.
                        </label>
                      </div>
                    </div>
                  </div>
                  <div style={{padding: '8px 0'}}>
                    <div
                      className="g-recaptcha-v3"
                      data-sitekey="6LfEGuorAAAAAElSIgvmY-D3MxOwpqJ0erYswGnh"
                    ></div>
                  </div>
                  <div style={{padding: '8px 0'}}>
                    <div className="sib-form-block">
                      <button
                        className="sib-form-block__button sib-form-block__button-with-loader"
                        form="sib-form"
                        type="submit"
                      >
                        <svg className="icon clickable__icon progress-indicator__icon sib-hide-loader-icon" viewBox="0 0 512 512" style={{width: '1rem', height: '1rem', display: 'none'}}>
                          <path d="M460.116 373.846l-20.823-12.022c-5.541-3.199-7.54-10.159-4.663-15.874 30.137-59.886 28.343-131.652-5.386-189.946-33.641-58.394-94.896-95.833-161.827-99.676C261.028 55.961 256 50.751 256 44.352V20.309c0-6.904 5.808-12.337 12.703-11.982 83.556 4.306 160.163 50.864 202.11 123.677 42.063 72.696 44.079 162.316 6.031 236.832-3.14 6.148-10.75 8.461-16.728 5.01z" fill="currentColor" />
                        </svg>
                        ANMELDEN
                      </button>
                    </div>
                  </div>

                  <input type="text" name="email_address_check" value="" className="input--hidden" style={{position: 'absolute', left: '-5000px'}} />
                  <input type="hidden" name="locale" value="de" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </GlassSurface>

    </div>
  );
}

declare global {
  interface Window {
    REQUIRED_CODE_ERROR_MESSAGE: string;
    LOCALE: string;
    EMAIL_INVALID_MESSAGE: string;
    SMS_INVALID_MESSAGE: string;
    REQUIRED_ERROR_MESSAGE: string;
    GENERIC_INVALID_MESSAGE: string;
    translation: {
      common: {
        selectedList: string;
        selectedLists: string;
        selectedOption: string;
        selectedOptions: string;
      };
    };
    AUTOHIDE: boolean;
  }
}
