# modules-used
> Fetches 1 line description for dependencies, outputs the list as Markdown text

```
npm install modules-used
```
Probably the best to use from Grunt / Gulp task runners when making documentation for
your project.

```js
var used = require('modules-used');
var markdownList = used();
/* returns string with a list something like
dep-foo - small utility
bar - great tool for
...
*/
```
This is useful to creating a list of 3rd party modules your project uses.

Assumes the dependencies are installed locally.

### 3rd party modules

- [debug](https://github.com/visionmedia/debug) - small debugging utility

### Small print
Author: Gleb Bahmutov &copy; 2015


- [@bahmutov](https://twitter.com/bahmutov)
- [glebbahmutov.com](http://glebbahmutov.com)
- [blog](http://glebbahmutov.com/blog/)

License: MIT - do anything with the code, but don&#39;t blame me if it does not work.

Spread the word: tweet, star on github, etc.

Support: if you find any problems with this module, email / tweet /
[open issue](https://github.com/bahmutov/modules-used/issues) on Github

## MIT License
Copyright (c) 2015 Gleb Bahmutov

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the &quot;Software&quot;), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED &quot;AS IS&quot;, WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

