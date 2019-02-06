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
          console.log(error);
          return [];
      }))
}

/**
 * 
 * @param {string} target language in which text has to be translated
 */
const translate = (target = 'en') => {
    console.log(target);
    
    return _HttpClient.post(`https://translation.googleapis.com/language/translate/v2?key=${apiKey}`, {
        "source": "en",
        "target": target,
        "q": [
         "Hello"
        ]
    })
    .then(response=> {
      return response.data.data.translations[0].translatedText;
    })
}

//EXPORT HELPER METHODS
export const _HelperLanguage = {
    getLanguageList,
    translate
}