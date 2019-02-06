import React, { Component } from "react";
import Tag from "./Tag";
import { _HelperLanguage } from "./_HelperLanguage";

class MultilineInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "", //typed text in input
            languages: [], //language options
            selectedLang: "", //target language for translation
            tags: [], //tags (users) created,
            processing: false
        };
    }

    componentDidMount() {
        //GET LIST OF AVAILABLE LANGUAGES
        _HelperLanguage.getLanguageList().then(list => {
            //SET LANGUAGES IN STATE TO USE IN SELECT LIST
            this.setState({
                languages: list
            });
        });
    }

    //MANAGE CHANGES IN INPUT FIELD AND SELECT LIST
    handleChange = name => event => {
        //prevent input until translation process complete
        if (this.state.processing) return;

        //set state
        this.setState({
            [name]: event.target.value
        });
    };

    handleKeyPress = event => {
        if (event.key === "Enter") {
            
            //TEXT VALIDATION
            if(!this.state.text) return;

            //DISABLE INPUT UNTIL TRANSLATION COMPLETES
            this.setState({
                processing: true
            });

            //TRANSLATE TEXT IN SELECT LANGUAGE
            _HelperLanguage.translate(this.state.selectedLang).then(result => {
                //CREATE A NEW TAG
                this.createTag(result);
            });
        }
    };

    createTag = translatedText => {
        const { tags, text } = this.state;

        //NEW TAG OBJECT
        const newTag = {
            greetingMessage: translatedText,
            name:  text
        };

        //ADD NEW TAG TO LIST OF PREVIOUS TAGS
        const newTags = [...tags, newTag];

        //SET IN STATE
        this.setState({
            tags: newTags,
            text: "", //clear input text
            processing: false //enable input field
        });
    };

    render() {
        const { text, tags, languages, selectedLang } = this.state;

        return (
            <div>
                {/* SELECT INPUT */}
                <label htmlFor="language">Select language</label>
                <select
                    value={selectedLang}
                    onChange={this.handleChange("selectedLang")}
                >
                    <option value="" hidden>
                        --Select user's language--
                    </option>
                    {languages.map((language, index) => (
                        <option value={language.language} key={index}>
                            {language.name}
                        </option>
                    ))}
                </select>

                <label>Enter user's name</label>
                <span className="hint">(Press Enter to add new user)</span>

                {/* LIST TAGS */}
                <div className="wrapper">
                    <div>
                        {tags.map((tag, index) => (
                            <Tag key={index} content={tag} />
                        ))}
                    </div>

                    {/* MULTILINE INPUT */}
                    <input
                        type="text"
                        className="input"
                        value={text}
                        onChange={this.handleChange("text")}
                        onKeyPress={this.handleKeyPress}
                        disabled={!selectedLang}
                        placeholder="Enter name here"
                    />
                </div>
            </div>
        );
    }
}

export default MultilineInput;
