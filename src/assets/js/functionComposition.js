import { compose, pipe} from 'lodash/fp'

let input = "    Js     ";

const trim = str => str.trim()
const wrapInDiv = str => `<div>${str}</div>`
const wrap = type => str => `<${type}>${str}</${type}>`//currying
const toLowerCase = str => str.toLowerCase()

const result = wrapInDiv(toLowerCase(trim(input))) ;

//-------------------------------

//same result different order
let transform = compose(wrapInDiv,toLowerCase, trim);
transform(input) 

let transform2 = pipe(trim, toLowerCase, wrapInDiv);
transform2(input); 

let transform3 = pipe(trim, toLowerCase, wrap("span"))
transform3(input)

