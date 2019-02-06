import _HttpClient from "../_HttpClient";

//API KEY FOR GOOGLE TRANSLATION API
const apiKey = 'AIzaSyD-hFXLVHIXBM0PjTQ2AlDkDae_iff_RUs';

/**
 * get list of languages from google api
 */
const getLanguageList =() => {
    return _HttpClient.get(`https://translation.googleapis.com/language/translate/v2/languages?target=en&key=${apiKey}`)
    .then(response=> {
        return response.data.data.languages
      },
      (error => {
          //HANDLE ERROR
          return [];
      }))
}

/**
 * 
 * @param {string} target language in which text has to be translated
 */
const translate = (target = 'en') => {
    return _HttpClient.post(`https://translation.googleapis.com/language/translate/v2?key=${apiKey}`, {
        /**
         * if source is provided, willnot translate for source language
         * e.g. source: 'en' then translation to english will return nothing
         */
        "target": target,
        "q": [
         "Hello"
        ]
    })
    .then(response=> {
      return response.data.data.translations[0].translatedText;
    }, 
    (error => {
        //HANDLE HTTP ERROR
    }))
}

//EXPORT HELPER METHODS
export const _HelperLanguage = {
    getLanguageList,
    translate
}