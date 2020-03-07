import _ from 'lodash';
import './style.css'
import Grow from './grow.png'
import Data from './data.xml'
import JsonData from './a.json'

function component() {
  var element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack','你好哇！'], ' ');

  element.classList.add('hello')

  let myGrow = new Image();
  myGrow.src = Grow

  element.appendChild(myGrow)

  console.log("data",Data)

  console.log("json",JsonData)

  return element;
}

document.body.appendChild(component());