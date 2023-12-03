import React from 'react'
import { useNavigate } from 'react-router';

const Home = ({search,setSearch}) => {

    const navigator = useNavigate()

  return (
    <div className='search-div'>
        <form className="search-bar" onSubmit={()=>(navigator(`/word/${search}`))}>
            <input type="text" placeholder="Search any word.."
              onChange={(e)=>(setSearch(e.target.value))}
            />
            <button type='submit'>Search</button>
          </form>
    </div>
  )
}

export default Home



/*

0
: 
license
: 
{name: 'CC BY-SA 3.0', url: 'https://creativecommons.org/licenses/by-sa/3.0'}
meanings
: 
Array(2)
0
: 
antonyms
: 
[]
definitions
: 
Array(2)
0
: 
antonyms
: 
[]
definition
: 
"The short, loud, explosive sound uttered by a dog, a fox, and some other animals."
synonyms
: 
[]
[[Prototype]]
: 
Object
1
: 
antonyms
: 
[]
definition
: 
"An abrupt loud vocal utterance."
synonyms
: 
[]
[[Prototype]]
: 
Object
length
: 
2
[[Prototype]]
: 
Array(0)
partOfSpeech
: 
"noun"
synonyms
: 
[]
[[Prototype]]
: 
Object
1
: 
{partOfSpeech: 'verb', definitions: Array(3), synonyms: Array(2), antonyms: Array(0)}
length
: 
2
[[Prototype]]
: 
Array(0)
phonetic
: 
"/bɑːk/"
phonetics
: 
Array(2)
0
: 
audio
: 
"https://api.dictionaryapi.dev/media/pronunciations/en/bark-uk.mp3"
license
: 
{name: 'BY 4.0', url: 'https://creativecommons.org/licenses/by/4.0'}
sourceUrl
: 
"https://commons.wikimedia.org/w/index.php?curid=68569035"
text
: 
"/bɑːk/"
[[Prototype]]
: 
Object
1
: 
audio
: 
"https://api.dictionaryapi.dev/media/pronunciations/en/bark-us.mp3"
license
: 
{name: 'BY-SA 3.0', url: 'https://creativecommons.org/licenses/by-sa/3.0'}
sourceUrl
: 
"https://commons.wikimedia.org/w/index.php?curid=1769309"
text
: 
"/bɑɹk/"
[[Prototype]]
: 
Object
length
: 
2
[[Prototype]]
: 
Array(0)
sourceUrls
: 
['https://en.wiktionary.org/wiki/bark']
word
: 
"bark"
[[Prototype]]
: 
Object

*/