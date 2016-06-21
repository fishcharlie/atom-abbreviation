'use babel';

import { CompositeDisposable } from 'atom';


module.exports = {

  activate(state) {


  // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
  this.subscriptions = new CompositeDisposable();

  // Register command that toggles this view
  this.subscriptions.add(atom.commands.add('atom-workspace', {'atom-abbreviation:abbreviation': () => this.abbreviation()}));
},


  abbreviation: function() {

    var textswap = require('./textswap');
    var editor = atom.workspace.getActiveTextEditor();
    var text = editor.getText();
    var newText = textswap(text);
    if (newText) {
      editor.setText(newText);
    }

  }
};
