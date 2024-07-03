import './util.js';
import './data.js';
import './functions.js';

import {createPicture, getPictures} from './generator-id/create-picture.js';
getPictures();
createPicture();

import {createMessage, createComment} from './generator-id/comment-message.js';
createMessage();
createComment();

import {getRandomInteger, getRandomArrayElements} from './generator-id/random-integer-elements.js';
getRandomInteger();
getRandomArrayElements();

import {createIdGenerator, generateCommentId} from './generator-id/create-id-generator.js';
createIdGenerator();
generateCommentId();


