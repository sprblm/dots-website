const fs = require("fs")
const path = require("path");
const YAML = require('yaml')

module.exports = (content) => {
    let list = YAML.parse(fs.readFileSync(
        path.join(__dirname, '..', '..', 'dots-patterns', 'glossary', 'list.yml').toString(), 'utf8'
    ))
    let glossaryRegex = '(?:\s'
    let definitionByWord = {}

    list.forEach(row => {
        if (row.word.length > 0) {
            glossaryRegex += row.word
            definitionByWord[row.word.toLowerCase()] = row
            definitionByWord[row.word.toLowerCase() + 's'] = row
        }
        glossaryRegex += '[s|\s]|'
    })

    glossaryRegex = glossaryRegex.slice(0, glossaryRegex.length - 1)
    glossaryRegex += ')'

    let re = new RegExp(glossaryRegex, "ig")
    return content.replace(re, (match, index) => {
        let def = definitionByWord[match]
        console.log('got match', match, def)
        if (!def) return match
        return ` <span class="glossary">${match}</span><span class="glossary-definition">${def.definition}</span>`
    })
}